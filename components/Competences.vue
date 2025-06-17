<script setup lang="ts">
import { reactive } from 'vue';
import { ref, type Ref } from 'vue';
interface Skill {
    name: string;
    img: string;
    skill: number;
    color?: string;
}
const title: Ref<string> = ref('Compétences Techniques');
const skills: Skill[] = reactive([
        {
            name:'HTML',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            skill: 80,
            color: 'primary'
        },
        {
            name:'CSS',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            skill: 85,
            color: 'secondary'

        },
        {
            name:'JavaScript',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            skill: 70,
            color: 'warning'
        },
        {
            name:'TypeScript',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            skill: 60,
            color: 'info'
        },
        {
            name:'Vue.js',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
            skill: 75,
            color: 'success'    
        },
        {
            name:'Nuxt.js',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
            skill: 65,
            color: 'info'
        },
        {
            name:'Node.js',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            skill: 50,
            color: 'info'
        },
        {
            name:'NestJS',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
            skill: 55,
            color: 'info'
        },
        {
            name:'MongoDB',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            skill: 60,
            color: 'success'
        },
        {
            name:'MySQL',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            skill: 50,
            color: 'primary'
        },
        {
            name:'PostgreSQL',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            skill: 55,
            color: 'primary'
        },
        {
            name:'Git',
            img:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            skill: 80,
            color: 'primary'
        }
])
</script>


<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="d-flex flex-column align-center text-center">
                <p class="text-h3 text-md-h1 rounded-lg mt-10 bg-primary px-5 py-5 mb-10">{{ title }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <v-col
                        v-for="skill in skills"
                        :key="skill.name"
                        cols="12"
                        md="4"
                        class="d-flex flex-row align-center mb-5"
                    >
                        <v-img
                            :src="skill.img"
                            width="100px"
                            height="100px"
                            contain
                        ></v-img>
                        <p class="text-h6 mx-5">{{ skill.name }}</p>
                        <v-progress-linear
                            :model-value="skill.skill"
                            height="20"
                            rounded
                            :color="skill.color || 'primary'"
                            class="w-100 "
                        >
                        <template v-slot:default="{ value }">
                            <p class="text-white font-weight-bold">{{ skill.skill }}%</p>
                        </template>
                        </v-progress-linear>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped lang="scss">
</style>
