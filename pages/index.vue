<script setup lang="ts">
import Bio from '@/components/Bio.vue';
import Competences from '~/components/Competences.vue';
import Experiences from '~/components/Experiences.vue';
</script>
<template>
    <v-container class="pt-0">
        <v-row>
            <v-col class="full-height-section" cols="12">
                <Bio />
            </v-col>
        </v-row>
        <v-row>
            <v-col class="full-height-section" cols="12">
                <Competences />
            </v-col>
        </v-row>
        <v-row>
            <v-col class="full-height-section" cols="12">
                <Experiences />
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.full-height-section {
  min-height: 100vh;
}
</style>