<template>
    <Teleport to="#app-context-buttons">
        <app-button
                @click="add"
        >New Student
        </app-button>
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
                        v-if="mode.is(Modes.ADD) || mode.is(Modes.EDIT)"
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
                            variant="light"
                    >Cancel
                    </app-button>
                    <app-button
                            @click="form.submit(!mode.is(Modes.REMOVE))"
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
                    class="w-1/3"
            >
                <app-student
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
import AppPopup from '../Popup.vue'
import AppStudent, {Student} from '../Student.vue'
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

enum Modes {
    ADD = 'ADD',
    EDIT = 'EDIT',
    REMOVE = 'REMOVE',
}

interface ModesInterface {
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
        if (mode.is(Modes.ADD)) {
            service.student.create(form.fields).then(resolve)
        }

        if (mode.is(Modes.EDIT)) {
            service.student.update({
                from: {} as StudentServiceCreateParamsInterface,
                to: form.fields,
            }).then(resolve)
        }

        if (mode.is(Modes.REMOVE)) {
            service.student.delete(itemToHandleId).then(resolve)
        }
    }).then(popup.close)
}
const students = ref<StudentServiceCreateParamsInterface[]>([])
const mode = useMode<ModesInterface>(Modes)
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
        form.reset()
    },
})
const add = () => {
    mode.set(Modes.ADD)
    popup.open()
}
const edit = (id: string) => {
    itemToHandleId = id
    mode.set(Modes.EDIT)
    popup.open()
}
const remove = (id: string) => {
    itemToHandleId = id
    mode.set(Modes.REMOVE)
    popup.open()
}
const name = 'Students'
</script>
