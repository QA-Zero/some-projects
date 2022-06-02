<template>
  <div
      v-if="cell.length"
      :class="[
        'cell-figure bg',
        `${(rowIndex + 1) + '_' + (columnIndex + 1)}`,
        cell.find(val => val === 'top') ? 'not-top' : '',
        cell.find(val => val === 'right') ? 'not-right' : '',
        cell.find(val => val === 'bottom') ? 'not-bottom' : '',
        cell.find(val => val === 'left') ? 'not-left' : '',
      ]"
      :style="css.cellSize"
  >
    <div v-if="cell.find(val => val === 'top-left')" class="border-emulate top-left" />
    <div v-if="cell.find(val => val === 'top-right')" class="border-emulate top-right" />
    <div v-if="cell.find(val => val === 'bottom-left')" class="border-emulate bottom-left" />
    <div v-if="cell.find(val => val === 'bottom-right')" class="border-emulate bottom-right" />
  </div>
  <div
    v-else
    :class="['cell-figure', `${(rowIndex + 1) + '_' + (columnIndex + 1)}`]"
    :style="css.cellSize"
  />
</template>


<script>

export default {
  name: 'Cell',
  props: {
    cellSize: {
      type: Number,
      required: true,
    },
    cell: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    css() {
      return {
        cellSize: {
          'height': this.cellSize + 'px',
          'width': this.cellSize + 'px',
        },
      }
    },
  },
}
</script>


<style lang="scss">

.cell-figure {
  &.bg {
    background-color: #cc3;
    border: 2px solid #880;
    box-sizing: border-box;
    position: relative;

    &.not-top {
      border-top: none;
    }
    &.not-right {
      border-right: none;
    }
    &.not-bottom {
      border-bottom: none;
    }
    &.not-left {
      border-left: none;
    }

    .border-emulate {
      height: 2px;
      width: 2px;
      background-color: #880;
      position: absolute;
    }
    .top-left {
      top: 0;
      left: 0;
    }
    .top-right {
      top: 0;
      right: 0;
    }
    .bottom-right {
      bottom: 0;
      right: 0;
    }
    .bottom-left {
      bottom: 0;
      left: 0;
    }
  }
}
</style>
