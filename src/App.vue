<template>
  <v-app>
    <Header />
    <v-main>
      <Main />
      <Section />
      <Services />
      <DataSection />
      <FeaturesSection />
      <AppSection />
      <ContactSection />
      <FooterSection />
      <Logo/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Section from "./components/Section.vue";
import Services from "./components/Services.vue";
import DataSection from "./components/DataSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import AppSection from "./components/AppSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSec.vue";
import Logo from "./components/Logo.vue";
export default {
  components: {
    Header,
    Main,
    Section,
    Services,
    DataSection,
    FeaturesSection,
    AppSection,
    ContactSection,
    FooterSection,
    Logo,
  },
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
}
</style>
