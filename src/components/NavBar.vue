<template>
    <nav>
        <v-app-bar dense class = "secondary" app clipped-left style="z-index: 20;">
        <v-toolbar-title>Freytag's Design Space</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn text router to="/">
            Home
        </v-btn> -->
        <!-- <v-btn text router to="Gallery">
            Gallery
        </v-btn>
        <v-btn text router to="About">
            About
        </v-btn> -->
        </v-app-bar>
    </nav>
</template>

<script>
export default {

}
</script>
<style>

.v-btn:before{
    background-color:transparent !important;
    border-bottom: 5px solid #ffdb00;
}
</style>