<template>
  <div class="home">
    <v-navigation-drawer app clipped>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              <span class="font-weight-bold">故事章节</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group active-class="primary" v-for="episode in episodes" :key="episode.name" @click="checkEpisode(episode.name)" :id="episode.name">
          <v-list-item slot="activator" active-class = "primary textColor--text">
            <v-list-item-content>
              <v-list-item-title>{{ episode.cname }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="narrpattern in episode.narrpatterns"
            :key="narrpattern.name"
            @click="$vuetify.goTo('#'+narrpattern.name, options)"
            :id = "'list-item-'+narrpattern.name" 
            class="ml-8 inactive-list-item"
          >
          <v-list-item-content>
            <v-list-item-title>{{
              narrpattern.cname
            }}</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <Episode
        v-if="ifSetting"
        v-bind:narrpatterns="settingData"
      ></Episode>
    <Episode
        v-if="ifRising"
        v-bind:narrpatterns="risingData"
    ></Episode>
    <Episode
        v-if="ifResolution"
        :narrpatterns="resolutionData"
    ></Episode>
    <!-- <Setting v-if="ifSetting"></Setting>
    <Rising v-if="ifRising"></Rising> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import Setting from '../components/Setting.vue'
// import Rising from '../components/Rising.vue'
import settingData from "../assets/setting-exp.json";
import risingData from "../assets/rising-exp.json";
import resolutionData from "../assets/resolution-exp.json";
import Episode from '../components/Episode.vue';

export default {
  name: "Home",
  components: {
    // Setting,
    // Rising,
    Episode
  },
  data() {
    return {
      episodes: [
        {
          name: "Setting",
          narrpatterns: settingData,
          cname:"开端"
        },
        {
          name: "Rising",
          cname:"发展-高潮",
          narrpatterns: risingData,
        },
        {
          name: "Resolution",
          cname:"结局",
          narrpatterns: resolutionData,
        },
      ],
      ifSetting:true,
      ifRising:false,
      ifResolution:false,
      settingData:settingData,
      risingData:risingData,
      resolutionData:resolutionData
    };
  },
  computed:{
      options () {
      return {
        duration:300,
        offset: 64,
        easing: 'easeInOutCubic',
      }
    },
  },
  methods:{
    checkEpisode: function(episode){
      if(episode == "Setting"){
        this.ifSetting = true
        this.ifRising = false
        this.ifResolution = false
      }
      else if(episode == "Rising"){
        this.ifRising = true
        this.ifSetting = false
        this.ifResolution = false
      }
      else if(episode == "Resolution"){
        this.ifRising = false
        this.ifSetting = false
        this.ifResolution = true
      }
      document.documentElement.scrollTop = 0
      document.getElementById("dataBtn").click()
    }
  },
  mounted() {
    //when components are mounted, click on setting automatically
    const setting = document.getElementById('Setting').firstElementChild
    setting.click()
  }
};
</script>
<style>
 .v-list-item--link:before { background-color: transparent !important;}
 .activeItemList{
   background-color: #FCF8DB;
   border-left: 2px solid #F5E376;
 }
  .inactiveItemList{
   background-color:transparent;
   border-left: 2px solid grey;
 }
</style>
