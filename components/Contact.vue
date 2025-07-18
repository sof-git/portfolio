<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="d-flex flex-column align-center text-center">
                <p class="text-h3 text-md-h2 rounded-lg mt-10 bg-primary px-5 py-5 mb-10">{{ title }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="8" offset-md="2">
                <v-card class="pa-5">
                    <v-card-title class="text-h5">Formulaire de contact</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="handleSubmit" ref="contactForm">
                            <div class="d-flex flex-row justify-space-between mb-4">
                                <v-text-field v-model="formValues.name" class="w-25" label="Nom" required></v-text-field>
                                <v-text-field v-model="formValues.email" class="w-25" label="Email" type="email" required></v-text-field>
                            </div>
                            <v-textarea v-model="formValues.message" label="Message" rows="6" required></v-textarea>
                            <v-btn color="primary" type="submit">Envoyer</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="8" offset-md="2" class="mt-5">
                <Alert :message="alertMessage" :type="alertType" :show="showAlert" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import * as yup from 'yup';
import Alert from './Alert.vue';

const contactSchema = yup.object({
    name: yup.string().min(2).max(30).required().label('Nom'),
    email: yup.string().email().required().label('Email'),
    message: yup.string().min(10).max(500).required().label('Message')
});

const title: Ref<string> = ref('Contactez-moi');

interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

const formValues: ContactFormValues = reactive({
    name: '',
    email: '',
    message: ''
});

// Alert properties
const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref<'success' | 'info' | 'warning' | 'error'>('success');

const handleSubmit = async () => {
    try {
        const value = await contactSchema.validate(formValues, { abortEarly: false });
        showAlert.value = true;
        alertMessage.value = 'Formulaire soumis avec succès !';
        alertType.value = 'success';
        console.log('Validation Success:', value);
        // Clear the form values
        formValues.name = '';
        formValues.email = '';
        formValues.message = '';
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            const errorMessages = error.errors.join(', ');
            showAlert.value = true;
            alertMessage.value = `Erreur de validation : ${errorMessages}`;
            alertType.value = 'error';
            console.error('Validation Error:', errorMessages);
        }
    }
    console.log('Formulaire soumis');
};
</script>

<style scoped>
</style>