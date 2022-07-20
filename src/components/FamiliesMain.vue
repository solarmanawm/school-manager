<template>
    <router-view v-slot="{ Component }">
        <component
                :is="Component"
                @edit="edit"
                @remove="remove"
                v-on="events"
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
                            target="Name"
                            :required="true"
                            :errors="form.errors.name.value"
                    >
                        <app-control
                                v-model="form.fields.name.value"
                                :error="form.errors.name.value.length > 0"
                                class="w-full"
                                id="name"
                        />
                    </app-form-group>
                    <app-form-group
                            v-if="hasAnyFees"
                            class="w-full"
                            label="Fees"
                            target="fees"
                    >
                        <template #context>
                            <a
                                    href="#"
                                    @click.prevent="manageFees"
                                    class="text-blue-500 hover:text-blue-700 underline decoration-dashed hover:no-underline"
                            >{{ selectAllText }}</a>
                        </template>
                        <app-control
                                v-model="form.fields.fees.value"
                                :type="Type.DROPDOWN"
                                :options="fees"
                                :multiple="true"
                                id="fees"
                                class="w-full"
                        />
                    </app-form-group>
                </app-form>
                <p v-else class="text-center">Are you sure you want to remove this family?</p>
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

    <Teleport to="#app-popup">
        <app-popup v-model:visible="incomePopup.visible.value">
            <template v-slot:title>Add Income</template>
            <template v-slot:content>
                <app-form
                        @submit.prevent=""
                        class="mb-0"
                >
                    <app-form-group
                            class="w-full"
                            label="Amount"
                            target="amount"
                            :required="true"
                            :errors="incomeForm.errors.amount.value"
                    >
                        <app-control
                                v-model="incomeForm.fields.amount.value"
                                :error="incomeForm.errors.amount.value.length > 0"
                                class="w-full"
                                id="amount"
                        />
                    </app-form-group>
                </app-form>
            </template>
            <template v-slot:footer>
                <div class="w-full flex items-center justify-between">
                    <app-button
                            @click="incomePopup.close()"
                            :variant="Variant.SECONDARY"
                    >Cancel
                    </app-button>
                    <app-button @click="incomeForm.submit()">Add</app-button>
                </div>
            </template>
        </app-popup>
    </Teleport>
</template>

<script setup lang="ts">
// @ts-ignore
import {computed, ref, watch} from "vue";
import {useRouter} from "vue-router";
import {FamilyServiceCreateParamsInterface} from '../classes/AbstractFamilyService'
import {FeeServiceCreateParamsInterface} from '../classes/AbstractFeeService'
// @ts-ignore
import AppButton, {Variant} from "./AppButton.vue"
import AppPopup from './AppPopup.vue'
import AppForm from './AppForm.vue'
import AppFormGroup from './AppFormGroup.vue'
// @ts-ignore
import AppControl, {Type} from './AppControl.vue'
import {useMode} from "../use/mode"
import {useForm} from "../use/form"
import {useError} from "../use/error"
import {usePopup} from "../use/popup"
import {useDataStore} from "../store/data";
import service from "../service"
import routeNames from '../router/names'

enum SubmitActions {
    ADD = 'ADD',
    EDIT = 'EDIT',
    REMOVE = 'REMOVE',
}

enum PopupTitle {
    ADD = 'Create a new family',
    EDIT = 'Edit the family',
    REMOVE = 'Remove the family',
}

enum PopupSubmitButtonText {
    ADD = 'Create',
    EDIT = 'Save',
    REMOVE = 'Remove',
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

interface Income {
    amount: string;
}

type FamilyValidationKeys = keyof Pick<FamilyServiceCreateParamsInterface, 'name'>;

type FamilyValidation = { [key in FamilyValidationKeys]: { [key: string]: any } }

type IncomeValidationKeys = keyof Pick<Income, 'amount'>;

type IncomeValidation = { [key in IncomeValidationKeys]: { [key: string]: any } }

let itemToHandleId: string = ''
const dataStore = useDataStore()
const router = useRouter()
const errors = ref([])
const onError = useError(errors)
const allFieldsSelected = ref(false)
const selectedFeesLength = computed(() => form.fields.fees.value.length)
const selectAllText = computed(() => allFieldsSelected.value ? 'Unselect All' : 'Select All')
const fees = computed(() => dataStore.fees.map((item: FeeServiceCreateParamsInterface) => ({
    value: item.id,
    title: item.name,
})))
const hasAnyFees = computed(() => dataStore.fees.length > 0)
const onValidated = () => {
    return new Promise((resolve) => {
        const formValues = form.values()

        if (actionMode.is(SubmitActions.ADD)) {
            service.family.create(formValues).then(resolve)
        }

        if (actionMode.is(SubmitActions.EDIT)) {
            service.family.update(formValues).then(resolve)
        }

        if (actionMode.is(SubmitActions.REMOVE)) {
            service.family.delete(formValues.id).then(resolve)
        }
    }).then(popup.close)
}
const onIncomeValidated = () => {
    return new Promise((resolve) => {
        service.family.income(form.values().id, +incomeForm.values().amount).then(resolve)
    }).then(incomePopup.close)
}
const actionMode = useMode<SubmitActionsInterface>(SubmitActions, () => {
    if (actionMode.is()) {
        popup.open()
    }
})
const form = useForm<FamilyServiceCreateParamsInterface, FamilyValidation>({
    initialValues: {
        id: '',
        name: '',
        income: 0,
        fees: [],
    },
    validation: {
        name: {
            required: true,
        },
    },
    onValidated,
    onError,
})
const incomeForm = useForm<Income, IncomeValidation>({
    initialValues: {
        amount: '',
    },
    validation: {
        amount: {
            required: true,
            integer: true,
        },
    },
    onValidated: onIncomeValidated,
    onError,
})
const popup = usePopup({
    onClose: () => {
        itemToHandleId = ''
        actionMode.reset()
        form.reset()
    },
})
const incomePopup = usePopup({
    onClose: () => {
        incomeForm.reset()
    },
})
const add = () => {
    actionMode.set(SubmitActions.ADD)
}
const edit = (id: string) => {
    const item = dataStore.getFamilyById(id)
    form.fields.id.value = item.id
    form.fields.name.value = item.name
    form.fields.fees.value = item.fees
    actionMode.set(SubmitActions.EDIT)
}
const remove = (id: string) => {
    form.fields.id.value = id
    actionMode.set(SubmitActions.REMOVE)
}
const income = (id: string) => {
    form.fields.id.value = id
    incomePopup.open()
}
const manageFees = () => {
    form.fields.fees.value = allFieldsSelected.value ? [] : fees.value.map((item: Option) => item.value)
}
const popupTitle = computed(() => PopupTitle[actionMode.value() as keyof typeof PopupTitle])
const popupSubmitButtonText = computed(() => PopupSubmitButtonText[actionMode.value() as keyof typeof PopupSubmitButtonText])
const events = computed(() => {
    const obj: {
        add?: () => void;
        income?: () => void;
    } = {}

    if (router.currentRoute.value.name === routeNames.families) {
        obj.add = add
    }

    if (router.currentRoute.value.name === routeNames.family) {
        obj.income = income
    }
    return obj
})
const name = 'Families'

watch(selectedFeesLength, (length: number) => {
    allFieldsSelected.value = length === fees.value.length
})
</script>
