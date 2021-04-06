<template>
  <nav>
    <v-app-bar
      dense
      :class="episode + ' navBar'"
      app
      clipped-left
      style="z-index: 20"
    >
      <v-toolbar-title class="barTitle">Freytag's Design Space</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn active-class="activePage" class="inactivePage" text router to="/"> Home </v-btn>
      <v-btn active-class="activePage" class="inactivePage" @click="changeNav" text router to="Gallery">
        Gallery
      </v-btn>
      <v-btn active-class="activePage" class="inactivePage" @click="changeNav" text router to="About"> About </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      episode: (state) => state.thisEpisode
    }),
  },
  methods:{
      changeNav(){
           this.$store.commit("changeEpisode", "setting");
      }
  }
};
</script>
<style>
.barTitle {
  font-size: 1rem !important;
  font-weight: bold;
}
.navBar {
  /* background: #FBF0E8 !important;  */
  /* background-image: linear-gradient(to right, #f9f2c8, #fee9c4, #ffe1c2, #ffd9c2, #ffd2c4, #ffd0cf, #fbd0db, #f2d1e5, #e4d9f4, #d5e2fa, #cee9f7, #d1eef0);background-image: linear-gradient(to right, #fcf5d4, #fdebcc, #fee2c7, #fdd8c3, #fbcfc2, #fbcbcb, #f5c9d5, #ebc8df, #d9cfed, #c5d6f2, #b9dced, #b8e0e2); */
  /* background: -webkit-linear-gradient(to right, #ffd194, #70e1f5);  Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(to right, #ffd194, #70e1f5); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.activePage {
  border-bottom: 3px solid white !important;
  border-radius: 0px !important;
}
.inactivePage {
  border-bottom: 3px solid rgba(0,0,0,);
  border-radius: 0px !important;
}
</style>