<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex flex-column align-center text-center">
        <p class="text-h3 text-md-h2 rounded-lg mt-10 bg-primary px-5 py-5 mb-10">{{ title }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="category in categories"
        :key="category"
        cols="12"
        class="d-flex flex-column align-center mb-5"
      >
        <p class="text-h4 mb-5 text-secondary">{{ category }}</p>
        <div
          v-for="skill in skills.filter(s => s.stack === category)"
          :key="skill.name"
          class="d-flex align-center mb-3 skill-container"
          :data-skill="skill.name"
        >
          <div class="skill-image-container">
            <v-img
              class="skill-image"
              :src="skill.img"
              :alt="skill.name"
              contain
            ></v-img>
            <p class="text-caption">{{ skill.name }}</p>
          </div>
          <div class="skill-bar-container">
            <v-progress-linear
              :model-value="skill.visible ? skill.skill : 0"
              height="20"
              rounded
              :color="setColorSkill(skill.skill)"
              class="skill-bar"
            >
              <template v-slot:default="{ value }">
                <p class="text-white font-weight-bold">{{ skill.visible ? `${Math.round(value)}%` : '' }}</p>
              </template>
            </v-progress-linear>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-progress-linear {
    transition: width 1s ease-in-out;
}
</style>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue';

interface Skill {
    name: string;
    img: string;
    skill: number;
    visible: boolean;
    stack?: string;
}

const title = ref('Compétences Techniques');

const skills: Skill[] = reactive<Skill[]>([
    {
        name: 'HTML',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        skill: 80,
        visible: false,
        stack: 'Frontend'
    },
    {
        name: 'CSS',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        skill: 85,
        visible: false,
        stack: 'Frontend'
    },
    {
        name: 'JavaScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        skill: 70,
        visible: false,
        stack: 'Frontend'
    },
    {
        name: 'TypeScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        skill: 60,
        visible: false,
        stack: 'Frontend'
    },
    {
        name: 'Vue.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        skill: 75,
        visible: false,
        stack: 'Frontend'
    },
    {
        name: 'Nuxt.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
        skill: 65,
        visible: false,
        stack: 'Frontend'
    },
    {
        name: 'Node.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        skill: 50,
        visible: false,
        stack: 'Backend'
    },
    {
        name: 'NestJS',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
        skill: 55,
        visible: false,
        stack: 'Backend'
    },
    {
        name: 'MongoDB',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        skill: 60,
        visible: false,
        stack: 'Database'
    },
    {
        name: 'MySQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        skill: 50,
        visible: false,
        stack: 'Database'
    },
    {
        name: 'PostgreSQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        skill: 55,
        visible: false,
        stack: 'Database'
    },
    {
        name: 'Git',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        skill: 80,
        visible: false,
        stack: 'Version Control'
    },
    {
        name: 'Docker',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        skill: 40,
        visible: false,
        stack: 'DevOps'
    }
]);

const setColorSkill = (skill:number): string =>{
    if (skill >= 80) {
        return 'primary';
    } else if (skill >= 60) {
        return 'secondary';
    } else {
        return 'orange';
    }
}

const categories = ref<string[]>([
    'Frontend',
    'Backend',
    'Database',
    'Version Control',
    'DevOps',
]);


onMounted(async () => {
    await nextTick(); // Assurez-vous que le DOM est mis à jour

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillName = entry.target.getAttribute('data-skill');
                const skill = skills.find(s => s.name === skillName);
                if (skill) {
                    skill.visible = true;
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-skill]').forEach(element => {
        observer.observe(element);
    });
});
</script>

<style scoped lang="scss">
.skill-container {
  width: 100%;
  display: flex;
  align-items: center;
}

.skill-image-container {
  width: 120px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-image {
  width: 100px;
  height: 100px;
}

.skill-bar-container {
  flex-grow: 1;
}

.v-progress-linear {
  width: 100%;
  transition: width 1s ease-in-out;
}
</style>