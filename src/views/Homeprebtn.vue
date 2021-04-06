<template>
  <div class="home">
    <v-navigation-drawer app clipped class="navigation">
      <v-list>
        <v-list-item style="padding-left:0">
          <v-list-item-content>
            <v-list-item-title class="menuTitle font-weight-bold">
              Story Stages
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group :active-class="episode.name" v-for="episode in episodes" :key="episode.name" @click="checkEpisode(episode.name,episode.narrpatterns)" :id="episode.name">
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title>{{ episode.cname }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="narrpattern in episode.narrpatterns"
            :key="narrpattern.name"
            @click="$vuetify.goTo('#'+narrpattern.name, options)"
            :id = "'list-item-'+narrpattern.name" 
            class="ml-8 pl-2 inactiveItemList"
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
        :narrpatterns="settingData"
        :episode="'setting'"
      ></Episode>
    <Episode
        v-if="ifRising"
        :narrpatterns="risingData"
        :episode="'rising'"
    ></Episode>
    <Episode
        v-if="ifResolution"
        :narrpatterns="resolutionData"
        :episode="'resolution'"
    ></Episode>
    <!-- <Setting v-if="ifSetting"></Setting>
    <Rising v-if="ifRising"></Rising> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import Setting from '../components/Setting.vue'
// import Rising from '../components/Rising.vue'
import settingData from "../assets/setting-exp-en.json";
import risingData from "../assets/rising-exp-en.json";
import resolutionData from "../assets/resolution-exp-en.json";
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
          name: "setting",
          narrpatterns: settingData,
          cname:"Setting"
        },
        {
          name: "rising",
          cname:"Rising-Climax",
          narrpatterns: risingData,
        },
        {
          name: "resolution",
          cname:"Resolution",
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
      if(episode == "setting"){
        this.ifSetting = true
        this.ifRising = false
        this.ifResolution = false
      }
      else if(episode == "rising"){
        this.ifRising = true
        this.ifSetting = false
        this.ifResolution = false
      }
      else if(episode == "resolution"){
        this.ifRising = false
        this.ifSetting = false
        this.ifResolution = true
      }
      document.documentElement.scrollTop = 0
      document.getElementById("visualBtn").click()
      window.scrollBy(0, 1)
    }
  },
  mounted() {
    //when components are mounted, click on setting automatically
    const setting = document.getElementById('setting').firstElementChild
    setting.click()
  }
};
</script>
<style>
.menuTitle{
  font-size: 2.5rem;
  padding-left: 2rem;
}
.setting{
  /* color:rgb(243, 223, 125); */
  background-color: rgb(243, 223, 125);
}
.rising{
  /* color:rgb(247, 162, 161); */
  background-color:rgb(247, 162, 161);
  /* background-color: #F7A2A1; */
}
.resolution{
  /* color:rgb(126, 207, 212); */
  background-color: rgb(126, 207, 212); /*#7ECFD4*/;
}
 /* .v-list-item--link:before { background-color: transparent !important;} */
 .v-list-item{
   min-height: 1.2rem !important; 
 }
 .v-list-item__title{
   font-size: 0.75rem !important;
 }
 .settingActiveItemList{
   border-left: 2.5px solid rgb(243, 223, 125);
   border-radius: 0 5px 5px 0;
   background-color:rgba(243, 223, 125,0.3);
 }
 .risingActiveItemList{
   border-left: 2.5px solid rgb(247, 162, 161);
   border-radius: 0 5px 5px 0;
   background-color: rgb(247, 162, 161,0.3);
 }
 .resolutionActiveItemList{
   border-left: 2.5px solid rgb(126, 207, 212);
   border-radius: 0 5px 5px 0;
   background-color: rgb(126, 207, 212,0.3);
 }
 .inactiveItemList{
   background-color:transparent;
   border-left: 2.5px solid grey;
 }
 .v-list-group__header{
   border-radius: 0 5px 5px 0;
 }
 .navigation{
   padding-left: 0.7rem;
   padding-right: 0.7rem;
   /* background-color:#FDF8F4 !important; */
   /* background-color:whitesmoke; */
 }
 .v-list-group--active > .v-list-group__header > .v-list-group__header__append-icon .v-icon{
   color: white !important;
 }
</style>
