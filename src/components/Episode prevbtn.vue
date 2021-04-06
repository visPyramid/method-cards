<template>
  <div class="Episode">
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
        Visual Communication</v-btn
      >
    </div>
    <section
      v-for="narrpattern in narrpatterns"
      :key="narrpattern.name"
      :id="narrpattern.name"
      class="mt-3"
    >
      <v-container>
        <v-row>
          <div style="padding-left: 1.45rem">
            <p class="patternName" style="margin-bottom:0.5rem!important">
              {{ narrpattern.cname }}
            </p>
            <p class="patternExp">
              {{narrpattern.explanation}}
            </p>
          </div>
        </v-row>
      <DataCards
        v-if="showDataCard"
        :dataFlows="narrpattern.dataFlows"
        :episode="episode"
      ></DataCards>
      <VisualCards
        v-if="!showDataCard"
        v-bind:visuals="narrpattern.visuals"
        :episode="episode"
      ></VisualCards>
      </v-container>
    </section>
  </div>
</template>

<script>
import DataCards from "../components/DataCards";
import VisualCards from "../components/VisualCards";
import goTo from 'vuetify/es5/services/goto'

export default {
  components: {
    DataCards,
    VisualCards,
  },
  computed:{
    options () {
      return {
        duration:300,
        offset: 70,
        easing: 'easeInOutCubic'}
      }
  },
  props:['narrpatterns','episode'],
  methods: {
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
  mounted(){
    window.scrollBy(0, 1)
    // fetch to next page or some code
  },
  created(){
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed(){
    document.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      showDataCard: false, 
      testPassing: "pass",
      currSection:"setting-pattern1",
      prevSection:"unknownPattern",
      threshold: []
    };
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
  position: -webkit-sticky; /* Safari */
  position: sticky;
  left: 1px;
  top: 45px;
  padding-top:1rem;
  padding-bottom: 1rem;
  padding-left:1rem;
  height: 3rem;
  background-color:white;
  width: 100vw;
}
.cardSwitchButton{
  font-size: 0.6rem !important;
  box-sizing: border-box;
  border-radius: 20px;
  width: 10rem;
  height: 1.7rem !important;
  text-transform: none !important;
}
.patternExp {
  position: -webkit-sticky;/* Safari */
  position: sticky;
  top:200px;
  font-size: 0.7rem;
  color: black;
}
.patternName{
  font-size: 0.9rem;
  font-weight: bold;
  color: black;
}
.v-btn:before {
    background-color: transparent !important;
    /* border-bottom: 5px solid #ffdb00; */
}
/* .row {
  display: inline-flex;
  min-width: 100%;
} */
</style>