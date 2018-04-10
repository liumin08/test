<template>
  <div id="app">
    <my-Header></my-Header>
    <my-Tab></my-Tab>
    <router-view/>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader/myheader';
import myTab from '@/components/myTab/myTab';
export default {
  name: 'App',
  components:{
    myHeader,
    myTab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
