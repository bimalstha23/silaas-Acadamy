<template>
<v-main>
    <v-container>
        <v-row>
            <v-col lg = "12">
                <h1>All your business. <span> one place.</span></h1>
            </v-col>
            <!-- <v-co lg ="12">
                  <v-list class="d-flex align-center">
                <v-list-item link @click="activeContainer = 'Workflow'" :color="activeContainer == 'Workflow'? 'success':''">
                 <v-list-item-title >Workflow</v-list-item-title>
                 </v-list-item>
                 <v-list-item link @click="activeContainer = 'Inventory'" :color="activeContainer == 'Inventory'? 'success':''">
                 <v-list-item-title >Inventory</v-list-item-title>
                 </v-list-item>
                 <v-list-item link @click="activeContainer = 'CRM'" :color="activeContainer == 'CRM'? 'success':''">
                 <v-list-item-title >CRM</v-list-item-title>
                 </v-list-item>
                 <v-list-item link @click="activeContainer = 'Sales'" :color="activeContainer == 'Sales'? 'success':''">
                 <v-list-item-title >Sales</v-list-item-title>
                 </v-list-item>
                 <v-list-item link @click="activeContainer = 'Purchase'" :color="activeContainer == 'Purchase'? 'success':''">
                 <v-list-item-title >Purchase</v-list-item-title>
                 </v-list-item>
                 <v-list-item link @click="activeContainer = 'Accounting'" :color="activeContainer == 'Accounting'? 'success':''">
                 <v-list-item-title >Accounting</v-list-item-title>
                 </v-list-item>
                 <v-list-item link @click="activeContainer = 'Reports'" :color="activeContainer == 'Reports'? 'success':''">
                 <v-list-item-title >Reports</v-list-item-title>
                 </v-list-item>
                  </v-list>
                <slot v-if="activeContainer == 'Workflow'">
                    <v-col lg="12">
                        <h1>Workflow</h1>
                        <p>Click a photo of your receipts andhave them updated in the system</p>
                    </v-col>
                </slot>
            </v-co> -->

        </v-row>
    </v-container>

</v-main>


</template>

<script>


export default {
  name: 'Services',

  data(){
    return{
    // activeContainer:'Workflow'
        items: [
            { title: "Workflow", route: "Workflow" },
            { title: "Inventory", route: "Inventory" },
            { title: "CRM", route: "CRM" },
            { title: "Sales", route: "Sales" },
            { title: "Purchase", route: "Purchase" },
            { title: "Accounting", route: "Accounting" },
            { title: "Reports", route: "Reports" },
        ],
        }
  },
};
</script>
<style scoped>

</style>