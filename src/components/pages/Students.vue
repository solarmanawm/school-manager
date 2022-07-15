<template>
    <Teleport to="#app-context-buttons">
        <div class="flex">
            <app-button
                    :variant="Variant.LIGHT"
                    @click="add"
                    class="whitespace-nowrap mr-3"
            >New Student
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
                            label="Family"
                            target="family"
                            :required="true"
                            :errors="form.errors.family.value"
                    >
                        <app-control
                                v-model="form.fields.family.value"
                                class="w-full"
                                id="family"
                                :type="Type.DROPDOWN"
                                :error="form.errors.family.value.length > 0"
                                :options="[
                                        {title: 'Family #1', value: '1'},
                                        {title: 'Family #2', value: '2'},
                                ]"
                        />
                    </app-form-group>
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
                            label="Date of birth"
                            target="dateOfBirth"
                    >
                        <app-control
                                v-model="form.fields.dateOfBirth.value"
                                :type="Type.DATE_PICKER"
                                class="w-full"
                                id="dateOfBirth"
                        />
                    </app-form-group>
                    <app-form-group
                            class="w-full"
                            label="Sex"
                            target="sex"
                    >
                        <app-control
                                v-model="form.fields.sex.value"
                                class="w-full"
                                id="sex"
                                :type="Type.BUTTON_SET"
                                :variant="Variant.LIGHT"
                                :options="[
                                        {title: 'Male', value: 'male'},
                                        {title: 'Female', value: 'female'},
                                ]"
                        />
                    </app-form-group>
                </app-form>
                <p v-else class="text-center">Are you sure you want to remove this student?</p>
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
                    v-for="item in students"
                    :class="viewMode === Views.CARD ? 'w-1/3' : 'w-full'"
            >
                <app-student-card
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
import {computed, reactive, ref, watch} from "vue";

import AppForm from '../shared/Form.vue'
import AppFormGroup from '../shared/FormGroup.vue'
// @ts-ignore
import AppControl, {Type} from '../Control.vue'
// @ts-ignore
import {Variant} from "../Button.vue";
import AppPopup from '../Popup.vue'
// @ts-ignore
import AppStudentCard, {Student, Views} from '../StudentCard.vue'
// @ts-ignore
import AppButton from '../Button.vue'
import AppContainer from '../shared/Container.vue'
import AppRow from '../shared/Row.vue'
import AppCol from '../shared/Col.vue'

import {usePopup} from "../../use/popup"
import {useForm} from "../../use/form"
import {useError} from '../../use/error'
import {StudentServiceCreateParamsInterface} from "../../classes/AbstractStudentService";
import service from "../../service";
import {useMode} from "../../use/mode";

enum SubmitActions {
    ADD = 'ADD',
    EDIT = 'EDIT',
    REMOVE = 'REMOVE',
}

enum PopupTitle {
    ADD = 'Create a new student',
    EDIT = 'Edit the student',
    REMOVE = 'Remove the student',
}

interface SubmitActionsInterface {
    ADD: string;
    EDIT: string;
    REMOVE: string;
}

type StudentValidationKeys = keyof Pick<StudentServiceCreateParamsInterface, 'name' | 'family'>;

type StudentValidation = { [key in StudentValidationKeys]: { [key: string]: any } }

let itemToHandleId: string = ''
const errors = ref([])
const onError = useError(errors)
const onValidated = () => {
    return new Promise((resolve) => {
        if (actionMode.is(SubmitActions.ADD)) {
            service.student.create(form.fields).then(() => {
                students.value.push(form.values())
            }).then(resolve)
        }

        if (actionMode.is(SubmitActions.EDIT)) {
            service.student.update({
                from: {} as StudentServiceCreateParamsInterface,
                to: form.fields,
            }).then(() => {
                //
            }).then(resolve)
        }

        if (actionMode.is(SubmitActions.REMOVE)) {
            service.student.delete(itemToHandleId).then(() => {
                //
            }).then(resolve)
        }
    }).then(popup.close)
}
const students = ref<StudentServiceCreateParamsInterface[]>([])
const viewMode = ref(Views.CARD)
const actionMode = useMode<SubmitActionsInterface>(SubmitActions, () => {
    if (actionMode.is()) {
        popup.open()
    }
})
const form = useForm<StudentServiceCreateParamsInterface, StudentValidation>({
    initialValues: {
        id: '',
        sex: 'male',
        name: '',
        family: '',
        dateOfBirth: '',
    },
    validation: {
        name: {
            required: true,
        },
        family: {
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
const popupTitle = computed(() => PopupTitle[actionMode.value() as keyof typeof PopupTitle])
const add = () => {
    actionMode.set(SubmitActions.ADD)
}
const edit = (item: Student) => {
    itemToHandleId = item.id
    form.fields.name = item.name
    form.fields.sex = item.sex
    form.fields.dateOfBirth = item.dateOfBirth
    form.fields.family = item.family
    actionMode.set(SubmitActions.EDIT)
}
const remove = (id: string) => {
    itemToHandleId = id
    actionMode.set(SubmitActions.REMOVE)
}
const name = 'Students'
</script>
