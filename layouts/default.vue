<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>
<template>
    <v-layout
        app
        class="default-layout"
        style="min-height: 100vh; background-color: #f5f5f5;"
        align-center
        justify-center
        row
        fill-height
    >
    <Header />
    <v-main>
        <v-container>
            <NuxtPage />
        </v-container>
    </v-main>
    </v-layout>
</template>