<template>
  <v-app>
    <Header />
    <Main />
    <Section />
    <Services />
    <DataSection />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Section from "./components/Section.vue";
import Services from "./components/Services.vue";
import DataSection from "./components/DataSection.vue";
export default {
  components: { Header, Main, Section, Services, DataSection, },
  name: "App",
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
