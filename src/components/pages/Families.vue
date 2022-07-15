<template>
    <Teleport to="#app-context-buttons">
        <div class="flex">
            <app-button
                    :variant="Variant.LIGHT"
                    @click="add"
                    class="whitespace-nowrap mr-3"
            >New Family
            </app-button>
            <app-control
                    v-model="viewMode"
                    class="w-full"
                    id="sex"
                    type="button-set"
                    :variant="Variant.LIGHT"
                    :options="[
                        {icon: 'fa-solid fa-border-all', value: Views.CARD},
                        {icon: 'fa-solid fa-list', value: Views.LIST},
                ]"
            />
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
                            class="w-full"
                            label="Fees"
                            target="fees"
                            :required="true"
                    >
                        <app-control
                                v-model="form.fields.fees.value"
                                class="w-full"
                                id="fees"
                                :type="Type.DROPDOWN"
                                :options="[
                                        {title: 'Fee 1', value: '1'},
                                        {title: 'Fee 2', value: '2'},
                                ]"
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
                    >Add
                    </app-button>
                </div>
            </template>
        </app-popup>
    </Teleport>

    <app-container>
        <app-row>
            <app-col
                    v-for="item in families"
                    :class="viewMode === Views.CARD ? 'w-1/3' : 'w-full'"
            >
                <app-family-card
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
import {computed, ref} from "vue";
import {FamilyServiceCreateParamsInterface} from '../../classes/AbstractFamilyService'
// @ts-ignore
import {Views} from "../FamilyCard.vue"
// @ts-ignore
import AppControl, {Type} from '../Control.vue'
// @ts-ignore
import AppButton, {Variant} from "../Button.vue"
import AppPopup from '../Popup.vue'
import AppForm from '../shared/Form.vue'
import AppFormGroup from '../shared/FormGroup.vue'
import AppContainer from '../shared/Container.vue'
import AppRow from '../shared/Row.vue'
import AppCol from '../shared/Col.vue'
// @ts-ignore
import AppFamilyCard, {Family} from '../FamilyCard.vue'
import {useMode} from "../../use/mode"
import {useForm} from "../../use/form"
import {StudentServiceCreateParamsInterface} from "../../classes/AbstractStudentService"
import {useError} from "../../use/error"
import service from "../../service"
import {usePopup} from "../../use/popup"

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

interface SubmitActionsInterface {
    ADD: string;
    EDIT: string;
    REMOVE: string;
}

type FamilyValidationKeys = keyof Pick<FamilyServiceCreateParamsInterface, 'name'>;

type FamilyValidation = { [key in FamilyValidationKeys]: { [key: string]: any } }

let itemToHandleId: string = ''
const errors = ref([])
const families = ref<FamilyServiceCreateParamsInterface[]>([])
const onError = useError(errors)
const onValidated = () => {
    return new Promise((resolve) => {
        if (actionMode.is(SubmitActions.ADD)) {
            service.family.create(form.fields).then(() => {
                families.value.push(form.values())
            }).then(resolve)
        }

        if (actionMode.is(SubmitActions.EDIT)) {
            service.family.update({
                from: {} as StudentServiceCreateParamsInterface,
                to: form.fields,
            }).then(() => {
                //
            }).then(resolve)
        }

        if (actionMode.is(SubmitActions.REMOVE)) {
            service.family.delete(itemToHandleId).then(() => {
                //
            }).then(resolve)
        }
    }).then(popup.close)
}
const viewMode = ref(Views.CARD)
const actionMode = useMode<SubmitActionsInterface>(SubmitActions, () => {
    if (actionMode.is()) {
        popup.open()
    }
})
const form = useForm<FamilyServiceCreateParamsInterface, FamilyValidation>({
    initialValues: {
        id: '',
        name: '',
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
const popup = usePopup({
    onClose: () => {
        itemToHandleId = ''
        actionMode.reset()
        form.reset()
    },
})
const add = () => {
    actionMode.set(SubmitActions.ADD)
}
const edit = (item: Family) => {
    itemToHandleId = item.id
    form.fields.name.value = item.name
    actionMode.set(SubmitActions.EDIT)
}
const remove = (id: string) => {
    itemToHandleId = id
    actionMode.set(SubmitActions.REMOVE)
}
const popupTitle = computed(() => PopupTitle[actionMode.value() as keyof typeof PopupTitle])
const name = 'Families'
</script>
