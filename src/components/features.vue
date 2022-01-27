<template>
  <v-containers>
    <h1>Some of Our features</h1>
    <v-row class="data-cards">
      <v-col lg="4">
        <v-card class="data-card" elevation="4" shaped>
          <v-img
            class="card-icon"
            max-height="38"
            max-width="37"
            src="../assets/icon1.png"
          ></v-img>
          <p class="card-description">Data is replicated to 3 places so that its never lost.</p>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card class="data-card" elevation="4" shaped>
          <v-img
            class="card-icon"
            max-height="38"
            max-width="37"
            src="../assets/icon2.png"
          ></v-img>
          <p class="card-description">Data is always encrypted at rest and in transit, so that only the ones you authorize can see you data, no-one else.</p>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card class="data-card" elevation="4" shaped>
          <v-img
            class="card-icon"
            max-height="38"
            max-width="37"
            src="../assets/icon3.png"
          ></v-img>
          <p class="card-description">Layered security approach, from infrastructure to software.</p>
        </v-card>
      </v-col>
    </v-row>
  </v-containers>
</template>

<script>
export default {
  name: "features",

  data() {
    return {};
  },
};
</script>
<style scoped>
.data-card {
  width: 400px;
  height: 250px;
}
.card-icon {
  width: 40px;
  height: 40px;
  position: relative;
  top: 40px;
  left: 40px;
}
.data-cards {
  margin-left: 80px;
  margin-right: 80px;
}
.card-description {
  position: relative;
  margin-top: 100px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>