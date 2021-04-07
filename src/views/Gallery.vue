<template>
  <div class="Gallery">
      <v-row class="mx-10 justify-center">
      <v-col xs="12" sm="6" md="4" lg="3" xl="2" v-for="video in gallery" :key="video.name">
       <!-- <div v-for="video in gallery" :key="video.name"> -->
         <v-card class="mx-2 my-2 d-flex flex-column pt-0" min-width="250" width="250" min-height="210">
              <a :href="video.link"><v-img
                height="140"
                width="250"
                :src='"../assets/image/thumbnail/"+ video.imagePosition + ".jpg"'
                style="margin-top:0px !important"
              ></v-img></a>
              <!-- <v-spacer></v-spacer> -->
              <v-card-text style="padding: 10px 2px 2px 10px !important">
                <div height="100" class="black--text font-weight-bold name" style="line-height:1rem">{{video.name}}</div>
                </v-card-text>
                <v-spacer></v-spacer>
                <v-card-text style="padding: 2px 2px 2px 10px !important">
                <div class="black--text author">{{video.author}}</div>
                </v-card-text>
         </v-card>
      </v-col>
      </v-row>
        <!-- </div> -->
  </div>
</template>
<script>
import gallery from "../assets/gallery.json";

export default({
  name: "gallery",
  data (){
    return {
      gallery:gallery
      }
  }
})
</script>
<style>
.author{
  font-size:0.6rem !important;
  margin-bottom:3px !important;
}
.name{
  font-size:0.7rem !important;
  margin-bottom:3px !important;
}

</style>
