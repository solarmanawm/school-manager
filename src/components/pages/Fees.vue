<template>
    <Teleport to="#app-context-buttons">
        <div class="flex">
            <app-button
                    :variant="Variant.LIGHT"
                    @click="add"
                    class="whitespace-nowrap"
            >New Fee
            </app-button>
        </div>
    </Teleport>

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
                                class="w-full"
                                id="families"
                                :type="Type.CHECKBOX"
                                :error="form.errors.families.value.length > 0"
                                :options="families"
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
                    >Add
                    </app-button>
                </div>
            </template>
        </app-popup>
    </Teleport>

    <app-container>
        <app-row>
            <app-col
                    v-for="item in fees"
                    :class="viewMode === Views.CARD ? 'w-1/3' : 'w-full'"
                    class="flex"
            >
                <app-fee-card
                        :view="viewMode"
                        :key="item.id"
                        :item="item"
                        @edit="edit"
                        @remove="remove"
                        class="w-full mb-6"
                />
            </app-col>
        </app-row>
    </app-container>
</template>

<script setup lang="ts">
// @ts-ignore
import {computed, ref, watch} from 'vue'
// @ts-ignore
import AppButton, {Variant} from "../Button.vue";
import AppPopup from '../Popup.vue'
// @ts-ignore
import {Views} from "../FeeCard.vue";
// @ts-ignore
import AppControl, {Type} from '../Control.vue'
// @ts-ignore
import AppFeeCard from '../FeeCard.vue'
import AppContainer from '../shared/Container.vue'
import AppRow from '../shared/Row.vue'
import AppCol from '../shared/Col.vue'
import AppForm from '../shared/Form.vue'
import AppFormGroup from '../shared/FormGroup.vue'
import {usePopup} from "../../use/popup";
import {useMode} from "../../use/mode";
import {useForm} from "../../use/form";
import {FeeServiceCreateParamsInterface} from "../../classes/AbstractFeeService";
import {useError} from "../../use/error";
import service from "../../service";

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

interface SubmitActionsInterface {
    ADD: string;
    EDIT: string;
    REMOVE: string;
}

type FeeValidationKeys = keyof Pick<FeeServiceCreateParamsInterface, 'name' | 'value' | 'description' | 'families'>;

type FeeValidation = { [key in FeeValidationKeys]: { [key: string]: any } }

let itemToHandleId = ''
const allFieldsSelected = ref(false)
const selectAllText = computed(() => allFieldsSelected.value ? 'Unselect All' : 'Select All')
const popupTitle = computed(() => PopupTitle[actionMode.value() as keyof typeof PopupTitle])
const viewMode = ref(Views.CARD)
const fees = ref<FeeServiceCreateParamsInterface[]>([])
const errors = ref([])
const onError = useError(errors)
const onValidated = () => {
    return new Promise((resolve) => {
        if (actionMode.is(SubmitActions.ADD)) {
            service.fee.create(form.fields).then(() => {
                fees.value.push(form.values())
            }).then(resolve)
        }

        if (actionMode.is(SubmitActions.EDIT)) {
            service.fee.update({
                from: {} as FeeServiceCreateParamsInterface,
                to: form.fields,
            }).then(() => {

            }).then(resolve)
        }

        if (actionMode.is(SubmitActions.REMOVE)) {
            service.fee.delete(itemToHandleId).then(() => {

            }).then(resolve)
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
const edit = (item: FeeServiceCreateParamsInterface) => {
    actionMode.set(SubmitActions.EDIT)
}
const remove = () => {
    actionMode.set(SubmitActions.REMOVE)
}
const name = 'Fees'

watch(allFieldsSelected, (isSelected: boolean) => {
    form.fields.families.value = isSelected ? families.map(({value}) => value) : []
})
</script>
