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
                        {icon: 'fa-solid fa-border-all', value: 'card'},
                        {icon: 'fa-solid fa-list', value: 'list'},
                ]"
            />
        </div>
    </Teleport>

    <Teleport to="#app-popup">
        <app-popup
                v-model:visible="popup.visible.value"
        >
            <template v-slot:title>
                Create a new student
            </template>
            <template v-slot:content>
                <app-form
                        v-if="actionMode.is(SubmitActions.ADD) || actionMode.is(SubmitActions.EDIT)"
                        @submit.prevent=""
                        class="mb-0"
                >
                    <app-form-group
                            class="w-full"
                            label="First name"
                            for="firstName"
                            :required="true"
                            :errors="form.errors.firstName.value"
                    >
                        <app-control
                                v-model="form.fields.firstName"
                                :error="form.errors.firstName.value.length > 0"
                                class="w-full"
                                id="firstName"
                        />
                    </app-form-group>
                    <app-form-group
                            class="w-full"
                            label="Last name"
                            for="lastName"
                            :required="true"
                            :errors="form.errors.lastName.value"
                    >
                        <app-control
                                v-model="form.fields.lastName"
                                :error="form.errors.lastName.value.length > 0"
                                class="w-full"
                                id="lastName"
                        />
                    </app-form-group>
                    <app-form-group
                            class="w-full"
                            label="Patronymic"
                            for="patronymic"
                            :errors="form.errors.patronymic.value"
                    >
                        <app-control
                                v-model="form.fields.patronymic"
                                :error="form.errors.patronymic.value.length > 0"
                                class="w-full"
                                id="fatherName"
                        />
                    </app-form-group>
                    <app-form-group
                            class="w-full"
                            label="Sex"
                            for="sex"
                    >
                        <app-control
                                v-model="form.fields.sex"
                                class="w-full"
                                id="sex"
                                type="button-set"
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
                    :class="viewMode === 'card' ? 'w-1/3' : 'w-full'"
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
import {reactive, ref, watch} from "vue";

import AppForm from '../shared/Form.vue'
import AppFormGroup from '../shared/FormGroup.vue'
// @ts-ignore
import AppControl from '../Control.vue'
// @ts-ignore
import {Variant} from "../Button.vue";
import AppPopup from '../Popup.vue'
import AppStudentCard, {Student} from '../StudentCard.vue'
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

interface SubmitActionsInterface {
    ADD: string;
    EDIT: string;
    REMOVE: string;
}

type StudentValidationKeys = keyof Pick<StudentServiceCreateParamsInterface, 'firstName' | 'lastName' | 'patronymic'>;

type StudentValidation = { [key in StudentValidationKeys]: { [key: string]: any } }

let itemToHandleId: string = ''
const errors = ref([])
const onError = useError(errors)
const onValidated = () => {
    return new Promise((resolve) => {
        if (actionMode.is(SubmitActions.ADD)) {
            service.student.create(form.fields).then(() => {
                students.value.push({...form.fields})
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
const viewMode = ref('card')
const actionMode = useMode<SubmitActionsInterface>(SubmitActions, () => {
    if (actionMode.is()) {
        popup.open()
    }
})
const form = useForm<StudentServiceCreateParamsInterface, StudentValidation>({
    initialValues: {
        id: '',
        sex: 'male',
        firstName: '',
        lastName: '',
        patronymic: '',
        dateOfBirth: '',
    },
    validation: {
        firstName: {
            required: true,
        },
        lastName: {
            required: true,
        },
        patronymic: {},
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
const edit = (item: Student) => {
    itemToHandleId = item.id
    form.fields.firstName = item.firstName
    form.fields.lastName = item.lastName
    form.fields.patronymic = item.patronymic
    form.fields.sex = item.sex
    form.fields.dateOfBirth = item.dateOfBirth
    actionMode.set(SubmitActions.EDIT)
}
const remove = (id: string) => {
    itemToHandleId = id
    actionMode.set(SubmitActions.REMOVE)
}
const name = 'Students'
</script>
