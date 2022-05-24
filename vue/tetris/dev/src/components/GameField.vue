<template>
  <div class="game-field" :style="cssVars.cssPanel">
    <div
      v-for="(row, rowIndex) in fieldIndexes"
      :key="rowIndex + 1"
      :class="['row', `${rowIndex + 1}`]"
      :style="cssVars.cssRow"
    >
      <div
        v-for="(cell, columnIndex) in row"
        :key="(rowIndex + 1) + '_' + (columnIndex + 1)"
        :class="['cell', `${(rowIndex + 1) + '_' + (columnIndex + 1)}`]"
        :style="cssVars.cssField"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameField',
    props: {
      cssVars: {
        type: Object,
        required: true,
      },
      isGame: {
        type: Boolean,
        required: true,
      },
      isPause: {
        type: Boolean,
        required: true,
      },
      currentFigure: {
        type: Object,
        required: false,
      },
      fieldIndexes: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {

      }
    },
  }
</script>


<style lang="scss">

.game-field {
  height: 100%;
  border: 2px solid #00f;
  padding: 1px;
  background-color: #ccc;
  box-sizing: border-box;

  .row {
    display: flex;

    .cell {
      background-color: #00f;
      overflow: hidden;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    //.cell:first-of-type {
    //  border-left-width: 2px;
    //}
    //.cell:last-of-type {
    //  border-right-width: 2px;
    //}
    //
    //&:first-of-type {
    //  .cell {
    //    border-top-width: 2px;
    //  }
    //}
    //&:last-of-type {
    //  .cell {
    //    border-bottom-width: 2px;
    //  }
    //}
  }
}
</style>
