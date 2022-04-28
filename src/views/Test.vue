<template>
  <div class="test">
    <!-- <p>I love liuling.</p> -->
    <el-select v-model="value1" placeholder="请选择" size="small" clearable>
      <el-option value="" label="全部"></el-option>
      <el-option v-for="item in optionsData" :key="item.value" :value="item.value" :label="item.label"></el-option>
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
    <Dialog :url="url" :dialogVisible="dialogVisible" title="香槟小镇" @close="dialogVisible = false">
      <div slot="slot-test" v-if="false">
        Clicking here will to url: {{ url }}
        <p>插槽</p>
      </div>
    </Dialog>
    <!-- learn es6 -->
    <p>{{ computedExpress }}</p>
    <el-form :model="form" size="small">
      <el-form-item label="时间" prop="time">
        <el-date-picker v-model="form.time" format="MM-dd" placeholder="请选择"></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="block">
      <span class="demonstration">单选选择任意一级选项</span>
      <el-cascader
        v-model="list"
        :options="options1"
        :props="{ checkStrictly: true }"
        clearable></el-cascader>
    </div>
    <div class="size">卫宁健康</div>
    <el-button type="primary" size="small" @click="openDrawer">乾坤</el-button>
    <el-drawer
      title="乾坤测试"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <transition name="dialog-fade">
        <!-- <span>我来啦~~~</span> -->
        <div id="outpat-office"></div>
      </transition>
    </el-drawer>
    <ul>
      <li v-for="item in testList" :key="item">{{ item }}</li>
    </ul>
    <!-- <el-select
      v-model="value"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select> -->
  </div>
</template>

<script>
import api from '../api/api';
import request from '../utils/request';
import Arrowback from "../assets/icons/arrowback.svg";
import Dialog from '@/components/Dialog/index.vue'
import { loadMicroApp } from 'qiankun'

// 测试vue下变量
const TESTARR = [
  {
    name: 'w_lw',
    age: 28
  },
  {
    name: 'lywu6',
    age: 26
  }
]

export default {
  name: 'Test',

  props: {},
  components: {
    Dialog
  },
  data() {
    return {
      Arrowback,
      optionsData: [],
      options: [
        {
          label: 'test',
          value: 'test'
        }
      ],
      value: [],
      list: [],
      loading: false,
      states: ["Alabama", "Alaska", "Arizona",
      "Arkansas", "California", "Colorado",
      "Connecticut", "Delaware", "Florida",
      "Georgia", "Hawaii", "Idaho", "Illinois",
      "Indiana", "Iowa", "Kansas", "Kentucky",
      "Louisiana", "Maine", "Maryland",
      "Massachusetts", "Michigan", "Minnesota",
      "Mississippi", "Missouri", "Montana",
      "Nebraska", "Nevada", "New Hampshire",
      "New Jersey", "New Mexico", "New York",
      "North Carolina", "North Dakota", "Ohio",
      "Oklahoma", "Oregon", "Pennsylvania",
      "Rhode Island", "South Carolina",
      "South Dakota", "Tennessee", "Texas",
      "Utah", "Vermont", "Virginia",
      "Washington", "West Virginia", "Wisconsin",
      "Wyoming"],
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
      value1: '',
      products: [],
      dialogVisible: !true,
      url: '/profile',
      address: {
        provinceCodeDesc: '安徽省',
        cityCodeDesc: '合肥市',
        countyCodeDesc: '蜀山区',
        valueDesc: '三里庵街道'
      },
      form: {
        time: Date.now()
      },
      list: ['zhinan', 'shejiyuanze'],
      options1: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
      direction: 'rtl',
      drawer: false,
      testList: ['1', '2', '3']
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
    },
    computedOptions() {
      return this.optionsData
    }  
  },
  watch: {
    name(newVal, oldVal) {
      console.log('监听name：', newVal, oldVal)
    }
  },
  methods: {
    async getOptionsData() {
      // axios请求封装
      await request(api.getOptions, {

      }).then(response => {
        this.optionsData = response;
        console.log(this.optionsData)
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
      let filterArr = arr.filter(item => item.age === 27)
      console.log(filterArr)
    },
    openDrawer () {
      this.drawer = !this.drawer
      loadMicroApp({
        name: 'office',
        entry: '/web-outpatient-office/office',
        container: '#outpat-office',
      })
    },
    handleClose () {
      this.drawer = false
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    // 拷贝对象
    copyObject() {
      let obj = {
        name: 'w_lw',
        age: 26,
        address: {
          provinceCodeDess: '安徽省',
          countyCodeDesc: '合肥市'
        },
        say: function() {
          console.log('说中文')
        }
      }
      let objCopy = this.deepClone(obj)
      obj.address.provinceCodeDess = '江苏省'
      console.log(obj, objCopy)
      objCopy.say = function() {
        console.log('说英文')
      }
      objCopy.say()
      obj.say()
    },
     //origin表示待拷贝对象，target表示目标对象
    deepClone(origin, target) {
      var target = target || {}, //容错处理，防止用户不传target值
          toStr = Object.prototype.toString,
          arrAtr = "[object Array]";
      for (var prop in origin) {
        //遍历对象
        if (origin.hasOwnProperty(prop)) {
          //防止拿到原型链属性
          if (origin[prop] !== "null" && typeof origin[prop] == "object") {
            //判断是不是原始值
            target[prop] = toStr.call(origin[prop]) == arrAtr ? [] : {}; //建立相对应的数组或对象
            this.deepClone(origin[prop], target[prop]); //递归，为了拿到引用值里面还有引用值
          } else {
            target[prop] = origin[prop]; //是原始值，直接拷贝
          }
        }
      }
      return target;
    }
  },
  async created() {
    await this.getOptionsData();
    console.log(this.computedOptions)
    // console.log(this.testList)
    // this.testList = ['1', '2', '3']
    this.$set(this, 'testList', [0, 1, 2])
    console.log(this.testList)
    try {
      fetch('https://api.myjson.com/bins/74l63')
      .then(response => response.json())
      .then(json => {
        this.products = json.products
      })
    } catch(e) {
      console.log(`获取产品列表失败，${e}`)
    }

    // let a = [1, 2, 3, 4, 5]
    // for (let key in a) {
    //   console.log(key, a[key])
    // }
    this.test()
    this.copyObject()
    console.log(this, TESTARR)
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  destroyed() {
    // TESTARR.splice(0)
  }
}
</script>

<style lang="scss" scoped>
.test {
  background-color: #fff;
  height: calc(100vh - 88px);
  padding: 16px;
}
.size {
  font-size: 8px;
}
</style>

<style lang="scss">
.el-drawer__wrapper {
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
