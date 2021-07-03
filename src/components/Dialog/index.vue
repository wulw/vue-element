<template>
  <div class="dialog-wrapper">
    <el-dialog :title="title"
      :visible.sync="dialogVisible"
      :before-close="beforeClose">
      <slot></slot>
      <div class="el-footer">
        <el-button type="primary" size="small" @click="confirmModal">确 定</el-button>
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
      default: ''
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
