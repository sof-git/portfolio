<template>
    <div class="d-flex flex-column justify-center align-center">
        <v-container>
            <v-row>
                <v-col cols="12" md="8" offset-lg="2"  class="d-flex flex-column align-center text-center">
                    <p class="main-title">{{ title.name }}</p>
                    <p class="subtitle">{{ title.role }}</p>
                    <p class="text-subtitle-1">{{ title.location }}</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4" offset-md="4" class="d-flex flex-column align-center fill-height">
                    <div
                        class="rounded-circle bg-primary text-center w-75 h-100 rounded-lg border-md"
                    ></div>
                </v-col>
            </v-row>
            <v-row class="mt-5">
                <v-col cols="12" md="3" offset-lg="3" class="d-flex flex-column align-center fill-height">
                    <v-img
                        class="rounded-circle border border-primary"
                        src="/assets/images/IMG_20210112_153440.jpg"
                        alt="Sofiane TURKI"
                        cover
                        width="264"
                        height="264"
                    ></v-img>
                </v-col>
                <v-col cols="12" md="4"  class="d-flex flex-column align-center">
                    <p class="text-h6 mt-5">{{ description }}</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
const title = reactive({
    name: 'Sofiane TURKI',
    role: 'Développeur Web Fullstack',
    location:'Paris, France'
})
const description: Ref<string> = ref('Animé par une passion pour le développement et une soif constante d\'apprentissage, j\'ai acquis des compétences solides en combinant formation et pratique. Curieux et proactif, j\'ai exploré de nouvelles technologies et relevé des défis techniques avec rigueur. Je cherche à apporter mon professionnalisme et mon dynamisme dans un environnement où je pourrai continuer à progresser.');
</script>

<style scoped>

</style>