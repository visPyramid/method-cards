<template>
  <div class="Episode">
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

export default {
  components: {
    DataCards,
    VisualCards,
  },
  props:['narrpatterns','episode','showDataCard'],
};
</script>
<style>
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