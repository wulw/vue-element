<template>
  <div class="login">
    <div class="content">
      <el-form ref="login" :model="login" :rules="rules" label-width="80px">
        <el-form-item label="用户名：" prop="name">
          <el-input v-model="login.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="login.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('login');

export default {
  name: 'Login',
  components: {},
  props: {},
  data() {
    return {
      login: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'auth'
    ])
  },
  methods: {
    ...mapMutations([
      'setAuth'
    ]),
    handleLogin() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: '用户名或密码出错',
            type: 'error'
          });
          return false;
        }
      })
    }
  },
  created() {
    // const { name, password } = this.auth; // 对象的解构赋值
    // this.login.name = name;
    // this.login.password = password;
    this.login = this.auth;
  },
  mounted() {
    // window.alert(this.auth);
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .content {
    width: 400px;
    background-color: #fff;
    padding: 38px 32px 16px 16px;
    border-radius: 4px;
  }
}
</style>
