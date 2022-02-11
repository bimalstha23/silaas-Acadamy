<template>
  
</template>

<script>
export default {
  name: "Header",

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
    this.updateScroll();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = Window.scrollY;
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
<style lang="scss" scoped>
header {
  background: rgba(50, 129, 255, 0.05);
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
        width: 50px;
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
.scrolled-nav {
  box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
  nav {
    padding: 8px 0;
    .logo {
      .img {
        width: 40px;
      }
    }
  }
}
</style>