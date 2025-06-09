// vuetify.config.ts
// import { defineVuetifyConfiguration } from './vuetify-nuxt-module/custom-configuration'
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
// Or update the path to the correct location if the file exists elsewhere

export default defineVuetifyConfiguration({
  /* vuetify options */
  theme: {
    defaultTheme: 'light', // Set the default theme to light
    themes: {
      light: {
        colors: {
          primary: '#003366',
          'background': '#F5F5F5',
          'surface': '#FFFFFF',
          'error': '#FF5252',
          'success': '#4CAF50',
          'buttons': '#FF6600',
          'intro-bg': '#E0E0E0',
        }
      }
    }
  }  
})