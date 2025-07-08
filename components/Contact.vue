<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import Joi from 'joi';
import Alert from './Alert.vue';

const contactSchema = Joi.object({
    name: Joi.string().min(2).max(30).required().label('Nom').messages({
        'string.min': 'Le nom doit comporter au moins 2 caractères.',
        'string.max': 'Le nom ne peut pas dépasser 30 caractères.',
        'string.empty': 'Le nom ne peut pas être vide.'
    }),
    email: Joi.string().email({ tlds: false }).required().label('Email').messages({
        'string.email': 'L\'email doit être valide.',
        'string.empty': 'L\'email ne peut pas être vide.'
    }),
    message: Joi.string().min(10).max(500).required().label('Message').messages({
        'string.min': 'Le message doit comporter au moins 10 caractères.',
        'string.max': 'Le message ne peut pas dépasser 500 caractères.',
        'string.empty': 'Le message ne peut pas être vide.'
    })
});


const title: Ref<string> = ref('Contactez-moi');

interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

const formValues: ContactFormValues = reactive({
    name: 't',
    email: '',
    message: ''
});

// Alert properties
const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref<'success' | 'info' | 'warning' | 'error'>('success');

const handleSubmit = (formValues: ContactFormValues) => {
    console.log('Form Values:', formValues);
    const {value,error} = contactSchema.validate(formValues, {
        abortEarly: false,
        allowUnknown: true
    });
    if (error) {
        // return error details
        const errorMessages = error.details.map(detail => detail.message).join(', ');
        showAlert.value = true;
        alertMessage.value = `Erreur de validation : ${errorMessages}`;
        alertType.value = 'error';
        console.error('Validation Error:', errorMessages);
        return;
    } else{
        showAlert.value = true;
        alertMessage.value = 'Formulaire soumis avec succès !';
        alertType.value = 'success';
        console.log('Validation Success:', value);
        //clear the form values
        formValues.name = '';
        formValues.email = '';
        formValues.message = '';
    }
    // Logique pour gérer l'envoi du formulaire
    console.log('Formulaire soumis');
};

</script>
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
                        <v-form @submit.prevent="handleSubmit(formValues)" ref="contactForm">
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

<style scoped>
</style>