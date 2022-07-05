<template>
    <Teleport to="#app-context-buttons">
        <app-button
                @click="addStudent"
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
                        ref="formRef"
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
                            label="Father name"
                            for="fatherName"
                            :errors="form.errors.fatherName.value"
                    >
                        <app-control
                                v-model="form.fields.fatherName"
                                :error="form.errors.fatherName.value.length > 0"
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
                        />
                    </app-form-group>
                </app-form>
            </template>
            <template v-slot:footer>
                <div class="w-full flex items-center justify-between">
                    <app-button
                            @click="popup.close()"
                            variant="light"
                    >Cancel
                    </app-button>
                    <app-button
                            @click="form.submit()"
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
                        class="w-full mb-6"
                />
            </app-col>
        </app-row>
    </app-container>
</template>

<script setup lang="ts">
// @ts-ignore
import {reactive, ref} from "vue";

import AppForm from '../shared/Form.vue'
import AppFormGroup from '../shared/FormGroup.vue'
// @ts-ignore
import AppControl from '../Control.vue'
import AppPopup from '../Popup.vue'
import AppStudent from '../Student.vue'
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

enum DefaultStudent {
    ID = 'id',
    SEX = 'male',
    DATE_OF_BIRTH = ''
}

type StudentValidationKeys = keyof Pick<StudentServiceCreateParamsInterface, 'firstName' | 'lastName' | 'fatherName'>;

type StudentValidation = { [key in StudentValidationKeys]: { [key: string]: any } }

const errors = ref([])
const errorHandler = useError(errors)
const onError = (error: any) => {
    errorHandler(error)
}
const onValidated = () => {
    const newStudent: StudentServiceCreateParamsInterface = Object.create(null, {
        id: {
            value: form.fields.id || DefaultStudent.ID,
        },
        firstName: {
            value: form.fields.firstName,
        },
        lastName: {
            value: form.fields.lastName,
        },
        fatherName: {
            value: form.fields.fatherName,
        },
        sex: {
            value: form.fields.sex || DefaultStudent.SEX,
        },
        dateOfBirth: {
            value: form.fields.dateOfBirth || DefaultStudent.DATE_OF_BIRTH,
        },
    })

    return service.student.create(newStudent).then(() => {
        students.value.push(newStudent)
        popup.close()
    })
}
const students = ref<StudentServiceCreateParamsInterface[]>([])
const formRef = ref(null)
const form = useForm<StudentServiceCreateParamsInterface, StudentValidation>({
    initialValues: {
        id: '',
        sex: '',
        firstName: '',
        lastName: '',
        fatherName: '',
        dateOfBirth: '',
    },
    validation: {
        firstName: {
            required: true,
        },
        lastName: {
            required: true,
        },
        fatherName: {},
    },
    onValidated,
    onError,
})
const popup = usePopup({
    onClose: () => {
        form.reset()
    },
})
const name = 'Students'
const addStudent = () => {
    popup.open()
}
</script>
