<template>
  <v-container class="datacards">
    <v-row>
      <v-col cols="12" v-for="dataFlow in dataFlows" :key="dataFlow.name">
        <v-card>
          <v-card-title class="justify-center primary" style="font-size:1.1rem;">{{ dataFlow.cname }}</v-card-title>
          <v-card-text>
            <div class="my-1 subtitle-1 primary--text" style="font-weight:bold">定义</div>
            <div>
              {{ dataFlow.explanation }}
            </div>
            <div class="my-1 subtitle-1 primary--text" style="font-weight:bold">故事案例</div>
            <div>
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
                    <div style="font-size: 0.65rem; height:20px; line-height:1rem!important">
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
  }
};
</script>