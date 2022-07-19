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
                {{ popupTitle }}
            </template>
            <template v-slot:content>
                <app-form
                        v-if="actionMode.is(SubmitActions.ADD) || actionMode.is(SubmitActions.EDIT)"
                        @submit.prevent=""
                        class="mb-0"
                >
                    <app-form-group
                            class="w-full"
                            label="Name"
                            target="name"
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
                            label="Value"
                            target="value"
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
                            class="w-full"
                            label="Families"
                            target="families"
                            :required="true"
                            :errors="form.errors.families.value"
                    >
                        <template #context>
                            <a
                                    href="#"
                                    @click.prevent="allFieldsSelected = !allFieldsSelected"
                                    class="text-blue-500 hover:text-blue-700 underline decoration-dashed hover:no-underline"
                            >{{ selectAllText }}</a>
                        </template>
                        <app-control
                                v-model="form.fields.families.value"
                                :type="Type.DROPDOWN"
                                :options="families"
                                :multiple="true"
                                id="families"
                                class="w-full"
                                :error="form.errors.families.value.length > 0"
                        />
                    </app-form-group>
                    <app-form-group
                            class="w-full"
                            label="Description"
                            target="description"
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
                <p v-else class="text-center">Are you sure you want to remove this fee?</p>
            </template>
            <template v-slot:footer>
                <div class="w-full flex items-center justify-between">
                    <app-button
                            @click="popup.close()"
                            :variant="Variant.SECONDARY"
                    >Cancel
                    </app-button>
                    <app-button
                            @click="form.submit(!actionMode.is(SubmitActions.REMOVE))"
                    >{{ popupSubmitButtonText }}
                    </app-button>
                </div>
            </template>
        </app-popup>
    </Teleport>
</template>

<script setup lang="ts">
import {FeeServiceCreateParamsInterface} from "../classes/AbstractFeeService";
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
import {onBeforeRouteUpdate, useRouter} from "vue-router";
import service from "../service";
import routeNames from "../router/names";

const families = [
    {title: 'Family #1', value: 'id1'},
    {title: 'Family #2', value: 'id2'},
];

enum SubmitActions {
    ADD = 'ADD',
    EDIT = 'EDIT',
    REMOVE = 'REMOVE',
}

enum PopupTitle {
    ADD = 'Create a new fee',
    EDIT = 'Edit the fee',
    REMOVE = 'Remove the fee',
}

enum PopupSubmitButtonText {
    ADD = 'Create',
    EDIT = 'Save',
    REMOVE = 'Remove',
}

interface SubmitActionsInterface {
    ADD: string;
    EDIT: string;
    REMOVE: string;
}

type FeeValidationKeys = keyof Pick<FeeServiceCreateParamsInterface, 'name' | 'value' | 'description' | 'families'>;

type FeeValidation = { [key in FeeValidationKeys]: { [key: string]: any } }

const router = useRouter()
const dataStore = useDataStore()
const selectAllText = computed(() => allFieldsSelected.value ? 'Unselect All' : 'Select All')
const popupSubmitButtonText = computed(() => PopupSubmitButtonText[actionMode.value() as keyof typeof PopupSubmitButtonText])
const popupTitle = computed(() => PopupTitle[actionMode.value() as keyof typeof PopupTitle])
const allFieldsSelected = ref(false)
const errors = ref([])
const onError = useError(errors)
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
        families: {
            required: true,
            minLength: 1,
        },
    },
    validationMessages: {
        name: {
            required: 'Please, enter a name.',
        },
        value: {
            required: 'You need to define a fee amount.',
        },
        families: {
            required: 'You need to select at least one item.',
            minLength: 'You need to select at least one item.',
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
    form.fields.id.value = item.id
    form.fields.name.value = item.name
    form.fields.value.value = item.value
    form.fields.description.value = item.description
    form.fields.completed.value = item.completed
    form.fields.families.value = item.families
    actionMode.set(SubmitActions.EDIT)
}
const remove = (id: string) => {
    form.fields.id.value = id
    actionMode.set(SubmitActions.REMOVE)
}
const name = 'Fees'

watch(allFieldsSelected, (isSelected: boolean) => {
    form.fields.families.value = isSelected ? families.map(({value}) => value) : []
})
onBeforeRouteUpdate(() => {
})
</script>
