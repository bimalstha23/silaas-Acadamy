<template>
  <v-container>
    <div class="section-content">
      <h1 class="section-title">Want more features in the same platform ?</h1>
      <p>We believe, you should be equipped with complete set of tools.</p>
      <v-img
        class="homeImg"
        max-height="500"
        max-width="700"
        src="../assets/section.png"
      ></v-img>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Section",
};
</script>
<style scoped>
h1.section-title {
  font-size: 50px;
  font-weight: 600;
  line-height: 56px;
  width: 70%;
  align-items: center;
  justify-content: center;
  display: inline-block;
}
div.section-content {
  /* display: flex; */
  justify-content: center;
  display: inline-block;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  width: 70%;
}
.homeImg {
  padding: 25px;
}
@media only screen and (max-width: 600px) {
  h1.section-title {
    font-size: 25px;
    width: 100%;
    line-height: 40px;
  }
}
</style>