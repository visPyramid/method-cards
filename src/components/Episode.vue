<template>
  <div class="Episode">
    <div id="cardButton" style="z-index:10">
      <v-btn
        text
        class="activeCardBtn"
        @click="onClick($event, 'data')"
        id="dataBtn"
      >
        数据内容
      </v-btn>
      <v-btn
        text
        class="inactiveCardBtn ml-2"
        @click="onClick($event, 'visual')"
        id="visualBtn"
      >
        视觉设计</v-btn
      >
    </div>
    <section
      v-for="narrpattern in narrpatterns"
      :key="narrpattern.name"
      :id="narrpattern.name"
      class="mt-3"
      v-intersect="{
        handler: onIntersect,
        options: {
          threshold: [
            0,
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.51,
            0.52,
            0.53,
            0.54,
            0.55,
            0.56,
            0.57,
            0.58,
            0.59,
            0.6,
            0.7,
            0.8,
            0.9,
            1.0,
          ],
        },
      }"
    >
      <v-container>
        <v-row>
          <div class="patternExp">
            <h2>
              {{ narrpattern.cname }}
            </h2>
            <p>
              {{narrpattern.explanation}}
            </p>
          </div>
        </v-row>
      </v-container>
      <DataCards
        v-if="showDataCard"
        v-bind:dataFlows="narrpattern.dataFlows"

      ></DataCards>
      <VisualCards
        v-if="!showDataCard"
        v-bind:visuals="narrpattern.visuals"
      ></VisualCards>
    </section>
  </div>
</template>

<script>
import DataCards from "../components/DataCards";
import VisualCards from "../components/VisualCards";

export default {
  components: {
    DataCards,
    VisualCards,
  },
  computed:{
    options () {
      return {
        duration:300,
        offset: 64,
        easing: 'easeInOutCubic'}
      }
  },
  props:['narrpatterns','episode'],
  // props: {
  //   narrpatterns: Array,
  //   episode:String
  // },
  methods: {
    onIntersect(entries) {
      var sectionEle = entries[0].target;
      var viewportOffsetTop = sectionEle.getBoundingClientRect().top;
      var viewportOffsetBottom = sectionEle.getBoundingClientRect().bottom;
      var listItem = document.getElementById("list-item-" + sectionEle.id);
      if (entries[0].isIntersecting && viewportOffsetTop < 200 && viewportOffsetBottom > 200) {
        listItem.classList.add("activeItemList");
        listItem.classList.remove("inactiveItemList");
        this.currSection = sectionEle.id
      } else {
        listItem.classList.add("inactiveItemList");
        listItem.classList.remove("activeItemList");
      }
    },
    onClick(event, buttomName) {
      this.prevSection = this.currSection
      if(buttomName == "data"){
        this.showDataCard = true
        document.getElementById("dataBtn").classList.add("activeCardBtn");
        document.getElementById("dataBtn").classList.remove("inactiveCardBtn");
        document.getElementById("visualBtn").classList.remove("activeCardBtn");
        document.getElementById("visualBtn").classList.add("inactiveCardBtn");
      }
      else if(buttomName == "visual"){
        this.showDataCard = false
        document.getElementById("dataBtn").classList.remove("activeCardBtn");
        document.getElementById("dataBtn").classList.add("inactiveCardBtn");
        document.getElementById("visualBtn").classList.add("activeCardBtn");
        document.getElementById("visualBtn").classList.remove("inactiveCardBtn");
      }
      this.$nextTick(function () {
        // DOM is now updated
        // `this` is bound to the current instance
        this.scrollToNew()
      })
    },
    scrollToNew(){
      const element = document.getElementById(this.prevSection);
      element.scrollIntoView({ behavior: 'smooth'});
    }
  },
  watch: {
    }
  ,
  data() {
    return {
      showDataCard: true, 
      testPassing: "pass",
      currSection:"unknownPattern",
      prevSection:"unknownPattern"
    };
  },
};
</script>
<style>
.activeCardBtn {
  /* Rectangle 33 */
  background-color: #f5e376;
  border: 1px solid #f5e376;
  box-sizing: border-box;
  border-radius: 20px;
}
.inactiveCardBtn {
  /* Rectangle 33 */
  background: #ffffff;
  border: 1px solid #f5e376;
  box-sizing: border-box;
  border-radius: 20px;
}
.patternExp {
  position: -webkit-sticky;/* Safari */
  position: sticky;
  top:200px;
}
#cardButton {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 45px;
  padding-top:10px;
  padding-bottom: 15px;
  height: 50px;
  background-color:white;
}
/* .row {
  display: inline-flex;
  min-width: 100%;
} */
</style>