<template>
    <div id="navbar" v-bind:class="{ scrolled: isScrolled }">
        <div class="top-nav">
          <div class="container">
            <div class="left">
              <p>PHONE: +447236598402</p>
            </div>
          <div class="right">
            <p>SITE LANGUAGE: English</p>
            <p>FOLLOW US</p>
            <div class="icons" v-for="icon of icons" :key="icon.src">
              <img class="icon" :src="icon.src" :alt="icon.name" height="15" width="15">
            </div>
          </div>
         </div>    
        </div>
        <div class="bottom-nav" id="bottom">
          <div class="container">
            <div class="left">
              <h1>Eloquent</h1>
            </div>
            <div class="middle">
              <ul>
                <li><router-link active-class="active" to="/" exact>Home</router-link></li>
                <li><router-link active-class="active" to="/courses">Courses</router-link></li>
                <li><router-link active-class="active" to="/instructors">Instructors</router-link></li>
                <li><router-link active-class="active" to="/blog">Blog</router-link></li>
                <li><router-link active-class="active" to="/contact">Contact</router-link></li>
              </ul>
            </div>
                <div class="right">
                  <div class="search-bar" v-bind:class="{ clicked: magnifyClicked }">
                    <svg v-on:click="isMagnifyClicked" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1">
                       <g id="surface1" fill="#838282">
                       <path v-bind:class="{ clicked: magnifyClicked }" d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z " fill="#838282"/>
                       </g>
                    </svg>
                     <input v-model="searchValue" type="text" name="search" id="search" placeholder="Search..." v-bind:class="{ clicked: magnifyClicked }">
                </div>
                <div class="user">
                  <img src="../assets/images/user.png" alt="user" height="30" width="30">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isScrolled: false,
      icons: [],
      magnifyClicked: false,
      recentPath: "",
      searchValue: ""
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);

    // @route  GET '/api/icons'
    // @desc   GET Top Nav Icons
    // @access PUBLIC
    axios
      .get("http://localhost:5501/api/icons")
      .then(res => (this.icons = res.data));

    let fullPath = this.$router.history.current.fullPath;
    this.recentPath = fullPath;
  },
  methods: {
    handleScroll: function() {
      window.pageYOffset > 100
        ? (this.isScrolled = true)
        : (this.isScrolled = false);
    },
    isMagnifyClicked: function() {
      this.magnifyClicked = !this.magnifyClicked;
    },
    navigate(val) {
      this.$router.push(`/search?q=${val}`);
    },
    goBack(recentPath) {
      this.$router.push(`${recentPath}`);
    }
  },
  watch: {
    searchValue: function(val, oldVal) {
      if (val === "") {
        this.goBack(this.recentPath);
      } else if (val) {
        this.navigate(val);
      }
    },
    $route(e) {
      if (e.path !== "/search") {
        this.recentPath = e.fullPath;
      }
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "OpenSans-Bold";
  src: url("../assets/fonts/OpenSans-Bold.ttf");
}
@font-face {
  font-family: "OpenSans-Semibold";
  src: url("../assets/fonts/OpenSans-Bold.ttf");
}

p {
  font-size: 14px;
}

#navbar {
  width: 100%;
  background: #fff;
  display: block;
  top: 0px;
  position: fixed;
  width: 100%;
  background: #fff;
  transition: all ease 200ms;
  -webkit-transition: all ease 200ms;
  -moz-transition: all ease 200ms;
  -o-transition: all ease 200ms;
  z-index: 99999;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.025);
}
#navbar.scrolled {
  top: -48px;
}
.top-nav {
  border-bottom: 1px solid #ebebeb;
}
.top-nav .container {
  display: flex;
  justify-content: space-between;
}
.top-nav .right p {
  display: inline-block;
}
.top-nav .right p:nth-child(1) {
  padding: 0px 30px;
}
.top-nav .right p:nth-child(2) {
  padding: 0px 0px;
}
.top-nav .right .icons {
  vertical-align: middle;
  display: inline-block;
  padding: 0px 5px;
}
.bottom-nav .container {
  display: flex;
  padding: 10px 0px;
}
.bottom-nav .container .left {
  flex: 1;
}
.bottom-nav .container .left h1 {
  color: #82ca9c;
  font-family: "OpenSans-Bold";
  font-weight: bold;
  font-size: 1.6rem;
  transform: scale(1);
  background: #fff;
  transition: all ease-in-out 200ms;
  -webkit-transition: all ease-in-out 200ms;
  -moz-transition: all ease-in-out 200ms;
  -o-transition: all ease-in-out 200ms;
}
#navbar.scrolled .bottom-nav .container .left h1 {
  -moz-transform: scale(0.8);
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  padding: 5px 0px;
  transform-origin: left;
}
.bottom-nav .container .middle {
  flex: 3;
}
.bottom-nav .container .middle ul {
  text-align: right;
  margin: 0;
  padding: 0;
}
.bottom-nav .container .middle ul li {
  display: inline-block;
  padding: 10px 0px;
}
.bottom-nav .container .middle ul li a {
  font-family: "OpenSans-Semibold";
  color: rgba(0, 0, 0, 0.45);
  padding: 0px 10px;
}
.bottom-nav .container .middle ul li a.active {
  color: #333;
}
.bottom-nav .container .right {
  flex: 1.5;
}
.bottom-nav .container .right .search-bar {
  vertical-align: bottom;
  height: 100%;
  display: inline-block;
  width: 70%;
  position: relative;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  left: 220px;
}
.bottom-nav .container .right .search-bar.clicked {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  left: 50px;
}
.bottom-nav .container .right .search-bar svg {
  display: inline-block;
  vertical-align: bottom;
  position: relative;
  left: 25px;
  top: -10px;
  z-index: 999;
  height: 20px;
  width: 20px;
  fill: #b6b6b6;
}
.bottom-nav .container .right .search-bar svg path.clicked {
  cursor: pointer;
  fill: #333;
}
.bottom-nav .container .right .search-bar input {
  display: inline-block;
  vertical-align: middle;
  height: 30px;
  width: 75%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #b6b6b6;
  outline: none;
  padding: 5px 0px 5px 25px;
  z-index: -999;
  -webkit-transition: opacity 0.1s ease-in-out;
  -moz-transition: opacity 0.1s ease-in-out;
  -o-transition: opacity 0.1s ease-in-out;
  -ms-transition: opacity 0.1s ease-in-out;
  transition: opacity 0.1s ease-in-out;
  opacity: 0;
}
.bottom-nav .container .right .search-bar input.clicked {
  -webkit-transition: opacity 1.3s ease-in;
  -moz-transition: opacity 1.3s ease-in;
  -o-transition: opacity 1.3s ease-in;
  -ms-transition: opacity 1.3s ease-in;
  transition: opacity 1.3s ease-in;
  background: transparent;
  opacity: 1;
}
.bottom-nav .container .right .user {
  float: right;
  vertical-align: middle;
  width: 11%;
  padding: 5px 0px;
}
</style>