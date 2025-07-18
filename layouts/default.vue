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
    <Nav />
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, provide, type Ref } from 'vue';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';

const drawer: Ref<boolean> = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
  console.log('Drawer toggled:', drawer.value);
};

provide('drawer', drawer);
provide('toggleDrawer', toggleDrawer);
</script>