<template>
  <div class="not-found">
    <div class="tips">
      <div class="title">服务器无法根据客户端的请求找到资源</div>
      <el-button type="primary" @click="() => $router.push('/')">
        <Icon :component="Arrowback" />
        返回首页
      </el-button>
    </div>
    <img :src="bk" />
  </div>
</template>

<script>
import Arrowback from "../assets/icons/arrowback.svg"

export default {
  data() {
    return {
      bk: require("../assets/images/404.png"),
      Arrowback
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/element-variables.scss";
.not-found {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 40%;
  }
  .tips {
    text-align: center;
    margin-right: 32px;
    .title {
      font-weight: bold;
      font-size: 16px;
      color: $--color-text-primary;
      margin: 32px 0;
    }
    .uxicon {
      path {
        fill: inherit !important;
      }
    }
  }
}
</style>
