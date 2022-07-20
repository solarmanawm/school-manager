<template>
    <router-view v-slot="{ Component }">
        <component
                :is="Component"
                :has-families="hasFamilies"
                @edit="edit"
                @remove="remove"
                v-on="router.currentRoute.value.name === routeNames.students ? { add } : {}"
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
                            v-if="hasFamilies"
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
                                :options="families"
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
                    >{{ popupSubmitButtonText }}
                    </app-button>
                </div>
            </template>
        </app-popup>
    </Teleport>
</template>

<script setup lang="ts">
// @ts-ignore
import {computed, reactive, ref, watch} from "vue";
import {useRouter} from "vue-router";
import AppForm from './AppForm.vue'
import AppFormGroup from './AppFormGroup.vue'
// @ts-ignore
import AppControl, {Type} from './AppControl.vue'
// @ts-ignore
import AppPopup from './AppPopup.vue'
// @ts-ignore
import AppButton, {Variant} from './AppButton.vue'
import {StudentServiceCreateParamsInterface} from "../classes/AbstractStudentService";
import {FamilyServiceCreateParamsInterface} from "../classes/AbstractFamilyService";
import {usePopup} from "../use/popup"
import {useForm} from "../use/form"
import {useError} from '../use/error'
import {useMode} from "../use/mode";
import {useDataStore} from "../store/data";
import service from "../service";
import routeNames from '../router/names'

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

type StudentValidationKeys = keyof Pick<StudentServiceCreateParamsInterface, 'name' | 'family'>;

type StudentValidation = { [key in StudentValidationKeys]: { [key: string]: any } }

let itemToHandleId: string = ''
const errors = ref([])
const onError = useError(errors)
const router = useRouter()
const dataStore = useDataStore()
const families = computed(() => dataStore.families.map((item: FamilyServiceCreateParamsInterface) => ({
    value: item.id,
    title: item.name,
})))
const hasFamilies = computed(() => families.value.length > 0)
const onValidated = () => {
    return new Promise((resolve) => {
        const formValues = form.values()

        if (actionMode.is(SubmitActions.ADD)) {
            service.student.create(formValues).then(resolve)
        }

        if (actionMode.is(SubmitActions.EDIT)) {
            service.student.update(formValues).then(resolve)
        }

        if (actionMode.is(SubmitActions.REMOVE)) {
            service.student.delete(formValues.id).then(resolve)
        }
    }).then(popup.close)
}
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
const popupSubmitButtonText = computed(() => PopupSubmitButtonText[actionMode.value() as keyof typeof PopupSubmitButtonText])
const add = () => {
    actionMode.set(SubmitActions.ADD)
}
const edit = (id: string) => {
    const item = dataStore.getStudentById(id)
    form.fields.id.value = item.id
    form.fields.name.value = item.name
    form.fields.sex.value = item.sex
    form.fields.dateOfBirth.value = item.dateOfBirth
    form.fields.family.value = item.family
    actionMode.set(SubmitActions.EDIT)
}
const remove = (id: string) => {
    itemToHandleId = id
    actionMode.set(SubmitActions.REMOVE)
}
const name = 'Students'
</script>
