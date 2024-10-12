<script setup>
import { useToast } from "primevue/usetoast";
import { configure } from 'vee-validate';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const isLoading = ref(false);
const toast = useToast();
const showSuccessToast = () => {
    toast.add({ severity: 'success', summary: 'Sent Message Successfully', detail: 'Contact Form Submitted Successfully', group: 'br', life: 6000 });
};

const showErrorToast = () => {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong, please try again', group: 'br', life: 6000 });
};

const formData = reactive({
    name: '',
    email: '',
    message: '',
})

// Default values
configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});

const validationSchema = toTypedSchema(
    zod.object({
        name: zod
            .string()
            .min(1, { message: 'This is required' })
            .max(255, { message: 'Too long' }),
        email: zod
            .string()
            .min(1, { message: 'This is required' })
            .email({ message: 'Invalid email' })
            .max(255, { message: 'Too long' }),
        message: zod
            .string()
            .min(1, { message: 'This is required' })
            .max(255, { message: 'Too long' }),
    })
);

const submitForm = async () => {
    try {
        isLoading.value = true;
        const response = await $fetch('https://formspree.io/f/myyqgwbd', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })

        isLoading.value = false;

        const ok = response?.ok

        if (!ok) {
            throw new Error('Something went wrong');
        }

        showSuccessToast();

    } catch (error) {
        showErrorToast();
        console.log(error);
        isLoading.value = false;
    }
}
</script>

<template>
    <div>
        <div class="mb-5">
            <h2 class="text-center text-light fw-bold fs-2 mb-4">{{ $t('contact.title') }}</h2>
            <p class="text-center text-light mx-auto" style="max-width: 550px;">
                {{ $t('contact.description') }}
            </p>
        </div>
        <div class="">
            <Form :validation-schema="validationSchema" @submit="submitForm" class=" m-auto" style="max-width: 500px;"
                v-slot="{ errors }">
                <div class="mb-3">
                    <label for="name" class="form-label text-light">{{ $t('contact.name') }}</label>
                    <Field id="name" name="name" type="text" class="form-control" :class="{ 'is-invalid': errors.name }"
                        v-model="formData.name" />
                    <ErrorMessage class="bg-danger text-white px-3 mt-2 d-inline-block rounded-5" name="name"
                        style="font-size: .8rem;" />
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label text-light">{{ $t('contact.email') }}</label>
                    <Field id="email" name="email" type="text" class="form-control"
                        :class="{ 'is-invalid': errors.email }" v-model="formData.email" />
                    <ErrorMessage class="bg-danger text-white px-3 mt-2 d-inline-block rounded-5" name="email"
                        style="font-size: .8rem;" />
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label text-light">{{ $t('contact.message') }}</label>
                    <Field id="message" name="message" class="form-control" as="textarea" rows="3"
                        :class="{ 'is-invalid': errors.message }" v-model="formData.message" />
                    <ErrorMessage class="bg-danger text-white px-3 mt-2 d-inline-block rounded-5" name="message"
                        style="font-size: .8rem;" />
                </div>

                <Button type="submit" class="m-auto d-block px-5 rounded-5 mt-4 bg-white text-primary-c1 fw-bold"
                    :disabled="isLoading">
                    {{ $t('contact.submit') }}
                    <span class="spinner-border spinner-border-sm" aria-hidden="true" v-if="isLoading"></span>
                </Button>
            </Form>

            <Toast position="bottom-right" group="br" />
        </div>
    </div>
</template>
