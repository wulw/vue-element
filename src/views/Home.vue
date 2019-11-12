<template>
  <div class="home">
    <Header></Header>
    <!-- <Test></Test> -->
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
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss';
.home {
  position: relative;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // font-size: 64px;
  a {
    color: $--color-primary;
  }
}
</style>
