<template>
    <Teleport to="#app-context-buttons">
        <app-button
                @click="addStudent"
        >New Student</app-button>
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
                            :errors="validator.firstName.$errors"
                    >
                        <app-control
                                v-model="validator.firstName.$model"
                                :error="validator.firstName.$error"
                                class="w-full"
                                id="firstName"
                        />
                    </app-form-group>
                    <app-form-group
                            class="w-full"
                            label="Last name"
                            for="lastName"
                            :required="true"
                            :errors="validator.lastName.$errors"
                    >
                        <app-control
                                v-model="validator.lastName.$model"
                                :error="validator.lastName.$error"
                                class="w-full"
                                id="lastName"
                        />
                    </app-form-group>
                    <app-form-group
                            class="w-full"
                            label="Father name"
                            for="fatherName"
                            :errors="validator.fatherName.$errors"
                    >
                        <app-control
                                v-model="validator.fatherName.$model"
                                :error="validator.fatherName.$error"
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
                                v-model="data.sex"
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
                    >Cancel</app-button>
                    <app-button
                            @click="form.submit()"
                    >Add</app-button>
                </div>
            </template>
        </app-popup>
    </Teleport>

    <div class="">
        <app-student v-for="item in students" :key="item.id" :item="item"/>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import {reactive, ref} from "vue";
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators"

import AppForm from '../shared/Form.vue'
import AppFormGroup from '../shared/FormGroup.vue'
// @ts-ignore
import AppControl from '../Control.vue'
import AppPopup from '../Popup.vue'
import AppStudent from '../Student.vue'
// @ts-ignore
import AppButton from '../Button.vue'
import {usePopup} from "../../use/popup";
import {useForm} from "../../use/form";
import {StudentServiceCreateParamsInterface} from "../../classes/AbstractStudentService";
import service from "../../service";

enum DefaultStudent {
    ID = 'id',
    SEX = 'male',
    DATE_OF_BIRTH = ''
}

const onError = (error: Error) => {
    console.error(error)
}
const onSuccess = () => {
    const newStudent: StudentServiceCreateParamsInterface = Object.create(null, {
        id: {
            value: data.id || DefaultStudent.ID,
        },
        firstName: {
            value: data.firstName,
        },
        lastName: {
            value: data.lastName,
        },
        fatherName: {
            value: data.fatherName,
        },
        sex: {
            value: data.sex || DefaultStudent.SEX,
        },
        dateOfBirth: {
            value: data.dateOfBirth || DefaultStudent.DATE_OF_BIRTH,
        },
    })

    return service.student.create(newStudent).then(() => {
        students.value.push(newStudent)
        popup.close()
    })
}
const students = ref<StudentServiceCreateParamsInterface[]>([])
const formRef = ref(null)
const data = reactive({
    sex: '',
    firstName: '',
    lastName: '',
    fatherName: '',
    dateOfBirth: '',
})
const validator = useVuelidate({
    firstName: {
        required,
    },
    lastName: {
        required,
    },
    fatherName: {},
}, data)
const form = useForm({
    validator: validator.value,
    onSuccess,
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
