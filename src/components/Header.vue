<template>
  <div class="header">
    <div class="login">
      <strong>IFLYTEK DESIGN</strong>
    </div>
    <el-menu :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#ccc"
      active-text-color="#ffd04b">
      <el-menu-item index="1" route="/data/view">ECHARTS</el-menu-item>
      <el-menu-item index="2" route="/home/test">DEMO</el-menu-item>
      <el-menu-item index="3" route="/list/table">TABLE</el-menu-item>
    </el-menu>
    <div class="user">
      <el-image
        style="width: 40px; height: 40px"
        :src="user.imgSrc"
        fit="fill"></el-image>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ user.name }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" style="width: 128px; text-align: center">
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>  
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('login');

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
    ...mapMutations([
      'setUser'
    ]),
    handleSelect(val) {
      // this.$message.success(val);
    },
    handleCommand(command) {
      console.log(command);
      if (command === 'logout') {
        this.$confirm('是否确认退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功'
          });
          this.setUser({
            id: ''
          })
          this.$router.push({
            path: '/login'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });          
        });
      }
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
