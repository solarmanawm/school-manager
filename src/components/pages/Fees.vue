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
                Create a new student
            </template>
            <template v-slot:content></template>
            <template v-slot:footer>
                <div class="w-full flex items-center justify-between">
                    <app-button
                            @click="popup.close()"
                            :variant="Variant.SECONDARY"
                    >Cancel
                    </app-button>
                    <app-button
                            @click=""
                    >Add
                    </app-button>
                </div>
            </template>
        </app-popup>
    </Teleport>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref} from 'vue'
// @ts-ignore
import AppButton, {Variant} from "../Button.vue";
import AppPopup from '../Popup.vue'
// @ts-ignore
import AppControl from '../Control.vue'
import {usePopup} from "../../use/popup";
import {useMode} from "../../use/mode";
import {useForm} from "../../use/form";
import {FeeServiceCreateParamsInterface} from "../../classes/AbstractFeeService";
import {useError} from "../../use/error";
import service from "../../service";

enum SubmitActions {
    ADD = 'ADD',
    EDIT = 'EDIT',
    REMOVE = 'REMOVE',
}

interface SubmitActionsInterface {
    ADD: string;
    EDIT: string;
    REMOVE: string;
}

type FeeValidationKeys = keyof Pick<FeeServiceCreateParamsInterface, 'name' | 'value'>;

type FeeValidation = { [key in FeeValidationKeys]: { [key: string]: any } }

let itemToHandleId = ''
const fees = ref([])
const errors = ref([])
const onError = useError(errors)
const onValidated = () => {
    return new Promise((resolve) => {
        if (actionMode.is(SubmitActions.ADD)) {
            service.fee.create(form.fields).then(() => {
                fees.value.push({...form.fields})
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
    },
    validation: {
        name: {
            required: true,
        },
        value: {
            required: true,
        },
    },
    onValidated,
    onError,
})
const add = () => {
    actionMode.set(SubmitActions.ADD)
}
const edit = () => {
    actionMode.set(SubmitActions.EDIT)
}
const remove = () => {
    actionMode.set(SubmitActions.REMOVE)
}
const name = 'Fees'
</script>
