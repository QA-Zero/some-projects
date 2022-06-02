<template>
  <div class="game-field" :style="css.field">
    <div class="field-wrapper">
      <div
        v-for="(row, rowIndex) in fieldIndexes"
        :key="rowIndex + 1"
        :class="['row-field', `${rowIndex + 1}`]"
        :style="css.row"
      >
        <div
          v-for="(cell, columnIndex) in row"
          :key="(rowIndex + 1) + '_' + (columnIndex + 1)"
          :class="['cell-field', `${(rowIndex + 1) + '_' + (columnIndex + 1)}`]"
          :style="css.cellSize"
        />
      </div>
    </div>
    <div class="figure-wrapper">
      <div
        v-for="(row, rowIndex) in activeFigure"
        :key="rowIndex + 1"
        :class="['row-figure', `${rowIndex + 1}`]"
      >
        <template
          v-for="(cell, columnIndex) in row"
          :key="(rowIndex + 1) + '_' + (columnIndex + 1)"
        >
          <Cell
            :cellSize="cellSize"
            :cell="cell"
            :rowIndex="rowIndex"
            :columnIndex="columnIndex"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Cell from './Cell'

  export default {
    name: 'GameField',
    components: { Cell },
    emits: [
      'increment-line',
      'get-new-figure',
    ],
    props: {
      cellSize: {
        type: Number,
        required: true,
      },
      cellsCountHeight: {
        type: Number,
        required: true,
      },
      cellsCountWidth: {
        type: Number,
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
        type: Array,
        required: false,
      },
      fieldIndexes: {
        type: Array,
        required: true,
      },
      triggerMoveLeft: {
        type: Boolean,
        required: true,
      },
      triggerMoveRight: {
        type: Boolean,
        required: true,
      },
      triggerRotate: {
        type: Boolean,
        required: true,
      },
      triggerAccelerate: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        figureInfo: {
          yBottom: 0,
          xLeft: 0,
          xRight: 0,
          idx: 0,
        },
      }
    },
    computed: {
      css() {
        return {
          figureInfo: {
            yBottom: this.figureInfo.yBottom + 'px',
            xLeft: this.figureInfo.xLeft + 'px',
            xRight: this.figureInfo.xRight + 'px',
          },
          cellSize: {
            'height': this.cellSize + 'px',
            'width': this.cellSize + 'px',
          },
          field: {
            'height': this.cellSize * this.cellsCountHeight + 6 + 'px',
            'width': this.cellSize * this.cellsCountWidth + 6 + 'px',
          },
          row: {
            'height': this.cellSize + 'px',
            'width': this.cellSize * this.cellsCountWidth + 2 + 'px',
          },
        }
      },

      activeFigure() {
        return this.currentFigure ? this.currentFigure[this.figureInfo.idx] : []
      },
    },
    methods: {
      updateYStart() {
        this.figureInfo.yBottom = (
          this.activeFigure.length
            ? 1 - this.activeFigure.length * this.cellSize
            : 0
        )
      },
      updateXStart() {
        this.figureInfo.xLeft = (
          this.activeFigure.length
            ? 1 + Math.floor((this.cellsCountWidth - this.activeFigure[0].length) / 2) * this.cellSize
            : 0
        )
      },

      tryMoveLeft() {
        const isActionPossible = () => {
          return true
        }

        if (isActionPossible) {
          this.figureInfo.xLeft = this.figureInfo.xLeft - this.cellSize
          this.figureInfo.xRight = this.figureInfo.xRight - this.cellSize
        }
      },
      tryMoveRight() {
        const isActionPossible = () => {
          return true
        }

        if (isActionPossible) {
          this.figureInfo.xLeft = this.figureInfo.xLeft + this.cellSize
          this.figureInfo.xRight = this.figureInfo.xRight + this.cellSize
        }
      },
      tryRotate() {
        if (this.currentFigure.length > 1) {
          const isActionPossible = () => {
            return true
          }

          if (isActionPossible) {
            this.figureInfo.idx = (
              this.figureInfo.idx === this.currentFigure.length - 1
                ? 0
                : this.figureInfo.idx + 1
            )
          }
        }
      },
      tryAccelerate() {
        const isActionPossible = () => {
          return true
        }

        if (isActionPossible) console.log( 'Accelerate' )
      },
    },
    watch: {
      currentFigure() {
        this.updateYStart()
        this.updateXStart()
      },
      cellSize() {
        this.updateYStart()
        this.updateXStart()
      },


      triggerMoveLeft() {
        this.tryMoveLeft()
      },
      triggerMoveRight() {
        this.tryMoveRight()
      },
      triggerRotate() {
        this.tryRotate()
      },
      triggerAccelerate() {
        this.tryAccelerate()
      },
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
  position: relative;

  .field-wrapper {


    .row-field {
      display: flex;

      .cell-field {
        background-color: #00f;
        border: 1px solid #ccc;
        box-sizing: border-box;
      }
    }
  }

  .figure-wrapper {
    position: absolute;
    top: v-bind('css.figureInfo.yBottom');
    left: v-bind('css.figureInfo.xLeft');

    .row-figure {
      display: flex;
    }
  }
}
</style>
