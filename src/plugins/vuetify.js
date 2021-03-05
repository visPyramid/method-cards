import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light:{
                primary: '#F5E376',
                secondary: '#FCF8DB',
                textColor:'414141',
                accent: '#8c9eff',
                error: '#b71c1c',
            }
        }
      },
});
