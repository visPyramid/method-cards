<template>
  <v-app class theme--yellow>
    <NavBar/>
    <v-main class="mx-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
/* .v-application--wrap{
  background-image: url("./assets/image/mem-background1.png");
  background-repeat:repeat;
  background-color:#F4F7F6
} */
.v-application--wrap::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: white;
    /* background-color: rgba(0,0,0,0.25); */
    /* background-image: url("./assets/image/mem-background1.png"); */
    /* background-repeat:repeat; */
    /* background-color: #FDF8F4; */
    /* opacity: 0.5; */
    /* background-color:rgba(251, 240, 232, 0.5) !important ; */
}
</style>