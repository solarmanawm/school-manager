<template>
    <router-view v-slot="{ Component }">
        <component
                :is="Component"
                @edit="edit"
                @remove="remove"
                v-on="router.currentRoute.value.name === routeNames.fees ? { add } : {}"
        />
    </router-view>

    <Teleport to="#app-popup">
        <app-popup
                v-model:visible="popup.visible.value"
        >
            <template v-slot:title>
                {{ $t(popupTitle) }}
            </template>
            <template v-slot:content>
                <app-form
                        v-if="actionMode.is(SubmitActions.ADD) || actionMode.is(SubmitActions.EDIT)"
                        @submit.prevent=""
                        class="mb-0"
                >
                    <app-form-group
                            class="w-full"
                            target="name"
                            :label="$t('common.name')"
                            :required="true"
                            :errors="form.errors.name.value"
                    >
                        <app-control
                                v-model="form.fields.name.value"
                                class="w-full"
                                id="name"
                                :type="Type.TEXT"
                                :error="form.errors.name.value.length > 0"
                        />
                    </app-form-group>
                    <app-form-group
                            class="w-full"
                            target="value"
                            :label="$t('fee.popup.content.value')"
                            :required="true"
                            :errors="form.errors.value.value"
                    >
                        <app-control
                                v-model="form.fields.value.value"
                                class="w-full"
                                id="value"
                                :type="Type.TEXT"
                                :error="form.errors.value.value.length > 0"
                        />
                    </app-form-group>
                    <app-form-group
                            v-if="hasAnyFamilies"
                            :label="$t('fee.popup.content.families')"
                            class="w-full"
                            target="families"
                    >
                        <template #context>
                            <a
                                    href="#"
                                    @click.prevent="manageFees"
                                    class="text-blue-500 hover:text-blue-700 underline decoration-dashed hover:no-underline"
                            >{{ $t(selectAllText) }}</a>
                        </template>
                        <app-control
                                v-model="form.fields.families.value"
                                :type="Type.DROPDOWN"
                                :options="families"
                                :multiple="true"
                                id="families"
                                class="w-full"
                        />
                    </app-form-group>
                    <app-form-group
                            class="w-full"
                            target="description"
                            :label="$t('common.description')"
                            :errors="form.errors.description.value"
                    >
                        <app-control
                                v-model="form.fields.description.value"
                                class="w-full"
                                id="description"
                                :type="Type.TEXTAREA"
                                :error="form.errors.description.value.length > 0"
                        />
                    </app-form-group>
                </app-form>
                <p v-else class="text-center">{{ $t('fee.popup.content.remove') }}</p>
            </template>
            <template v-slot:footer>
                <div class="w-full flex items-center justify-between">
                    <app-button
                            @click="popup.close()"
                            :variant="Variant.SECONDARY"
                    >{{ $t('button.cancel') }}
                    </app-button>
                    <app-button
                            @click="form.submit(!actionMode.is(SubmitActions.REMOVE))"
                    >{{ $t(popupSubmitButtonText) }}
                    </app-button>
                </div>
            </template>
        </app-popup>
    </Teleport>
</template>

<script setup lang="ts">
import {FeeServiceCreateParamsInterface} from "../classes/AbstractFeeService";
import {FamilyInterface} from '../classes/AbstractFamilyService'
// @ts-ignore
import AppButton, {Variant} from "./AppButton.vue";
// @ts-ignore
import {computed, ref, watch} from "vue";
import AppPopup from './AppPopup.vue'
// @ts-ignore
import AppControl, {Type} from './AppControl.vue'
import AppForm from './AppForm.vue'
import AppFormGroup from './AppFormGroup.vue'
import {usePopup} from "../use/popup";
import {useMode} from "../use/mode";
import {useForm} from "../use/form";
import {useError} from "../use/error";
import {useDataStore} from "../store/data";
import {useRouter} from "vue-router";
import service from "../service";
import routeNames from "../router/names";

enum SubmitActions {
    ADD = 'ADD',
    EDIT = 'EDIT',
    REMOVE = 'REMOVE',
}

enum PopupTitle {
    ADD = 'fee.popup.title.add',
    EDIT = 'fee.popup.title.edit',
    REMOVE = 'fee.popup.title.remove',
}

enum PopupSubmitButtonText {
    ADD = 'button.create',
    EDIT = 'button.edit',
    REMOVE = 'button.remove',
}

interface Option {
    title: string;
    value: string;
}

interface SubmitActionsInterface {
    ADD: string;
    EDIT: string;
    REMOVE: string;
}

type FeeValidationKeys = keyof Pick<FeeServiceCreateParamsInterface, 'name' | 'value' | 'description'>;

type FeeValidation = { [key in FeeValidationKeys]: { [key: string]: any } }

const router = useRouter()
const dataStore = useDataStore()
const allFieldsSelected = ref(false)
const errors = ref([])
const onError = useError(errors)
const selectedFeesLength = computed(() => form.fields.families.value.length)
const selectAllText = computed(() => allFieldsSelected.value ? 'fee.popup.content.unselectAll' : 'fee.popup.content.selectAll')
const popupSubmitButtonText = computed(() => PopupSubmitButtonText[actionMode.value() as keyof typeof PopupSubmitButtonText])
const popupTitle = computed(() => PopupTitle[actionMode.value() as keyof typeof PopupTitle])
const families = computed(() => dataStore.families.map((item: FamilyInterface) => ({
    value: item.id,
    title: item.name,
})))
const hasAnyFamilies = computed(() => dataStore.families.length > 0)
const onValidated = () => {
    return new Promise((resolve) => {
        const formValues = form.values()

        if (actionMode.is(SubmitActions.ADD)) {
            return service.fee.create(formValues).then(resolve)
        }

        if (actionMode.is(SubmitActions.EDIT)) {
            return service.fee.update(formValues).then(resolve)
        }

        if (actionMode.is(SubmitActions.REMOVE)) {
            return service.fee.delete(formValues.id).then(resolve)
        }
    }).then(popup.close)
}
const popup = usePopup({
    onClose: () => {
        actionMode.reset()
        form.reset()
    },
})
const actionMode = useMode<SubmitActionsInterface>(SubmitActions, () => {
    if (actionMode.is()) {
        popup.open()
    }
})
const form = useForm<FeeServiceCreateParamsInterface, FeeValidation>({
    initialValues: {
        id: '',
        name: '',
        value: '',
        description: '',
        families: [],
        completed: false,
    },
    validation: {
        name: {
            required: true,
        },
        value: {
            required: true,
            integer: true,
        },
        description: {},
    },
    validationMessages: {
        name: {
            required: 'Please, enter a name.',
        },
        value: {
            required: 'You need to define a fee amount.',
        },
    },
    onValidated,
    onError,
})
const add = () => {
    actionMode.set(SubmitActions.ADD)
}
const edit = (id: string) => {
    const item = dataStore.getFeeById(id)

    if (item) {
        form.fields.id.value = item.id
        form.fields.name.value = item.name
        form.fields.value.value = item.value
        form.fields.description.value = item.description
        form.fields.completed.value = item.completed
        form.fields.families.value = item.families
    }

    actionMode.set(SubmitActions.EDIT)
}
const remove = (id: string) => {
    form.fields.id.value = id
    actionMode.set(SubmitActions.REMOVE)
}
const manageFees = () => {
    form.fields.families.value = allFieldsSelected.value ? [] : families.value.map((item: Option) => item.value)
}
const name = 'Fees'

watch(selectedFeesLength, (length: number) => {
    allFieldsSelected.value = length === families.value.length
})
</script>
