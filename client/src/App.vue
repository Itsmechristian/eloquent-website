<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
/** Fonts **/
@font-face {
  font-family: "OpenSans-Regular";
  src: url("./assets/fonts/OpenSans-Regular.ttf");
}
@font-face {
  font-family: "OpenSans-Semibold";
  src: url("./assets/fonts/OpenSans-Semibold.ttf");
}

/** Global CSS **/
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-family: "OpenSans-Semibold";
  color: #333;
}
a {
  font-family: "OpenSans-Regular";
  text-decoration: none;
  color: #333;
}
li {
  list-style-type: none;
}
p {
  font-family: "OpenSans-Semibold";
  color: #838282;
}
.container {
  width: 70%;
  height: 100%;
  position: relative;
  margin: 0 auto;
}
</style>
