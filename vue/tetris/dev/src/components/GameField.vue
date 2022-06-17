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
      timeout: {
        type: Number,
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
          yTop: 0,
          xLeft: 0,
          idx: 0,
          cells: [],
        },
        finishedFigures: [],
      }
    },
    computed: {
      css() {
        return {
          figureInfo: {
            yTop: 1 + this.figureInfo.yTop * this.cellSize + 'px',
            xLeft: 1 + this.figureInfo.xLeft * this.cellSize + 'px',
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

      cellsBase() {
        const result = []
        const height = this.cellsCountHeight
        const width = this.cellsCountWidth

        for (let yTop = 0; yTop < height; yTop++) {
          result.push({
            yTop,
            xLeft: -1,
          })
          result.push({
            yTop,
            xLeft: width,
          })
        }
        for (let xLeft = 0; xLeft < width; xLeft++) {
          result.push({
            yTop: height,
            xLeft,
          })
        }

        return result
      },
    },
    methods: {
      updateYStart() {
        this.figureInfo.yTop = 0 - this.activeFigure.length
      },
      updateXStart() {
        this.figureInfo.xLeft = (
          this.activeFigure.length
            ? Math.floor((this.cellsCountWidth - this.activeFigure[0].length) / 2)
            : 0
        )
      },
      updateFigureCells() {
        this.figureInfo.cells = this.activeFigure.map(
          (row, rowIdx) => row.map((cell, cellIdx) => (
            cell.length
              ? {
                yTop: this.figureInfo.yTop + rowIdx,
                xLeft: this.figureInfo.xLeft + cellIdx,
              }
              : null
          )).filter(cell => cell)
        )
      },

      initFinishedFigures() {
        this.finishedFigures = this.cellsBase
      },

      tryMoveLeft() {
        const isActionPossible = (() => {
          const firstCellsInFigureRows = this.figureInfo.cells.map(row => row[0])
          const finishedCellsOnFigureLines = (
            this.finishedFigures
              .filter(cell1 => firstCellsInFigureRows.map(cell2 => cell2.yTop).includes(cell1.yTop))
              .filter(cell1 => cell1.xLeft < firstCellsInFigureRows.find(cell2 => cell2.yTop === cell1.yTop).xLeft)
          )

          return !(
            firstCellsInFigureRows
              .map(cell1 => ({
                currentMinXLeft: cell1.xLeft,
                finishedMaxXLeft: Math.max.apply(
                  Math,
                  finishedCellsOnFigureLines.filter(cell2 => cell2.yTop === cell1.yTop).map(cell3 => cell3.xLeft)
                ),
              }))
              .find(cell => cell.currentMinXLeft - 1 === cell.finishedMaxXLeft)
          )
        })()

        if (isActionPossible) {
          this.figureInfo.xLeft = this.figureInfo.xLeft - 1
          this.updateFigureCells()

          console.dir( this.figureInfo )
          console.log( '----------' )
        }
      },
      tryMoveRight() {
        const isActionPossible = (() => {
          const lastCellsInFigureRows = this.figureInfo.cells.map(row => row[row.length - 1])
          const finishedCellsOnFigureLines = (
            this.finishedFigures
              .filter(cell1 => lastCellsInFigureRows.map(cell2 => cell2.yTop).includes(cell1.yTop))
              .filter(cell1 => cell1.xLeft > lastCellsInFigureRows.find(cell2 => cell2.yTop === cell1.yTop).xLeft)
          )

          return !(
            lastCellsInFigureRows
              .map(cell1 => ({
                currentMaxXLeft: cell1.xLeft,
                finishedMinXLeft: Math.min.apply(
                  Math,
                  finishedCellsOnFigureLines.filter(cell2 => cell2.yTop === cell1.yTop).map(cell3 => cell3.xLeft)
                ),
              }))
              .find(cell => cell.currentMaxXLeft + 1 === cell.finishedMinXLeft)
          )
        })()

        if (isActionPossible) {
          this.figureInfo.xLeft = this.figureInfo.xLeft + 1
          this.updateFigureCells()

          console.dir( this.figureInfo )
          console.log( '----------' )
        }
      },
      tryAccelerate() {
        const isActionPossible = (() => {
          const lastCellsInFigureColumns = this.figureInfo.cells[this.figureInfo.cells.length - 1]
          const finishedCellsOnFigureColumns = (
            this.finishedFigures
              .filter(cell1 => lastCellsInFigureColumns.map(cell2 => cell2.xLeft).includes(cell1.xLeft))
              .filter(cell1 => cell1.yTop > lastCellsInFigureColumns.find(cell2 => cell2.xLeft === cell1.xLeft).yTop)
          )

          return !(
            lastCellsInFigureColumns
              .map(cell1 => ({
                currentMaxYTop: cell1.yTop,
                finishedMinYTop: Math.min.apply(
                  Math,
                  finishedCellsOnFigureColumns.filter(cell2 => cell2.xLeft === cell1.xLeft).map(cell3 => cell3.yTop)
                ),
              }))
              .find(cell => cell.currentMaxYTop + 1 === cell.finishedMinYTop)
          )
        })()

        if (isActionPossible) {
          console.log( 'Accelerate' )

          this.figureInfo.yTop = this.figureInfo.yTop + 1
          this.updateFigureCells()

          console.dir( this.figureInfo )
          console.log( '----------' )
        }
      },
      tryRotate() {
        if (this.currentFigure && this.currentFigure.length > 1) {
          const isActionPossible = (() => {
            return true
          })()

          if (isActionPossible) {
            this.figureInfo.idx = (
              this.figureInfo.idx === this.currentFigure.length - 1
                ? 0
                : this.figureInfo.idx + 1
            )
            this.updateFigureCells()

            console.dir( this.figureInfo )
            console.log( '----------' )
          }
        }
      },
    },
    watch: {
      isGame(val) {
        if (!val) this.figureInfo.idx = 0
      },

      currentFigure() {
        this.updateYStart()
        this.updateXStart()
        this.updateFigureCells()
        this.initFinishedFigures()
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
    top: v-bind('css.figureInfo.yTop');
    left: v-bind('css.figureInfo.xLeft');

    .row-figure {
      display: flex;
    }
  }
}
</style>
