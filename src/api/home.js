import axios from 'axios'

export default {
  getOptions(params) {
    return axios({
      method: 'get',
      url: '/utils/options.json',
      params
    })
  }
}
