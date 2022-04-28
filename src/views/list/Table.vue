<template>
  <div class="table">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      max-height="242px"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="日期"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div class="fn-button">
      <el-button type="primary" size="small" @click="handleExport">导出</el-button>
      <el-button size="small" @click="handleDelete">删除</el-button>
    </div>
    <button-counter></button-counter>
  </div>
</template>

<script>
export default {
  name: 'Table',

  components: {},
  props: {},
  data() {
    return {
      tableData: [],
      multipleSelection: []
    }
  },
  computed: {
    tableData1() {
      return this.tableDataList
    }
  },
  created() {
    let _this = this
    setTimeout(() => {
      _this.tableData = [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }, 2000)
  },
  methods: {
    handleSelectionChange(val) {
      // eslint-disable-next-line
      console.log(val);
      this.multipleSelection = val;
    },
    handleExport() {
    },
    handleDelete() {
      if (this.multipleSelection.length === 0) {
        this.$message('请先选择')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  height: 100%;
  .fn-button {
    padding: 16px;
    background-color: #fff;
  }
}
</style>
