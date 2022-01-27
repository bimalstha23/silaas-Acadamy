<template>
    <v-main>
      <v-container>
        <div class="section-content">
        <h1 class="section-title">Tired of switching between multiple apps?</h1>
        <p>With Tigg ERP, you can manage all your business from a single streamlined application.</p>
        <v-img
          class="homeImg"
            max-height="500"
            max-width="700"
            src="../assets/section.png"
          ></v-img>
          </div>
      </v-container>
    </v-main>
</template>

<script>
export default {
  name: 'Section',
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
div.section-content{
  /* display: flex; */
  justify-content: center;
  display: inline-block;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
</style>