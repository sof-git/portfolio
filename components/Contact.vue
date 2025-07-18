<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" class="text-center">
                <h1>{{ title }}</h1>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col v-for="icon in icons" :key="icon.name" class="d-flex align-center justify-center">
                <v-icon color="primary">{{ icon.icon }}</v-icon>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';

const title: Ref<string> = ref('Contact');
const icons = reactive([
    {
        name: 'Email',
        icon: 'mdi-email',
        link: 'mailto:sofiane.turki01@gmail.com'
    },
    {
        name: 'GitHub',
        icon: 'mdi-github',
        link: 'https://github.com/sof-git'
    }
    ,
    {
        name: 'LinkedIn',
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/sofiane-turki-764643200/'
    },
])
</script>

<style scoped>
</style>