import axios from "axios";
require("promise.prototype.finally").shim();
import requestError from "./requestError";

axios.defaults.baseURL = window.config.publicPath;

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    requestError(error);
    return Promise.reject(error);
  }
);

export default (request, data) => {
  return new Promise((resolve, reject) => {
    let method = request.method || "get",
      params =
        ["get", "delete", "head"].indexOf(method) > -1
          ? {
              params: data
            }
          : {
              data
            };
    axios({
      ...request,
      ...params
    }).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
};
