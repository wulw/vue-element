<template>
  <div class="home">
    <Header></Header>
    <!-- <Test></Test> -->
    <div class="content">
      <!-- <transition name="slide-fade"> -->
        <router-view :key="$route.name"></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Test from '@/views/Test'

export default {
  name: 'home',

  props: {},
  components: {
    Header,
    Test
  },
  data() {
    return {
      
    }
  },
  computed: {
     
  },
  methods: {
    
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // font-size: 64px;
  height: 100%;
  .content {
    height: calc(100% - 60px);
    padding: 16px;
  }
  a {
    color: red;
  }
}
</style>
