<template>
  <div class="header">
    <div class="login">
      <strong>IFLY DESIGN</strong>
    </div>
    <el-menu :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#ccc"
      active-text-color="#ffd04b">
      <el-menu-item index="1">数据预览</el-menu-item>
      <el-menu-item index="2">情报整编</el-menu-item>
      <el-menu-item index="3">情报管理</el-menu-item>
      <el-menu-item index="4">整编管理</el-menu-item>
      <el-menu-item index="5">智能问答</el-menu-item>
    </el-menu>
    <div class="user">
      <el-image
        style="width: 40px; height: 40px"
        :src="user.imgSrc"
        fit="fill"></el-image>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ user.name }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" style="width: 128px; text-align: center">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  props: {},
  components: {},
  data() {
    return {
      activeIndex: '1',
      user: {
        imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        name: 'admin'
      }
    }
  },
  methods: {
    handleSelect(val) {
      // this.$message.success(val);
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #545c64;
  white-space: nowrap;
  .login {
    margin: 0 24px;
    strong {
      font-size: 20px;
      color: #ccc;
    }
  }
  .el-menu {
    border-bottom: none;
  }
  .user {
    .el-image {
      border-radius: 50%;
      vertical-align: middle;
    }
    .el-dropdown {
      color: #ccc;
      padding: 0 24px;
      cursor: pointer;
    }
  }
}
</style>
