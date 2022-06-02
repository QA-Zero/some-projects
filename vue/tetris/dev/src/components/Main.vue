<template>
  <div class="app-wrapper" :style="css.wrapper">
    <GameField
      :cellSize="scale.cellSizeCurrent"
      :cellsCountHeight="cellsCountHeight"
      :cellsCountWidth="cellsCountWidth"
      :isGame="states.isGame"
      :isPause="states.isConfirmFinishPause || states.isUserPause"
      :currentFigure="figures.current.list"
      :fieldIndexes="fieldIndexes"
      :triggerMoveLeft="triggers.moveLeft"
      :triggerMoveRight="triggers.moveRight"
      :triggerRotate="triggers.rotate"
      :triggerAccelerate="triggers.accelerate"
      @increment-line="incrementLine"
      @get-new-figure="getNewFigure"
    />
    <ControlsPanel
      :controlPanelWidth="controlPanelWidth"
      :info="info"
      :scale="scale.scaleCurrent"
      :states="states"
      :nextImage="figures.next.image"
      @new-scale="newScale"
      @start="startGame"
      @open-finish-dialog="openFinishDialog"
      @pause="pauseGame"
      @continue="continueGame"
      @move-left="moveLeft"
      @move-right="moveRight"
      @rotate="rotate"
      @accelerate="accelerate"
    />
    <confirm-finish-dialog
      :dialogVisible="isDialogVisible"
      @confirm="closeFinishDialog(true)"
      @close="closeFinishDialog(false)"
    />
  </div>
</template>

<script>

import figures from '@/services/figure_generator'
import GameField from './GameField'
import ControlsPanel from './ControlsPanel'
import ConfirmFinishDialog from './ConfirmFinishDialog'

export default {
  name: 'Main',
  components: { GameField, ControlsPanel, ConfirmFinishDialog },
  data() {
    return {
      isDialogVisible: false,
      cellsCountHeight: 20,
      cellsCountWidth: 10,
      controlPanelWidth: 250,

      info: {
        current: {
          lines: 0,
          points: 0,
          level: 1,
        },
        increment: {
          lines: 0,
          points: 0,
          level: 0,
        },
        levelEveryLines: 10,
      },

      scale: {
        cellSizeDefault: 40,
        cellSizeCurrent: 40,
        scaleDefault: 3,
        scaleCurrent: 3,
        scaleStep: 5,
      },

      states: {
        isGame: false,
        isUserPause: false,
        isConfirmFinishPause: false,
      },

      triggers: {
        moveLeft: false,
        moveRight: false,
        rotate: false,
        accelerate: false,
      },

      images: {
        all: figures.map(figure => figure.image),
        current: '',
        next: '',
      },

      figures: {
        all: figures,
        current: {},
        next: {},
      },
    }
  },
  computed: {
    css() {
      return {
        wrapper: {
          'height': this.scale.cellSizeCurrent * this.cellsCountHeight + 6 + 'px',
          'width': this.scale.cellSizeCurrent * this.cellsCountWidth + 6 + this.controlPanelWidth + 'px',
        },
      }
    },

    fieldIndexes() {
      const field = []

      for (let rowNum = 0; rowNum < this.cellsCountHeight; rowNum++) {
        const row = []

        for (let columnNum = 0; columnNum < this.cellsCountWidth; columnNum++) {
          row.push(true)
        }

        field.push(row)
      }

      return field
    },
  },
  methods: {
    getRand(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min))
    },
    
    newScale(val) {
      this.scale.scaleCurrent = val
      this.scale.cellSizeCurrent = this.scale.cellSizeDefault + this.scale.scaleStep * (this.scale.scaleCurrent - this.scale.scaleDefault)
    },

    incrementLine(lines) {
      this.info.increment.lines = lines
      this.info.increment.points = Math.pow(lines, 2)

      this.info.current.lines += this.info.increment.lines
      this.info.current.points += this.info.increment.points

      setTimeout(
        () => {
          this.info.increment.lines = 0
          this.info.increment.points = 0
        },
        3000,
      )

      if (this.info.current.lines > this.info.current.level * this.info.levelEveryLines) this.incrementLvl()
    },
    incrementLvl() {
      this.info.increment.level = 1
      this.info.current.level += this.info.increment.level

      setTimeout(
        () => {
          this.info.increment.level = 0
        },
        3000,
      )
    },

    getFigureIndex() {
      return this.getRand(0, 6)
    },
    getStartFigures() {
      this.figures.current = this.figures.all[this.getFigureIndex()]
      this.figures.next = this.figures.all[this.getFigureIndex()]
    },
    getNewFigure() {
      this.figures.current = this.figures.next
      this.figures.next = this.figures.all[this.getFigureIndex()]
    },

    openFinishDialog() {
      this.states.isConfirmFinishPause = true
      this.isDialogVisible = true
    },
    closeFinishDialog(isFinish) {
      this.isDialogVisible = false

      if (isFinish) this.finishGame()
      else this.states.isConfirmFinishPause = false
    },

    startGame() {
      this.info.current.lines = 0
      this.info.current.points = 0
      this.info.current.level = 1
      this.states.isGame = true

      this.getStartFigures()
    },
    finishGame() {
      this.states.isGame = false
      this.states.isUserPause = false
      this.states.isConfirmFinishPause = false

      this.figures.current = {}
      this.figures.next = {}
    },
    pauseGame() {
      this.states.isUserPause = true
    },
    continueGame() {
      this.states.isUserPause = false
    },

    moveLeft() {
      this.triggers.moveLeft = !this.triggers.moveLeft
    },
    moveRight() {
      this.triggers.moveRight = !this.triggers.moveRight
    },
    rotate() {
      this.triggers.rotate = !this.triggers.rotate
    },
    accelerate() {
      this.triggers.accelerate = !this.triggers.accelerate
    },
  },
}
</script>


<style lang="scss">

.app-wrapper {
  border: 5px solid #a55;
  display: flex;
}
</style>
