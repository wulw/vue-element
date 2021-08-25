<template>
  <div class="dialog-wrapper">
    <el-dialog :title="title"
      :visible.sync="dialogVisible"
      :before-close="beforeClose">
      <slot></slot>
      <div class="el-footer">
        <el-button type="primary" size="small" @click="$parent.dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',

  props: {
    title: {
      type: String,
      default: '卫宁健康',
      required: true,
      validator: function (value) {
        if (value) {
          return ['卫宁健康', '香槟小镇'].includes(value)
        }
        return true
      }
    },
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    beforeClose (done) {
      this.$parent.dialogVisible = false
      // done()
    },
    confirmModal () {
      this.$emit('close', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-wrapper {
  .el-footer {
    text-align: right;
  }
}
</style>
