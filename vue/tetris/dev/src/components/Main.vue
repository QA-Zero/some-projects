<template>
  <div class="app-wrapper" :style="css.wrapper">
    <GameField
      :cellSize="scale.cellSizeCurrent"
      :cellsCountHeight="base.cellsCountHeight"
      :cellsCountWidth="base.cellsCountWidth"
      :isGame="states.isGame"
      :isPause="states.isConfirmFinishPause || states.isUserPause"
      :currentFigure="figures.current.list"
      :fieldIndexes="fieldIndexes"
      :timeout="timeout"
      :triggerMoveLeft="triggers.moveLeft"
      :triggerMoveRight="triggers.moveRight"
      :triggerRotate="triggers.rotate"
      :triggerAccelerate="triggers.accelerate"
      @increment-line="incrementLine"
      @get-new-figure="getNewFigure"
    />
    <ControlsPanel
      :controlPanelWidth="base.controlPanelWidth"
      :displayInfo="displayInfo"
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
      :dialogVisible="base.isDialogVisible"
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
      base: {
        isDialogVisible: false,
        cellsCountHeight: 20,
        cellsCountWidth: 10,
        controlPanelWidth: 250,
        levelEveryLines: 10,
        timeoutBase: 1000,
        timeoutPercentDecrement: 15,
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
      scale: {
        cellSizeDefault: 40,
        cellSizeCurrent: 40,
        scaleDefault: 3,
        scaleCurrent: 3,
        scaleStep: 5,
      },
      displayInfo: {
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
          'height': this.scale.cellSizeCurrent * this.base.cellsCountHeight + 6 + 'px',
          'width': this.scale.cellSizeCurrent * this.base.cellsCountWidth + 6 + this.base.controlPanelWidth + 'px',
        },
      }
    },

    fieldIndexes() {
      const field = []

      for (let rowNum = 0; rowNum < this.base.cellsCountHeight; rowNum++) {
        const row = []

        for (let columnNum = 0; columnNum < this.base.cellsCountWidth; columnNum++) {
          row.push(true)
        }

        field.push(row)
      }

      return field
    },

    timeout() {
      return Math.ceil(this.base.timeoutBase * Math.pow(1 - this.base.timeoutPercentDecrement / 100, this.displayInfo.current.level))
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
      this.displayInfo.increment.lines = lines
      this.displayInfo.increment.points = Math.pow(lines, 2)

      this.displayInfo.current.lines += this.displayInfo.increment.lines
      this.displayInfo.current.points += this.displayInfo.increment.points

      setTimeout(
        () => {
          this.displayInfo.increment.lines = 0
          this.displayInfo.increment.points = 0
        },
        3000,
      )

      if (this.displayInfo.current.lines > this.displayInfo.current.level * this.base.levelEveryLines) this.incrementLvl()
    },
    incrementLvl() {
      this.displayInfo.increment.level = 1
      this.displayInfo.current.level += this.displayInfo.increment.level

      setTimeout(
        () => {
          this.displayInfo.increment.level = 0
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
      this.base.isDialogVisible = true
    },
    closeFinishDialog(isFinish) {
      this.base.isDialogVisible = false

      if (isFinish) this.finishGame()
      else this.states.isConfirmFinishPause = false
    },

    startGame() {
      this.displayInfo.current.lines = 0
      this.displayInfo.current.points = 0
      this.displayInfo.current.level = 1
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
