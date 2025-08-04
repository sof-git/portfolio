<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="d-flex flex-column align-center text-center">
                <p class="section-title mb-10">{{ title }}</p>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
const title = ref('Bio');
</script>

<style scoped lang="scss">
</style>