<template>
  <v-app-bar
    app
    color="primary"
    dark
    class="elevation-0"
    :height="60"
  >
    <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="toggleDrawer" />
    <v-toolbar-title class="text-h6">Sofiane Turki</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Navigation links -->
    <div v-if="!isMobile" class="d-flex">
      <v-list-item @click="scrollTo('bio')">A propos de moi</v-list-item>
      <v-list-item @click="scrollTo('competences')">Compétences</v-list-item>
      <v-list-item @click="scrollTo('experiences')">Expériences</v-list-item>
      <v-list-item @click="scrollTo('contact')">Contact</v-list-item>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const isMobile = ref(false);
const toggleDrawer = inject('toggleDrawer') as () => void;

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
});

watch(() => window.innerWidth, (newWidth) => {
  isMobile.value = newWidth < 768;
});

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>