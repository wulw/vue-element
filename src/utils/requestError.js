import { Notification } from "element-ui";

const codeMessage = {
  400: "客户端请求有语法错误",
  401: "请求需要用户的身份认证",
  403: "用户得到授权，但是访问是被禁止的",
  404: "服务器无法根据客户端的请求找到资源",
  410: "客户端请求的资源已经被删除",
  422: "当创建一个对象时，发生一个验证错误",
  500: "服务器发生错误，无法完成请求",
  502: "网关错误",
  503: "服务器过载或维护，暂时无法处理客户端的请求",
  504: "网关超时"
};

export default ({ response }) => {
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    Notification.error({
      title: `Status ${response.status}：${errorText}`
    });
  } else if (!response) {
    Notification.error({
      title: `您的网络发生异常，无法连接服务器`
    });
  }
};
