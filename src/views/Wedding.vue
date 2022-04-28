<template>
  <div class="wedding">
    <transition name="fade-transform">
      <el-carousel v-if="!showMask" key="1" :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </transition>
    <transition name="fade-transform">
      <div v-if="showMask" class="mask" key="2" @click="closeMask">
        我们结婚啦
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Wedding',

  data () {
    return {
      showMask: true
    }
  },
  methods: {
    closeMask () {
      this.showMask = false
    }
  }
}
</script>

<style lang="scss" scoped>
.wedding {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .el-carousel {
    height: 100%;
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
      text-align: center;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
  .mask {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cc0000;
    color: #fff;
    font-size: 32px;
  }
}
</style>
