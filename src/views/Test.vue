<template>
  <div class="test">
    <!-- <p>I love liuling.</p> -->
    <el-select v-model="value" placeholder="请选择" size="small" clearable>
      <el-option value="" label="全部"></el-option>
      <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
    </el-select>
    <el-input v-model="name" placeholder="请输入姓名"></el-input>
    <p>{{ name }}<p>
    <a href="https://www.baidu.com" title="【I love you】百度一下，你就知道">百度</a>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <input type="number" v-model.number="product.quantity"> {{ product.name }}
        <span v-if="product.quantity === 0">
          - OUT OF STOCK
        </span> 
        <button @click="product.quantity += 1">Add</button>
      </li>
    </ul>
    <h2>Total Inventory: {{ totalProducts }}</h2>
    <Icon :component="Arrowback" />
    <!-- 插槽 -->
    <blog-post title="这里是标题"><button-counter></button-counter>这里是内容</blog-post>
    <Dialog :url="url" :dialogVisible="dialogVisible" title="测试弹窗插槽" @close="dialogVisible = false">
      Clicking here will to url: {{ url }}
      <p>插槽</p>
    </Dialog>
    <!-- learn es6 -->
    <p>{{ computedExpress }}</p>
  </div>
</template>

<script>
import api from '../api/api';
import request from '../utils/request';
import Arrowback from "../assets/icons/arrowback.svg";
import Dialog from '@/components/Dialog/index.vue'

export default {
  name: 'Test',

  props: {},
  components: {
    Dialog
  },
  data() {
    return {
      Arrowback,
      options: [],
      // options: [{
      //   value: '选项1',
      //   label: '黄金糕'
      // }, {
      //   value: '选项2',
      //   label: '双皮奶'
      // }, {
      //   value: '选项3',
      //   label: '蚵仔煎'
      // }, {
      //   value: '选项4',
      //   label: '龙须面'
      // }, {
      //   value: '选项5',
      //   label: '北京烤鸭'
      // }],
      name: 'w_lw',
      value: '',
      products: [],
      dialogVisible: true,
      url: '/profile',
      address: {
        provinceCodeDesc: '安徽省',
        cityCodeDesc: '合肥市',
        countyCodeDesc: '蜀山区',
        valueDesc: '三里庵街道'
      }
    }
  },
  computed: {
    totalProducts() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity
      }, 0)
    },
    computedExpress() {
      let { provinceCodeDesc, cityCodeDesc, countyCodeDesc, valueDesc } = this.address
      return `${provinceCodeDesc ? provinceCodeDesc : ''}${cityCodeDesc ? '/' + cityCodeDesc : ''}${countyCodeDesc ? '/' + countyCodeDesc : ''}${valueDesc ?  '/' + valueDesc : ''}`
    }  
  },
  watch: {
    name(newVal, oldVal) {
      console.log('监听name：', newVal, oldVal)
    }
  },
  methods: {
    getOptions() {
      // axios请求封装
      request(api.getOptions, {

      }).then(response => {
        this.options = response;
        console.log(this.options)
      }).catch(error => {
        this.$message.error(error);
      })

      // axios({
      //   method: 'get',
      //   url: '/utils/options.json',
      //   params,
      //   // headers: {
      //   //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      //   // }
      // }).then(response => {
      //   let data = response.data;
      //   this.options = data;
      // }).catch(error => {
      //   Message.error(error);
      // })
    },
    test() {
      let arr = [
        {
          name: 'lywu6',
          age: 26
        },
        {
          name: 'w_lw',
          age: 25
        }
      ]
      console.log(arr)
      let index = arr.findIndex(item => item.age === 25)
      console.log(index)
    }
  },
  created() {
    this.getOptions();

    try {
      fetch('https://api.myjson.com/bins/74l63')
      .then(response => response.json())
      .then(json => {
        this.products = json.products
      })
    } catch(e) {
      console.log(e)
    }

    // let a = [1, 2, 3, 4, 5]
    // for (let key in a) {
    //   console.log(key, a[key])
    // }
    this.test()
  }
}
</script>

<style lang="scss" scoped>
.test {
  background-color: #fff;
  height: calc(100vh - 88px);
  padding: 16px;
}
</style>
