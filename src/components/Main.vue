<template class= "landingpage">
  <v-main class="mainmenu">
    <v-container class="container">
      <v-row>
        <v-col lg="4" sm="12" xs="12" md="5">
          <div class="Main-text">
            <h1 class="intro-text">
              Your all-in-one learning <br />
              experience
            </h1>
            <p class="intro-subtext">
              Silaas Academy is an aggregated learning platform. Connect with us
              and experience education like never before.
            </p>
            <h2 class="intro-question">Enthusiastic about our product ?</h2>
            <p class="intro-contact">
              Provide us your details and we will contact you.
            </p>
          </div>
        </v-col>
        <v-col lg="7" md="7" sm="12" xs="12">
          <v-img
            class="homeImg"
            max-height="500"
            max-width="700"
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

.homeImg {
  margin-top: 100px;
}
.landingpage {
  background: rgba(50, 129, 255, 0.05);
}
.container {
  margin-top: 100px;
  padding-bottom: 50px;
}
@media only screen and (max-width: 600px) {
  div.main-text{
    width: 90%;
    text-align: center;
  }
  p.intro-contact{
width: 90%;
  text-align: center;
  }
  h1.intro-text {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 0px;
    width: 90%;
    text-align: center;
  }
  h2.intro-question {
  width: 90%;
  text-align: center;
  }
  .container {
    margin-top: 40px;
  }
  p.intro-subtext {
    margin-top: 0px;
    width: 90%;
    text-align: center;
  }
  .homeImg {
    margin-top: 0px;
  }
  @media only screen and (max-width: 900px) {
    h1.intro-text {
      font-size: 30px;
      line-height: 40px;
    }
  }
}
</style>