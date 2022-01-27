<template>
  <v-app-bar
    class="navbar"
    style="padding: 0px 100px"
    app
    color="white"
    light
    elevation="3"
    elevate-on-scroll
  >
    <v-toolbar-title> SILAAS ACADAMY </v-toolbar-title>
    <v-spacer />
    <v-list class="d-flex align-center">
      <v-list-item
        link
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.route"
      >
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item>
      <v-spacer />
      <v-btn large color="success" dark> GET STARTED </v-btn>
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      menus: [
        { title: "Features", route: "Feature" },
        { title: "Pricing", route: "Pricing" },
        { title: "Partners", route: "Partners" },
        { title: "Resources", route: "Resources" },
      ],
    };
  },
};
</script>
<style scoped>
</style>