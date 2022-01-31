<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col lg="12">
          <h1 class="section-title">All your business. <span class="second-text"> one place.</span></h1>
        </v-col>
        <v-col md="12">
          <div>
            <v-tabs centered>
              <v-tab @click="activeContainer = 'Workflow'">WorkFlow</v-tab>
              <v-tab @click="activeContainer = 'Inventory'">invetory</v-tab>
              <v-tab @click="activeContainer = 'CRM'">CRM</v-tab>
              <v-tab @click="activeContainer = 'Sales'">Sales</v-tab>
              <v-tab @click="activeContainer = 'Purchase'">Purchase</v-tab>
              <v-tab @click="activeContainer = 'Accounting'">Accounting</v-tab>
              <v-tab @click="activeContainer = 'Reports'">Reports</v-tab>
            </v-tabs>
          </div>
        </v-col>
        <slot v-if="activeContainer == 'Workflow'">
          <v-col md="5">
            <h1>Workflow</h1>
            <p>
              Click a photo of your receipts andhave them updated in the system
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'Inventory'">
          <v-col md="5">
            <h1>Inventory</h1>
            <p>
              Click a photo of your receipts andhave them updated in the system
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'CRM'">
          <v-col md="5">
            <h1>CRM</h1>
            <p>
              Click a photo of your receipts andhave them updated in the system
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'Sales'">
          <v-col md="5">
            <h1>Sales</h1>
            <p>
              Click a photo of your receipts andhave them updated in the system
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'Purchase'">
          <v-col md="5">
            <h1>Purchase</h1>
            <p>
              Click a photo of your receipts andhave them updated in the system
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'Accounting'">
          <v-col md="5">
            <h1>Accounting</h1>
            <p>
              Click a photo of your receipts andhave them updated in the system
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
        <slot v-if="activeContainer == 'Reports'">
          <v-col md="5">
            <h1>Reports</h1>
            <p>
              Click a photo of your receipts andhave them updated in the system
            </p>
          </v-col>
          <v-col md=" 7">
            <v-img
              class="homeImg"
              max-height="400"
              max-width="600"
              src="../assets/ok.png"
            ></v-img>
          </v-col>
        </slot>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Services",

  data() {
    return {
      activeContainer: "Workflow",
    };
  },
};
</script>
<style scoped>
.second-text {
  color: #ffc107;
}
h1.section-title {
  font-size: 30px;

}
h1{
  font-size: 30px;
}

</style>