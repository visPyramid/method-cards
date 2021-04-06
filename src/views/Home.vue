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
      <div id="cardButtonContainer" style="z-index:10">
      <v-btn
        text
        :class="episode+'InactiveCardBtn ml-2 cardSwitchButton'"
        @click="onClick($event, 'data')"
        id="dataBtn"
      >
        Data Flow
      </v-btn>
      <v-btn
        text
        :class="episode+'ActiveCardBtn ml-2 cardSwitchButton'"
        @click="onClick($event, 'visual')"
        id="visualBtn"
      >
        Visual Design</v-btn
      >
    </div>
    </v-navigation-drawer>
    <Episode
        v-if="ifSetting"
        :narrpatterns="settingData"
        :episode="'setting'"
        :showDataCard = "showDataCard"
      ></Episode>
    <Episode
        v-if="ifRising"
        :narrpatterns="risingData"
        :episode="'rising'"
        :showDataCard = "showDataCard"
    ></Episode>
    <Episode
        v-if="ifResolution"
        :narrpatterns="resolutionData"
        :episode="'resolution'"
        :showDataCard = "showDataCard"
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
import goTo from 'vuetify/es5/services/goto'

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
      episode:"setting",
      ifSetting:true,
      ifRising:false,
      ifResolution:false,
      settingData:settingData,
      risingData:risingData,
      resolutionData:resolutionData,
      showDataCard:false,
      narrpatterns:settingData,
      currSection:"setting-pattern1",
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
        this.episode="setting"
        this.narrpatterns = this.settingData
        this.$store.commit("changeEpisode", "setting");
      }
      else if(episode == "rising"){
        this.ifRising = true
        this.ifSetting = false
        this.ifResolution = false
        this.episode="rising"
        this.narrpatterns = this.risingData
        this.$store.commit("changeEpisode", "rising");
      }
      else if(episode == "resolution"){
        this.ifRising = false
        this.ifSetting = false
        this.ifResolution = true
        this.episode="resolution"
        this.narrpatterns = this.resolutionData
        this.$store.commit("changeEpisode", "resolution");
      }
      document.documentElement.scrollTop = 0
      document.getElementById("visualBtn").click()
      window.scrollBy(0, 1)
    },
    intersectHeight(secID){
        var secEl = document.getElementById(secID)
        var xBottom = secEl.getBoundingClientRect().bottom
        var xTop = secEl.getBoundingClientRect().top
        var xHeight = secEl.getBoundingClientRect().height
        var viewHeight = window.innerHeight
        var currLength = 0
        // if intersected
        if (xTop < viewHeight && xBottom > 0){
          // case one, section across the viewport
          if (xBottom >= viewHeight && xTop <=0){
            currLength = viewHeight
          }
          // case two, section inside the viewport
          if (xBottom < viewHeight && xTop >=0){
            currLength = xHeight
          }
          // case three upper section outside the viewport
          if (xBottom < viewHeight && xTop <0){
            currLength = xBottom
          }
          // case four lower section outside the viewport
          if (xBottom > viewHeight && xTop < viewHeight && xTop >0){
            currLength = viewHeight - xTop
          }
      }
      return currLength
    },
    handleScroll(){
      var maxID = this.episode+"-pattern1"
      var maxLength = 0
      var currLength = 0
      this.narrpatterns.map((secObj)=>{
        currLength = this.intersectHeight(secObj.name)
        if(maxLength < currLength){
          maxLength = currLength
          maxID = secObj.name
        }
      })
      this.narrpatterns.map((secObj)=>{
        var listItem = document.getElementById("list-item-" + secObj.name);
        if(maxID == secObj.name){
          listItem.classList.add(this.episode+"ActiveItemList");
          listItem.classList.remove("inactiveItemList");
        }
        else{
          listItem.classList.remove(this.episode+"ActiveItemList");
          listItem.classList.add("inactiveItemList");
        }
      })
      // console.log("the maximum section is:" + maxID)
      this.currSection = maxID
    },
    onClick(event, buttomName) {
      if(buttomName == "data"){
        this.showDataCard = true
        document.getElementById("dataBtn").classList.add(this.episode+"ActiveCardBtn");
        document.getElementById("dataBtn").classList.remove(this.episode+"InactiveCardBtn");
        document.getElementById("visualBtn").classList.remove(this.episode+"ActiveCardBtn");
        document.getElementById("visualBtn").classList.add(this.episode+"InactiveCardBtn");
      }
      else if(buttomName == "visual"){
        this.showDataCard = false
        document.getElementById("dataBtn").classList.remove(this.episode+"ActiveCardBtn");
        document.getElementById("dataBtn").classList.add(this.episode+"InactiveCardBtn");
        document.getElementById("visualBtn").classList.add(this.episode+"ActiveCardBtn");
        document.getElementById("visualBtn").classList.remove(this.episode+"InactiveCardBtn");
      }
      this.$nextTick(function () {
        // DOM is now updated
        // `this` is bound to the current instance
        this.scrollToNew()
      })
    },
    scrollToNew(){
      if (this.currSection.includes(this.episode)){
        goTo('#'+this.currSection, {duration:300, offset: 100, easing: 'easeInOutCubic',})
        window.scrollBy(0, 1)
      }
    },
  },
  mounted() {
    //when components are mounted, click on setting automatically
    const setting = document.getElementById('setting').firstElementChild
    setting.click()
    window.scrollBy(0, 1)
  },
  created(){
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed(){
    document.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
<style>
.settingActiveCardBtn {
  /* Rectangle 33 */
  background-color: rgb(243, 223, 125);
  border:1px solid rgb(243, 223, 125);
  box-shadow: 2px 2px 5px rgb(243, 223, 125);
}
.risingActiveCardBtn {
  /* Rectangle 33 */
  background-color: rgb(247, 162, 161);
  /* background-color:white; */
  border:1px solid rgb(247, 162, 161);
  box-shadow: 2px 2px 5px rgb(247, 162, 161);
}
.resolutionActiveCardBtn {
  /* Rectangle 33 */
  background-color: rgb(126, 207, 212);
  border:1px solid rgb(126, 207, 212);
  box-shadow: 2px 2px 5px rgb(126, 207, 212);
}
.settingInactiveCardBtn {
  /* Rectangle 33 */
  background: #ffffff;
  border:1px solid rgb(243, 223, 125);

}
.risingInactiveCardBtn {
  /* Rectangle 33 */
  background: #ffffff;
  border:1px solid rgb(247, 162, 161);
}
.resolutionInactiveCardBtn {
  /* Rectangle 33 */
  background: #ffffff;
  border:1px solid rgb(126, 207, 212);
}
#cardButtonContainer {
  padding-top:1rem;
  padding-bottom: 1rem;
  height: 3rem;
}
.cardSwitchButton{
  font-size: 0.6rem !important;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 6.7rem;
  height: 1.7rem !important;
  text-transform: none !important;
}
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
