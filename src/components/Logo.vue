<template>
  <v-container>
        <v-row>
              <v-col md="6" xs="12">
        <div class="text-left">
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark> mdi-instagram </v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark> mdi-facebook </v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark> mdi-twitter </v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark> mdi-linkedin </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" xs="12">
        <v-img
          class="playstore"
          max-height="50"
          max-width="200"
          src="../assets/playstore.png"
        ></v-img>
      </v-col>

    </v-row>
  
  </v-container>
</template>

<script>
export default {
  name: "Logo",
};
</script>
<style scoped>
</style>