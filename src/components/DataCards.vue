<template>
  <v-container class="datacards">
    <v-row>
      <v-col cols="12" v-for="dataFlow in dataFlows" :key="dataFlow.name">
        <v-card>
          <v-card-title :class="episode + ' justify-center card-title-text'">{{ dataFlow.cname }}</v-card-title>
          <v-card-text>
            <div :class="'my-1 '+ episode + '--text'" style="font-weight:bold">Definition</div>
            <div class="card-exp-text">
              {{ dataFlow.explanation }}
            </div>
            <div :class="'my-1 '+ episode + '--text'" style="font-weight:bold">Story Case</div>
            <div class="card-exp-text">
              {{ dataFlow.case }}
            </div>
          </v-card-text>
          <v-divider class="mx-2"></v-divider>
          <!-- <v-img
                height="220"
                :src='"../assets/image/"+ dataFlow.imagePosition + ".png"'
          ></v-img> -->
          <v-container fluid class="dataFlowImage">
            <v-row dense>
              <v-col
                v-for="flowImage in dataFlow.imageGroup"
                :key="flowImage.imagePosition"
                class="justify-center"
                cols=3
              >
                <v-card outlined>
                  <v-img
                    :src='"../assets/image/"+flowImage.imagePosition+".png"'
                    class="white--text justify-center"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="150"
                  >
                  </v-img>
                  <v-card-text>
                    <div style="font-size: 0.65rem; height:35px; line-height:1rem!important">
                      {{flowImage.imageExplanation}}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    dataFlows: Array,
    episode:String
  }
};
</script>
<style>
.card-title-text{
  font-size:0.9rem;
}
.card-exp-text{
  font-size:0.7rem;
  line-height: 1rem;
}
</style>