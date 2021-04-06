<template>
  <v-container class="visualcards">
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="2" v-for="visual in visuals" :key="visual.cname">
        <div :class="'flip-card-container '+visual.name">
          <div class="card-inner" :id="'card-inner-'+visual.name">
            <v-card class="card-front d-flex flex-column" height="460">
              <!--  d-flex flex-column -->
              <v-card-title :class="episode + ' justify-center card-title-text'">{{visual.cname}}</v-card-title>
              <v-img
                height="150"
                max-height="150"
                :src='"../assets/gif/"+ visual.gifPosition + ".gif"'
              ></v-img>
              <v-divider class="mx-2 mt-3"></v-divider>
              <v-card-text>
                <div  height="20" :class="'my-1 '+ episode + '--text'" style="font-weight:bold">What</div>
                <div class="card-exp-text">
                  {{visual.how}}
                </div>
                <div :class="'my-1 '+ episode + '--text'" style="font-weight:bold">Why</div>
                <div class="card-exp-text">
                  {{visual.why}}
                </div>
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions class="justify-center">
                <v-btn :class="episode+'VisualCardBtn visualCardBtn'" text @click="btnClick(visual.name,'front')">
                  View the case
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="card-back d-flex flex-column" max-width="374">
              <v-card-title  :class="episode + ' justify-center card-title-text'">{{ visual.cname }}</v-card-title>
              <v-img
                height="150"
                max-height="150"
                :src='"../assets/gif/"+ visual.gifPosition + ".gif"'
              ></v-img>
              <v-divider class="mx-2 mt-3"></v-divider>
              <v-card-text>
                <div :class="'my-1 '+ episode + '--text'" style="font-weight:bold">Story case</div>
                <div class="card-exp-text">
                  {{visual.case}}
                </div>
                <!-- <div class="my-1 subtitle-1">来源</div>
                <div>
                  <span style="font-size:11px">{{visual.url}}</span>
                </div> -->
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions class="justify-center">
                <v-btn :class="episode+'VisualCardBtn visualCardBtn'" text @click="btnClick(visual.name,'back')">
                  Go back to front
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    visuals: Array,
    episode:String
  },
  methods:{
    btnClick: function(btnName,cardDirection){
      if(cardDirection == "front"){
        document.getElementById('card-inner-'+btnName).style.transform="rotateY(180deg)"
      }
      else{
        console.log("back is clicked")
        document.getElementById('card-inner-'+btnName).style.transform="rotateY(0deg)"
      }
      
    }
  }
};
</script>
<style>
/* .bottom-align{
  position: absolute;
  bottom: 0;
} */
.settingVisualCardBtn{
  background-color:rgba(243, 223, 125,0.3);
}
.risingVisualCardBtn{
  background-color: rgb(247, 162, 161,0.3);
}
.resolutionVisualCardBtn{
  background-color: rgb(126, 207, 212,0.3);
}
.card-inner {
  position: relative;
}
.card-front .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}
.flip-card-container{
  perspective: 40rem;
}
/* .card-inner:hover{
  transform: rotateY(180deg);
} */
.card-inner {
  transform-style: preserve-3d;
  transition: 1s transform;
}
.card-front, .card-back {
  backface-visibility: hidden;
}
.card-back {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  transform: rotateY(180deg);
}
.card-title-text{
  font-size:0.9rem;
}
.card-exp-text{
  font-size:0.7rem;
  line-height: 1rem;
  color:black;
}
.visualCardBtn{
  font-size:0.7rem !important;
  width: 97%;
  text-transform: none !important;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
</style>