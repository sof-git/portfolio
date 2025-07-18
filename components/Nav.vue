<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        class="elevation-0"
    >
        <v-list>
      <v-list-item @click="scrollTo('bio')">A propos de moi</v-list-item>
      <v-list-item @click="scrollTo('competences')">Compétences</v-list-item>
      <v-list-item @click="scrollTo('experiences')">Expériences</v-list-item>
      <v-list-item @click="scrollTo('contact')">Contact</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import {inject, ref} from 'vue';
const drawer = inject('drawer', ref(true)) as Ref<boolean>;
const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>