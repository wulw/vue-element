<template>
  <div class="login">
    <div class="content">
      <el-form ref="login" :model="login" :rules="rules">
        <el-form-item prop="name">
          <el-input v-model="login.name" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="login.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button style="width: 100%;" type="primary" @click="handleLogin">登录</el-button>
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
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback()
      }
    }
    return {
      login: {
        name: '',
        password: ''
      },
      rules: {
        // name: [
        //   { required: true, message: '请输入用户名', trigger: 'blur' }
        // ],
        // password: [
        //   { required: true, message: '请输入密码', trigger: 'blur' }
        // ]
        // 自定义校验规则
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
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
          console.log('submit')
          if (this.login.name === this.auth.name && this.login.password === this.auth.password) {
            this.$message.success('登录成功')
            this.$router.push({
              path: '/home'
            })
          } else {
            this.$message.error('用户名密码不正确')
          }
        } else {
          console.log('error submit')
          return false;
        }
      })
    }
  },
  created() {
    // const { name, password } = this.auth; // 对象的解构赋值
    // this.login.name = name;
    // this.login.password = password;
    // this.login = this.auth;
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
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  .content {
    width: 400px;
    // background-color: #fff;
    padding: 32px;
    border-radius: 4px;
    margin: 0 240px;
  }
}
</style>
