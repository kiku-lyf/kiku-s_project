<template>
<!--  <img alt="Vue logo" src="./assets/left-img.d6c4340b.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--   <SiteNav></SiteNav>-->
<!--      <nav>-->
<!--        <router-link to="/">Home</router-link>-->
<!--        <router-link to="/about">About</router-link>-->
<!--      </nav>-->
      <router-view></router-view>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SiteNav from "@/components/SiteNav.vue";
export default {
  name: 'App',
  components: {
    // SiteNav
    // HelloWorld
  },
  data(){

  },
  mounted() {
  },
  methods:{
  loadType(){
    this.$request
  }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
