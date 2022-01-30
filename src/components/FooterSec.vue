<template>
  <v-container>
    <v-row>
      <v-col md="2.4">
        <h4>Talk to Sales</h4>
        <div class="contact">
          <v-icon>mdi-email </v-icon>
          <a href="mailto: academy.silaas@gmail.com"
            >academy.silaas@gmail.com</a
          >
        </div>
        <div class="contact">
          <v-icon> mdi-phone </v-icon>
          <a href="tel:+977-9863696695"> 9863696695</a>
        </div>
        <div class="contact">
          <v-icon> mdi-phone </v-icon>
          <a href="tel:+977-9863696695"> 9840000245</a>
        </div>
      </v-col>
      <v-col md="2.4">
        <h4>Tools</h4>
        <v-list>
        <v-list-item
        link
        v-for="(product, index) in products"
        :key="index"
        :to="product.route"
      >
        <v-list-item-title>{{ product.title }}</v-list-item-title>
      </v-list-item>
      </v-list>
      </v-col>
      <v-col md="2.4">
        <h4>Get Started</h4>
              <v-list>
        <v-list-item
        link
        v-for="(product, index) in products"
        :key="index"
        :to="product.route"
      >
        <v-list-item-title>{{ product.title }}</v-list-item-title>
      </v-list-item>
      </v-list>
      </v-col>
      <v-col md="2.4">
        <h4>Company</h4>
              <v-list>
        <v-list-item
        link
        v-for="(product, index) in products"
        :key="index"
        :to="product.route"
      >
        <v-list-item-title>{{ product.title }}</v-list-item-title>
      </v-list-item>
      </v-list>
      </v-col>
      <v-col md="2.4">
        <h4>Product</h4>
              <v-list>
        <v-list-item
        link
        v-for="(product, index) in products"
        :key="index"
        :to="product.route"
      >
        <v-list-item-title>{{ product.title }}</v-list-item-title>
      </v-list-item>
      </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FooterSec",
  data() {
    return {
      products: [
        { title: "Features", route: "Feature" },
        { title: "Plans & Pricing", route: "Plans & Pricing" },
        { title: "Partners", route: "Partners" },
        { title: "Resources", route: "Resources" },
      ],
      company:[
        { title: "Features", route: "Feature" },
        { title: "Pricing", route: "Pricing" },
        { title: "Partners", route: "Partners" },
        { title: "Resources", route: "Resources" },
      ],
      tool:[
        { title: "Features", route: "Feature" },
        { title: "Pricing", route: "Pricing" },
        { title: "Partners", route: "Partners" },
        { title: "Resources", route: "Resources" },
      ],
      getStartd:[
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
.contact {
  display: flex;
  margin-bottom: 10px;
}
</style>