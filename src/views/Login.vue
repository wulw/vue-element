<template>
  <div class="login">
    <div class="content">
      <div class="title">
        {{ title }}
      </div>
      <el-form ref="login" :model="login" :rules="rules">
        <el-form-item prop="name">
          <el-input v-model="login.name" prefix-icon="el-icon-user" placeholder="请输入用户名" @keyup.enter.native="$refs.psd.focus()"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input ref="psd" type="password" v-model="login.password" prefix-icon="el-icon-lock" placeholder="请输入密码" @keyup.enter.native="() => { $refs.psd.blur(); $refs.submit.$el.focus() }"></el-input>
        </el-form-item>
        <el-button ref="submit" style="width: 100%;" type="primary" @click="handleLogin">登录</el-button>
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
      title: window.config.systemName,
      login: {
        name: 'lywu6',
        password: '123456'
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
      'user'
    ])
  },
  methods: {
    ...mapMutations([
      'setUser'
    ]),
    handleLogin() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          console.log('submit')
          if (this.login.name === this.user.name && this.login.password === this.user.password) {
            this.$message.success('登录成功')
            this.setUser({
              id: '001',
              name: this.login.name,
              password: this.login.password
            });
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
  background-color: rgba(0, 0, 0, .5);
  .content {
    .title {
      text-align: center;
      font-size: 32px;
      margin-bottom: 16px;
      color: #eee;
    }
    width: 360px;
    border-radius: 4px;
    margin: 0 120px;
  }
}
</style>
