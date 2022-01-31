<template class= "landingpage">
<v-main class="mainmenu">
  <v-container class="container">
    <v-row>
      <v-col lg="5" sm="7" xs="12" md="5">
        <div class="Main-text">
          <h1 class="intro-text">
            All-in-one business management <br />
            software
          </h1>
          <p class="intro-subtext">
            Tigg ERP is a cloud-based SaaS to manage your business securely and
            remotely.
          </p>
          <h2 class="intro-question">Interested to know more about TIGG?</h2>
          <p class="intro-contact">
            Provide us your Detail and we will contact you.
          </p>
          <div class="intro-contactFrom">
            <v-text-field
              label="Enter Your Phone Number:"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <v-btn elevation="2" large color="success">SUBMIT</v-btn>
          </div>
        </div>
      </v-col>
      <v-col lg="7" md="7" sm="7" xs="12">
        <v-img
          class="homeImg"
          max-height="450"
          max-width="600"
          src="../assets/ok.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
      </v-main>

</template>

<script>
export default {
  name: "Main",
};
</script>
<style scoped>
h1.intro-text {
  /* position: absolute; */
  width: 100%;
  height: 174px;
  font-weight: 600;
  font-size: 50px;
  line-height: 56px;
  /* or 56px */

  color: #0a1a66;
}
.main-content {
  margin-top: 100px;
}
div.Main-text {
  margin-top: 50px;
  text-align: left;
  padding-left: -40px;
}
p.intro-subtext {
  /* position: absolute; */
  margin-top: 40px;
  width: 90%;
  height: 51px;
  line-height: 17px;
}
.mainmenu {
  /* margin-top: 100px; */
  background: rgba(50, 129, 255, 0.05);
}
h2.intro-question {
  font-family: poppins;
  font-size: 15px;
  font-weight: 600px;
}
p.intro-contact {
  color: #ffb032;
  font-size: 12px;
}
div.intro-contactFrom {
  display: inline-flex;
  align-content: left;
}
.homeImg {
  margin-top: 100px;
}
.landingpage {

  background: rgba(50, 129, 255, 0.05);
}
.container{
  margin-top: 100px;
}
 @media only screen and (max-width: 600px) {
  h1.intro-text {
    font-size: 30px;
    line-height: 40px;
    margin-bottom:0px;

  }
  .container {
    margin-top: 0px;
  }
  p.intro-subtext{
    margin-top: 0px
  }
  .homeImg {
    margin-top: 0px;
  }
}
</style>