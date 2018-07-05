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
              <img :src="icon.src" :alt="icon.name" height="15" width="15">
            </div>
          </div>
         </div>    
        </div>
        <div class="bottom-nav">
          <div class="container">
            <div class="left">
              <h1>Eloquent</h1>
            </div>
            <div class="middle">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Instructiors</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
                <div class="right">
                  <h1>test</h1>
            </div>
          </div>
        </div>
        <router-link to="/">Home</router-link>
        <router-link to="about">About</router-link>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isScrolled: false,
      icons: []
    };
  },
  methods: {
    handleScroll: function() {}
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);

    axios
      .get("http://localhost:8000/api/icons")
      .then(res => (this.icons = res.data));
  }
};
</script>

<style scoped>
p {
  font-size: 14px;
}

#navbar {
  height: 50px;
  width: 100%;
  background: #fff;
  display: block;
}
#navbar.scrolled {
  background: #fff;
}
.top-nav {
  border-bottom: 1px solid #b6b6b6;
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
}
.bottom-nav .container .left {
  flex: 2;
}
.bottom-nav .container .left h1 {
  color: #82ca9c;
  font-size: 1.4rem;
}
.bottom-nav .container .middle {
  flex: 1;
}
.bottom-nav .container .middle ul {
  margin: 0;
  padding: 0;
}
.bottom-nav .container .middle ul li {
  display: inline-block;
}
.bottom-nav .container .right {
  flex: 1;
}
</style>

