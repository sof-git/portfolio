<script setup lang="ts">
import { ref, type Ref, reactive } from 'vue';
import { useDisplay } from 'vuetify';
const title:Ref<String> = ref('Expériences Professionnelles');
const display = useDisplay();
// Define the interface for experiences
interface experiences {
    company: string;
    position: string;
    localisation?: string;
    description?: string;
    contract: string;
    type?: string;
    dateStart: string;
    dateEnd: string;
    stack: {
        frontend: string[];
        backend?: string[];
        database?: string[];
        devops?: string[];
        other?: string[];
    };
    missions: Array<{
        title: string;
        description: string;
    }>
    employees?: number;
    logo?: string;
}

const tabs = reactive([
    {
        company: "Alyce",
        tab: "description"
    },
    {
        company: "EAT",
        tab: "description"
    },
    {
        company: "Enedis",
        tab: "description"
    }
]);

const experiences: experiences[] = reactive([
    {
        company:"Alyce",
        position:"Développeur Fullstack",
        dateStart:"Mars 2022",
        dateEnd:"Mars 2024",
        localisation:"Sceaux (92)",
        description: "Entreprise spécalisée dans l'étude de mobilité et de comptages d'enquêtes. Alyce propose une solution de comptage basée sur de l'intelligence artificielle et de la vision par ordinateur.",
        type:"IT Services",
        employees: 50,
        contract:"CDI",
        stack: {
            frontend: ["vuejs", "nuxtjs", "typescript", "javascript","axios","vuetify"],
            backend: ["nodejs", "nestjs","express"],
            database: ["mongodb","elasticsearch"],
            devops: ["docker", "linux","gitlab"],
            other: ["gitlab","jira", "postman", "swagger","gitkraken"]
        },
        missions:[
            {
                title: "Développement d'une application web de gestion des études terrain",
                description:"J'ai conçu et développé un site web d'administration pour la gestion des études terrain et du matériel, améliorant ainsi l'efficacité opérationnelle de 30%. L'interface utilisateur a été saluée pour sa facilité d'utilisation, réduisant le temps de formation des nouveaux employés de moitié.",
            },
            {
                title: "Administration d'une base de données MongoDB",
                description: "J'ai géré une base de données MongoDB contenant des millions d'enregistrements, optimisant les requêtes pour garantir des temps de réponse rapides. Cela a permis de réduire les temps de chargement des rapports de 25%.",
            },
            {
                title: "Collaboration avec les équipes terrain",
                description: "J'ai travaillé en étroite collaboration avec les équipes terrain pour intégrer de manière harmonieuse les fonctionnalités frontend et backend, assurant ainsi une cohérence et une efficacité accrues dans les opérations quotidiennes.",
            },
            {
                title: "Assurance de la qualité, de la sécurité et de la fiabilité des applications",
                description: "J'ai mis en place des protocoles de test rigoureux et des revues de code régulières, réduisant les bugs de production de 35%. J'ai également renforcé la sécurité des applications, obtenant une certification de conformité aux normes de sécurité industrielles."
            }

        ]
    },
    {
        company:"EAT (Etude d'assurance Trollet)",
        position:"Développeur backend",
        dateStart:"Fevrier 2019",
        dateEnd:"Juillet 2020",
        localisation:"Paris (75010)",
        description: "EAT est un cabinet de courtage en assurance spécialisé dans la gestion de contrats et la souscription d'assurances pour les particuliers et les professionnels.",
        type:"Assurance",
        contract:"Contrat de professionnalisation",
        employees: 10,
        stack:{
            frontend: ["react", "redux", "javascript"],
            backend: ["nodejs", "express"],
            database: ["mongodb","mysql"],
            devops: [],
            other: ["git", "postman"]
        },
        missions:[
            {
                title:"Développement d'une API RESTful et d'un site web dédié",
                description:"J'ai conçu et mis en œuvre une API RESTful ainsi qu'un site web pour optimiser la gestion des données clients et des contrats d'assurance. Ces outils ont permis de corriger les erreurs de contrats et de nettoyer les données, réduisant ainsi les erreurs de saisie de 80%.",
            },
            {
                title:"Préparation et exécution de la migration des données",
                description:"J'ai préparé et supervisé la migration d'un portefeuille de clients vers la base de données principale, assurant une transition fluide et sans perte de données. Ce projet a été achevé avec succès dans les délais impartis, sans temps d'arrêt pour les utilisateurs finaux."
            }
        ]
    },
    {
        company:"Enedis",
        position:"Développeur intégrateur",
        dateStart:"Octobre 2018",
        dateEnd:"Janvier 2019",
        localisation:"La Défense (92)",
        description: "Enedis est le gestionnaire du réseau de distribution d'électricité en France, responsable de la gestion et de l'entretien des infrastructures électriques.",
        type:"Energie",
        contract:"Contrat de professionnalisation",
        employees: 30000,
        stack:{
            frontend: ["html5","css3", "javascript", "jquery","bootstrap"],
            backend: [],
            database: [],
            devops: [],
            other: ["zeplin"]
        },
        missions:[
            {
                title:"Intégration d'articles pour l'intranet du groupe à partir de maquettes Zeplin",
                description:"J'ai intégré des articles pour l'intranet du groupe en utilisant les maquettes Zeplin, assurant une mise en page précise et une expérience utilisateur optimale pour plus de 30 000 salariés. Ce travail a permis d'améliorer la communication interne et l'engagement des employés."
            },
            {
                title:"Développement et maintenance d'outils et d'animations pour les salariés",
                description:"J'ai développé et maintenu divers outils et animations destinés aux salariés, augmentant ainsi leur productivité et leur satisfaction. Ces outils ont été largement adoptés, avec une augmentation de 20% de l'utilisation des ressources internes."
            }
        ]
    }
]);
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="d-flex flex-column align-center text-center">
                    <p class="text-h3 text-md-h2 rounded-lg mt-10 bg-primary px-5 py-5 mb-10 text-align-center">{{ title }}</p>
            </v-col>
        </v-row>    
        <v-row>
            <v-col cols="12" md="6" lg="4" offset-md="3" offset-lg="4" class="d-flex flex-column align-center">
                    <v-timeline
                        v-if="$vuetify.display.smAndDown ? false : true"
                        dot-color="secondary"
                        :side="$vuetify.display.smAndDown ? 'end' : undefined"
                        :density="$vuetify.display.smAndDown ? 'compact' : undefined"
                        >
                        <v-timeline-item
                            v-for="(experience, index) in experiences"
                            :key="index"
                            color="primary"
                            class="mb-5"
                            :icon="index % 2 === 0 ? 'mdi-briefcase' : 'mdi-account-tie'"
                            >
                            <v-card

                            >
                                <v-card-title class="text-h5 text-primary">{{ experience.company }}</v-card-title>
                                <v-card-subtitle class="d-flex flex-column align-start">
                                    <span v-if="experience.dateStart">- {{ experience.dateStart }} à {{ experience.dateEnd }}</span>
                                    <span>- {{ experience.position }}</span>
                                    <span v-if="experience.localisation">- {{ experience.localisation }}</span>
                                    <span v-if="experience.contract">- {{ experience.contract }}</span>
                                    <span v-if="experience.employees">- {{ experience.employees }} employés</span>
                                    <span v-if="experience.type">- {{ experience.type }}</span>
                                </v-card-subtitle>
                                <v-tabs v-model="tabs[index].tab" class="mt-3 text-center">
                                    <v-tab value="description" class="text-buttons">Description</v-tab>
                                    <v-tab value="missions" class="text-buttons">Realisations</v-tab>
                                    <v-tab value="stack" class="text-buttons">Stack Technique</v-tab>
                                </v-tabs>
                                <v-card-text>
                                    <v-tabs-window v-model="tabs[index].tab">
                                        <v-tabs-window-item value="description">
                                            <p>{{ experience.description }}</p>
                                        </v-tabs-window-item>
                                        <v-tabs-window-item value="missions">
                                            <ul>
                                                <li v-for="(mission, missionIndex) in experience.missions" :key="missionIndex">
                                                    <h4 class="text-h6 text-secondary">{{ mission.title }}</h4>
                                                    <p>- {{ mission.description }}</p>
                                                </li>
                                            </ul>
                                        </v-tabs-window-item>
                                        <v-tabs-window-item value="stack">
                                            <!-- load stack frontend, backend, database, devops and other with images -->
                                            <div v-for="(category, catIndex) in Object.entries(experience.stack)" :key="catIndex" class="mb-3 align-center text-center">
                                                <h4 class="text-h6 text-secondary">{{ category[0].charAt(0).toUpperCase() + category[0].slice(1) }}</h4>
                                                <ul class="d-flex flex-wrap justify-center ">
                                                    <li v-for="(tech, techIndex) in category[1]" :key="techIndex" class="mx-2">
                                                        <v-img
                                                            :src="`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`"
                                                            width="40"
                                                            height="40"
                                                            contain
                                                        ></v-img>
                                                        <p class="text-caption">{{ tech.charAt(0).toUpperCase() + tech.slice(1) }}</p>
                                                    </li>
                                                </ul>

                                            </div>

                                        </v-tabs-window-item>
                                    </v-tabs-window>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                        <v-card
                            v-else
                            v-for="(experience, index) in experiences"
                            :key="index"
                            class="mb-5"
                            >
                                <v-card-title class="text-h5 text-primary">{{ experience.company }}</v-card-title>
                                <v-card-subtitle class="d-flex flex-column align-start">
                                    <span v-if="experience.dateStart">- {{ experience.dateStart }} à {{ experience.dateEnd }}</span>
                                    <span>- {{ experience.position }}</span>
                                    <span v-if="experience.localisation">- {{ experience.localisation }}</span>
                                    <span v-if="experience.contract">- {{ experience.contract }}</span>
                                    <span v-if="experience.employees">- {{ experience.employees }} employés</span>
                                    <span v-if="experience.type">- {{ experience.type }}</span>
                                </v-card-subtitle>
                                <v-tabs v-model="tabs[index].tab" class="mt-3 text-center">
                                    <v-tab value="description" class="text-buttons">Description</v-tab>
                                    <v-tab value="missions" class="text-buttons">Realisations</v-tab>
                                    <v-tab value="stack" class="text-buttons">Stack Technique</v-tab>
                                </v-tabs>
                                <v-card-text>
                                    <v-tabs-window v-model="tabs[index].tab">
                                        <v-tabs-window-item value="description">
                                            <p>{{ experience.description }}</p>
                                        </v-tabs-window-item>
                                        <v-tabs-window-item value="missions">
                                            <ul>
                                                <li v-for="(mission, missionIndex) in experience.missions" :key="missionIndex">
                                                    <h4 class="text-h6 text-secondary">{{ mission.title }}</h4>
                                                    <p>- {{ mission.description }}</p>
                                                </li>
                                            </ul>
                                        </v-tabs-window-item>
                                        <v-tabs-window-item value="stack">
                                            <!-- load stack frontend, backend, database, devops and other with images -->
                                            <div v-for="(category, catIndex) in Object.entries(experience.stack)" :key="catIndex" class="mb-3 align-center text-center">
                                                <h4 class="text-h6 text-secondary">{{ category[0].charAt(0).toUpperCase() + category[0].slice(1) }}</h4>
                                                <ul class="d-flex flex-wrap justify-center ">
                                                    <li v-for="(tech, techIndex) in category[1]" :key="techIndex" class="mx-2">
                                                        <v-img
                                                            :src="`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`"
                                                            width="40"
                                                            height="40"
                                                            contain
                                                        ></v-img>
                                                        <p class="text-caption">{{ tech.charAt(0).toUpperCase() + tech.slice(1) }}</p>
                                                    </li>
                                                </ul>

                                            </div>

                                        </v-tabs-window-item>
                                    </v-tabs-window>
                                </v-card-text>
                            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>