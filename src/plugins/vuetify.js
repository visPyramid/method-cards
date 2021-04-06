import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light:{
                primary: '#F3DF7D',
                secondary: '#FCF8DB',
                textColor:'#414141',
                accent: '#8c9eff',
                error: '#b71c1c',
                rising:'#F7A2A1',
                setting:'#F3DF7D',
                resolution:'#7ECFD4',
                risingdark:'#EE7478',
                settingdark:'#F4C338',
                resolutiondark:'#21AEB2'
            }
        }
      },
});
