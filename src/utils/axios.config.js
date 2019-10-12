/**
 * 文件作用：axios全局配置和拦截器
 * Created by lywu6 on 2019/09/17.
 */
import axios from 'axios'
import { Loading, Message } from 'element-ui'

function showError(msg, silent) {
  if (!silent) {
    Message.error({
      message: msg,
      showClose: true
    })
  }
}

// 设置axios全局超时
// axios.defaults.timeout = 6000;

// 设置定义对于给定的HTTP响应状态码是resolve或reject（promise）
axios.defaults.validateStatus = () => {
  // return status >= 200 && status < 300;  
  return true;
}

var Loadinginstance;
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  Loadinginstance = Loading.service({ fullscreen: true });
  
  return config;
}, error => {
  // 对请求错误做些什么
  Loadinginstance.close();
  showError('请求失败', error.config.silent);
  return Promise.reject(error);
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  // let { data, config } = response;  // 对象的解构赋值
  Loadinginstance.close();

  return response;
}, error => {
  Loadinginstance.close();
  // 对响应错误做点什么
  if (/network error/i.test(error.message)) {
    error.message = '网络错误，请检查网络连接或服务器配置'
  } else if (/timeout/i.test(error.message)) {
    error.message = '请求超时'
  } else {
    error.message = '未知错误：' + error.message
  }

  showError(error.message, error.config.silent);

  return Promise.reject(error);
})
