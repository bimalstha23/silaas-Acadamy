<template>
  <v-app>
    <!-- <Header /> -->

    <!-- header -->
    <header :class="{ scrolledNav: scrolledNav }">
      <nav>
        <div class="logo">
          <v-img class="img" src="../src/assets/silaas.png"></v-img>
          <v-spacer></v-spacer>
          <ul v-show="!mobile" class="navigation">
            <li>
              <a v-scroll-to="'#main'" class="link" href="#">Home</a>
            </li>
            <li>
              <a v-scroll-to="'#services'" class="link" href="#">Services</a>
            </li>

            <li>
              <a v-scroll-to="'#feature'" class="link" href="#">Features</a>
            </li>

            <li>
              <a v-scroll-to="'#contactUs'" class="link" href="#">ContactUs</a>
            </li>
          </ul>
          <div class="icon">
            <v-icon
              class="navIcon"
              @click="toggleMobileNav"
              v-show="mobile"
              :class="{ 'icon-active': mobileNav }"
            >
              mdi-menu
            </v-icon>
          </div>
          <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-Nav">
              <li>
                <a v-on:click="toggleMobileNav" v-scroll-to="'#main'" class="link" href="#">Home</a>
              </li>
              <li>
                <a v-on:click="toggleMobileNav" v-scroll-to="'#services'" class="link" href="#">Services</a>
              </li>

              <li>
                <a v-on:click="toggleMobileNav"  v-scroll-to="'#feature'" class="link" href="#">Features</a>
              </li>

              <li>
                <a v-on:click="toggleMobileNav" v-scroll-to="'#contactUs'" class="link" href="#"
                  >Contact Us</a
                >
              </li>
            </ul>
          </transition>
        </div>
      </nav>
    </header>

    <v-main>
      <Main id="main" />
      <Section />
      <Services id="services" />
      <DataSection />
      <FeaturesSection id="feature" />
      <AppSection />
      <ContactSection id="contactUs" />
      <FooterSection />
      <Logo />
    </v-main>
  </v-app>
</template>

<script>
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

  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.updateScroll;
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll: function () {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
      return;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scopeds>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth;
}
header {
  background: white;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5 ease all;
  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
    ul,
    .link {
      font-weight: 500px;
      list-style: none;
      text-decoration: none;
    }
    li {
      cursor: pointer;
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding: 4px;
      border-bottom: 1px solid transparent;
      &:hover {
        color: #ffb032;
        border-color: #ffb032;
      }
    }
    .logo {
      display: flex;
      align-items: center;
      .img {
        width: 200px;
        transition: 0.5s ease all;
      }
    }
    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }
    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      .navIcon {
        cursor: pointer;
        transition: 0.8s ease all;
      }
    }
    .icon-active {
      transform: rotate(180deg);
    }
    .dropdown-Nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: white;
      top: 0;
      left: 0;

      li {
        margin: 0;
        .link {
          color: black;
        }
      }
    }
  }
}
header.scrolledNav {
  box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
  // background-color: black;
  nav {
    padding: 8px 0;
    .logo {
      .img {
        width: 150px;
      }
    }
  }
}
</style>
