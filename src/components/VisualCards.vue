<template>
  <v-container class="visualcards">
    <v-row class="sm-12 mb-4 lg-4">
      <v-col cols="4" v-for="visual in visuals" :key="visual.cname">
        <div :class="'flip-card-container '+visual.name">
          <div class="card-inner" :id="'card-inner-'+visual.name">
            <v-card class="card-front d-flex flex-column" max-width="374" height="460">
              <v-card-title class="justify-center primary" style="font-size:1.1rem;">{{visual.cname}}</v-card-title>
              <v-img
                max-height="150"
                height="150"
                :src='"../assets/gif/"+ visual.gifPosition + ".gif"'
              ></v-img>
              <v-divider class="mx-2"></v-divider>
              <v-card-text>
                <div  height="30" class="my-1 subtitle-1 primary--text" style="font-weight:bold">形式</div>
                <div>
                  {{visual.how}}
                </div>
                <div class="my-1 subtitle-1 primary--text" style="font-weight:bold">好处</div>
                <div>
                  {{visual.why}}
                </div>
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions class="justify-center">
                <v-btn style="width:22vw" class="grey lighten-2 grey--text" text @click="btnClick(visual.name,'front')">
                  查看故事
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="card-back d-flex flex-column" max-width="374">
              <v-card-title  class="justify-center primary" style="font-size:1.1rem;">{{ visual.cname }}</v-card-title>
              <v-img
                height="150"
                max-height="150"
                :src='"../assets/gif/"+ visual.gifPosition + ".gif"'
              ></v-img>
              <v-divider class="mx-2"></v-divider>
              <v-card-text>
                <div class="my-1 subtitle-1 primary--text">故事简介</div>
                <div style="font-size:0.78rem">
                  {{visual.case}}
                </div>
                <!-- <div class="my-1 subtitle-1">来源</div>
                <div>
                  <span style="font-size:11px">{{visual.url}}</span>
                </div> -->
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions class="justify-center">
                <v-btn style="width:22vw" class="grey lighten-2 grey--text" text @click="btnClick(visual.name,'back')">
                  查看定义
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

</style>