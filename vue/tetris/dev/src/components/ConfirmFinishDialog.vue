<template>
  <el-dialog
    v-model="dialogVisible"
    :close-on-click-modal="false"
    :title="`${$t('confirm_finish_dialog.precisely_finish')}?`"
    custom-class="confirm-finish-dialog"
    @close="$emit('close')"
  >
    <template #footer>
      <el-button
        type="primary"
        class="btn btn-no"
        @click="$emit('close')"
      >{{ $t('confirm_finish_dialog.return') }}</el-button>
      <el-button
        type="danger"
        class="btn btn-yes"
        @click="$emit('confirm')"
      >{{ $t('confirm_finish_dialog.finish') }}</el-button>
    </template>
  </el-dialog>
</template>


<script>

export default {
  name: 'PauseDialog',
  emits: ['confirm', 'close'],
  props: {
    dialogVisible: {
      type: Boolean,
      required: true,
    },
  },
}
</script>


<style lang="scss">

.confirm-finish-dialog {
  width: 500px !important;
  padding: 19px 21px;
  display: flex;
  flex-direction: column;

  .el-dialog__header {
    padding: 0;
  }

  .el-dialog__body {
    display: none;
  }

  .el-dialog__footer {
    height: 40px;
    width: 100%;
    margin-top: 40px;
    padding: 0;
    display: flex;
    justify-content: space-between;

    .btn {
      height: 100%;
      width: 200px;
    }
  }
}
</style>
