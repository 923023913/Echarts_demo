<template>
  <div id="app">
    <h1>Echarts</h1>
    <nav class="header_nav">
      <router-link to="/">十大常见图表</router-link>
      <router-link to="/senior">echarts高级图表</router-link>
      <router-link to="/synthesize">综合案例</router-link>
    </nav>
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  &>section {
    flex: 1;
  }
  &>h1 {
    line-height: 50px;
    background-color: rgb(78, 76, 74);
    color: #fff;
  }
}
.header_nav {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: blue;
    margin: 0 20px;
    &.router-link-exact-active {
      color: orangered;
    }
  }
}
</style>
