<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" md="8" class="d-flex flex-column align-center text-center">
                <p class="text-h3 text-md-h2 rounded-lg mt-10 bg-primary px-5 py-5 mb-10 text-align-center">{{ title }}</p>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="auto" v-for="icon in imgs" :key="icon.name" class="d-flex align-center justify-center">
                <div class="d-flex flex-column align-center text-center" @click="icon.action" :style="{ cursor: 'pointer' }">
                    <v-img height="100" width="100" :src="icon.img ? icon.img : icon.icon" :alt="icon.name" ></v-img>
                    <p class="text-h6">{{ icon.name }}</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { reactive, ref, type Ref, onMounted, onUnmounted } from 'vue';

interface Icon {
    name: string;
    img: string;
    icon?: string;
    link?: string;
    action?: () => void;
}

const title: Ref<string> = ref('Contact');
const imgs = reactive<Icon[]>([
    {
        name: 'LinkedIn',
        img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/sofiane-turki-764643200/',
        action: () => {
            window.open('https://www.linkedin.com/in/sofiane-turki-764643200/', '_blank');
        }
    },
    {
        name: 'GitHub',
        img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        icon: 'mdi-github',
        link: 'https://github.com/sof-git',
        action: () => {
            window.open('https://github.com/sof-git', '_blank');
        }
    },
    {
        name: 'Email',
        img:'',
        icon: '',
        link: 'mailto:sofiane.turki01@gmail.com',
        action: () => {
            window.location.href = 'mailto:sofiane.turki01@gmail.com';
        }
    },
]); 

const innerWidth = ref(0);

const handleResize = () => {
    innerWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    console.log('Contact component mounted, innerWidth:', innerWidth.value);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
</style>