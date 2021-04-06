<template>
  <div class="about">
    <div class="d-flex justify-center flex-column">
      <v-card class="d-flex flex-column mt-4 mb-4 mx-auto" id="pyramidExp" width="70vw">
        <v-card-title class="justify-center"
          >A Design Space for Applying the Freytag’s Pyramid Structure to Data
          Stories</v-card-title
        >
        <v-card-text class="black--text">
          <p>
            A data story with the Freytag's Pyramid structure can be segmented
            into three stages:
          </p>
          <ul>
            <li>
              <span class="settingdark--text font-weight-bold">Setting: </span
              >This stage provides contextual information of the data story and
              grabs the audience's attention.
            </li>
            <li>
              <span class="risingdark--text font-weight-bold"
                >Rising-Climax: </span
              >This stage builds the tension of the story and gives supporting
              facts leading to the climax that shares the main finding or the
              central insight of the story.
            </li>
            <li>
              <span class="resolutiondark--text font-weight-bold"
                >Resolution: </span
              >This stage gives conclusions and take-away messages.
            </li>
          </ul>
          <p class="mt-4">
            To facilitate the story creation process, we introduced
            <span class="font-weight-bold">a design space</span> for applying
            the freytag’s pyramid structure for data stories. The design space
            concludes
            <span class="font-weight-bold">
              story patterns in each stage of the structure regarding three
              dimensions</span
            >:
          </p>
          <ul>
            <li>
              <span class="font-weight-bold">Narrative pattern </span>that
              provides narrative devices as initial ideas to assist the creative
              process.
            </li>
            <li>
              <span class="font-weight-bold">Data flow </span>that provides
              strategies for the selection and organization of individual story
              pieces (i.e., facts backed up by data) to achieve a narrative
              pattern.
            </li>
            <li>
              <span class="font-weight-bold">Visual Communication </span>that
              supports the selection of visual design strategies to enhance the
              presentation of a narrative pattern.
            </li>
          </ul>
        </v-card-text>
      </v-card>
      <v-card width="70vw" class="mt-4 mb-4 py-1 px-1 mx-auto">
        <v-card-title class="justify-center"
          >Design Space</v-card-title
        >
        <v-img
          src="../assets/image/space.jpg"
          class="mx-auto"
        ></v-img>
      </v-card>
      <!-- <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Click to download the PDF version
        </v-btn>
      </v-card-actions> -->
    </div>
  </div>
</template>
<style>
</style>
