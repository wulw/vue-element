<template>
  <div class="view">
    <div class="top">
      <div class="left">
        <div class="title">
          <span>数据接入量</span>
          <div class="fn-button">
            <span v-for="(list, index) in dateList" :key="index" :class="{ active: index === dataAccessIndex }" @click="dataAccessClick(list.value, index)">{{ list.key }}</span>
          </div>
        </div>
        <div id="dataAccess" class="content" />
      </div>
      <div class="right">
        <div class="title">
          <span>关键词云图</span>
        </div>
        <div id="keywords" class="content" />
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="title">
          <span>分类统计</span>
          <div class="fn-button">
            <span v-for="(list, index) in categoryList" :key="index" :class="{ active: index === qaCategoryIndex }" @click="qaCategoryClick(list.value, index)">{{ list.key }}</span>
          </div>
        </div>
        <div id="QBCategory" class="content" />
      </div>
      <div class="right">
        <div class="title">
          <span>数据来源图</span>
        </div>
        <div id="dataSource" class="content" />
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
// var echarts = require('echarts')
require('echarts-wordcloud')

export default {
  name: 'DataView',
  components: {},

  props: {},
  data() {
    return {
      dateList: [
        {
          key: '按日',
          value: 'date'
        },
        {
          key: '按月',
          value: 'month'
        },
        {
          key: '按年',
          value: 'year'
        }
      ],
      categoryList: [
        {
          key: '按国家',
          value: 'country'
        },
        {
          key: '按地区',
          value: 'area'
        },
        {
          key: '按机构',
          value: 'organization'
        }
      ],
      dataAccessIndex: 0,
      qaCategoryIndex: 0,
      dataAccessChart: null,
      keywordsChart: null,
      qBCategoryChart: null,
      dataSourceChart: null
    }
  },
  created() {},
  mounted() {
    this.drawDataAccess()
    this.drawKeywords()
    this.drawQBCategory()
    this.drawDataSource()
    const _this = this
    window.onresize = function() {
      _this.dataAccessChart.resize()
      _this.keywordsChart.resize()
      _this.qBCategoryChart.resize()
      _this.dataSourceChart.resize()
    }
  },
  methods: {
    dataAccessClick(val, index) {
      console.log(val)
      this.dataAccessIndex = index
    },
    qaCategoryClick(val, index) {
      console.log(val)
      this.qaCategoryIndex = index
    },
    drawDataAccess() {
      this.dataAccessChart = echarts.init(document.getElementById('dataAccess'))

      this.dataAccessChart.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          name: '日期',
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          name: '数量（份）',
          type: 'value'
        },
        series: [{
          name: '数量',
          type: 'line',
          itemStyle: {
            color: '#3B98F2'
          },
          data: [25, 20, 36, 10, 40, 20]
        }]
      })
    },
    drawKeywords() {
      this.keywordsChart = echarts.init(document.getElementById('keywords'))

      this.keywordsChart.setOption({
        tooltip: {
          show: true
        },
        series: [{
          type: 'wordCloud',
          gridSize: 6,
          shape: 'diamond',
          sizeRange: [24, 56],
          width: 400,
          height: 250,
          textStyle: {
            normal: {
              color: function() {
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')'
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: [{
            name: ' 科大讯飞',
            value: 60
          },
          {
            name: ' 屏幕',
            value: 24
          },
          {
            name: ' A.I.',
            value: 21
          },
          {
            name: ' 可以',
            value: 19
          },
          {
            name: ' 发货',
            value: 18
          },
          {
            name: ' 这个',
            value: 18
          },
          {
            name: ' 什么',
            value: 17
          },
          {
            name: ' 一个',
            value: 12
          },
          {
            name: '智能',
            value: 10
          },
          {
            name: '中水三立',
            value: 12
          },
          {
            name: '皖西学院',
            value: 15
          },
          {
            name: '合肥',
            value: 19
          },
          {
            name: '桐城',
            value: 5
          }
          ]
        }]
      })
    },
    drawQBCategory() {
      this.qBCategoryChart = echarts.init(document.getElementById('QBCategory'))

      this.qBCategoryChart.setOption({
        title: {
          text: ''
        },
        tooltip: {},
        xAxis: {
          name: '日期',
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          name: '数量（份）'
        },
        series: [{
          name: '销量',
          type: 'bar',
          barWidth: 20,
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#000'
            }
          },
          itemStyle: {
            normal: {
              color: '#3B98F2'
            }
          },
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    drawDataSource() {
      this.dataSourceChart = echarts.init(document.getElementById('dataSource'))

      this.dataSourceChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          show: false
        },
        series: [
          {
            name: '来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            selectedMode: 'single',
            label: {
              normal: {
                show: true
                // position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                lineStyle: {
                  color: '#3B98F2'
                }
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  height: 100%;
  // background-color: #fff;
  // margin: 0 40px;
  .top,
  .bottom {
    display: flex;
    height: calc(50% - 8px);
    margin: 0 0 16px 0;
    .left,
    .right {
      background-color: #fff;
      box-shadow: 0 0 10px 0 rgba(18, 35, 62, 0.15);
      border-radius: 2px;
      .title {
        height: 48px;
        line-height: 48px;
        background: rgba(20,46,78,0.06);
        border-radius: 2px;
        > span {
          padding: 0 16px;
          border-left: 6px solid #3B98F2;
          font-size: 16px;
          color: rgba(0, 0, 0, .65);
          // opacity: 0.65;
          font-weight: bold;
        }
        .fn-button {
          float: right;
          height: 100%;
          margin-right: 16px;
          > span {
            display: inline-block;
            border-bottom: 2px solid transparent;
            margin: 0 8px;
            padding: 0 16px;
            height: 100%;
            cursor: pointer;
            &:hover,
            &.active {
              border-bottom-color: #3B98F2;
              color: #3B98F2;
              background-image: linear-gradient(-241deg, #3B98F2, #0CC7C9);
              -webkit-background-clip: text;
                      background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
      .content {
        height: calc(100% - 48px);
        width: 100%;
      }
    }
    .left {
      flex: 2;
      margin-right: 8px;
    }
    .right {
      flex: 1;
      margin-left: 8px;
    }
  }
}
</style>
