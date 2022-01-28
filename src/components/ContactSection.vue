<template>
  <v-container class="ContactSection" fluid>
      <v-row>
          <v-col lg= "12">
              <h1 class="contactSection-title">Everything about your business just a click away.</h1>
              <h2 class="contactSection-subTitle">Get a Demo in your mailbox</h2>
                    <div class="intro-contactFrom">
            <v-text-field
              label="Enter Your Phone Number:"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <v-btn elevation="2" large color="success">SUBMIT</v-btn>
          </div>
        </v-col>
      </v-row>
    
  </v-container>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>
<style scoped>
h1.contactSection-title{
    margin-top: 50px;
  font-size: 50px;
  font-weight: 600;
  line-height: 56px;
  width: 70%;
  align-items: center;
  justify-content: center;
  display: inline-block;
}
h2.contactSection-subTitle{
  color: #ffb032;
  font-size: 25px;

}
.ContactSection{
    background :rgba(50, 129, 255, 0.05);
}
div.intro-contactFrom {
  display: inline-flex;
  align-content: left;
}
</style>