<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	html,body{
		/*width: 100%;*/
		margin: 0;
		padding: 0;
    background-color: #FFFFFF;
	}
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    position: relative;
    /*width: 100%;*/
    /* height: 100%; */
  }
</style>
