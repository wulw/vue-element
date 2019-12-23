<template>
  <div class="test">
    <!-- <p>I love liuling.</p> -->
    <el-select v-model="value" placeholder="请选择" clearable>
      <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
    </el-select>
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
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'Test',

  props: {},
  components: {},
  data() {
    return {
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
      value: '',
      products: []
    }
  },
  computed: {
    totalProducts() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity
      }, 0)
    }  
  },
  methods: {
    getOptions(params) {
      
      api.home.getOptions(params).then(response => {
        this.options = response.data;
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
    }
  },
  created() {
    this.getOptions();
    fetch('https://api.myjson.com/bins/74l63')
    .then(response => response.json())
    .then(json => {
      this.products = json.products
    })
  }
}
</script>

<style lang="scss" scoped>
.test {

}
</style>
