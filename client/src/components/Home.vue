<template>
    <div id="home">
        <header>
          <div class="container">
            <div class="text">
              <h1>Free Online Language Learning</h1>
              <p>Fun, effective language lessons available in 30 languages.</p>         
              <router-link to="/courses">Get Started</router-link>   
            </div>
          </div>
        </header>
        <section>
          <div class="container">
              <div class="flags">
                <div class="row" v-for="language in languages" :key="language.id">
                    <img :src="language.flag" :alt="language.ISOCode" height="40" width="60">
                    <small>{{language.language}}</small>
                </div>
            </div>
          </div>
        </section>
    </div>    
</template>


<script>
import axios from "axios";
import Slider from "./home-components/Slider.vue";
export default {
  data() {
    return {
      languages: []
    };
  },
  created() {
    axios
      .get("http://localhost:5501/api/languages")
      .then(res => (this.languages = res.data));
  }
};
</script>

<style scoped>
header {
  height: 600px;
  background: url("../assets/images/header-background.jpg");
  background-size: 1920px;
  background-position: 50% 30%;
}
header .container .text {
  position: relative;
  top: 45%;
}
header h1,
header p {
  color: #333;
}
header .container .text a {
  background: #82ca9c;
  color: #fff;
  padding: 5px 20px;
}
section .container .flags {
  width: 80%;
  margin: 0 auto;
  padding: 50px 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

section .container .flags .row {
  display: inline-block;
  padding: 0px 20px;
}

section .container .flags .row small {
  display: block;
  text-align: center;
  padding: 5px 0px;
  color: #707070;
}
</style>
