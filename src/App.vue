<template>
  <div id="app">
    <my-header id="header"></my-header>
    <div id="main">
      <router-view/>
    </div>
    <my-footer id="footer"></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="less">
@import './assets/common.less';

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header"
                       ".      main   ."
                       "footer footer footer";

  #header {
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }

  #main {
    grid-area: main;
  }

  #footer {
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }
}

@media (max-width: 768px) {
  #app {
  grid-template-columns: 10px auto 10px;
  
    #header, #footer {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
