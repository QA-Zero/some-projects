<template>
  <div class="app-wrapper" :style="cssWrapper">
    <GameField
      :cssVars="cssGamePanel"
      :isGame="states.isGame"
      :isPause="states.isConfirmFinishPause || states.isUserPause"
      :currentFigure="figures.current"
      :fieldIndexes="fieldIndexes"
    />
    <ControlsPanel
      :cssVars="cssControlPanel"
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

import GameField from './GameField'
import ControlsPanel from './ControlsPanel'
import ConfirmFinishDialog from './ConfirmFinishDialog'
import AngleLeft from "@/assets/icons/png/angle-left.png"
import AngleRight from "@/assets/icons/png/angle-right.png"
import Line from "@/assets/icons/png/line.png"
import Pyramid from "@/assets/icons/png/pyramid.png"
import Square from "@/assets/icons/png/square.png"
import StepsLeft from "@/assets/icons/png/steps-left.png"
import StepsRight from "@/assets/icons/png/steps-right.png"

export default {
  name: 'Main',
  components: { GameField, ControlsPanel, ConfirmFinishDialog },
  data() {
    return {
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
      figures: {
        all: [
          {
            image: AngleLeft,
          },
          {
            image: AngleRight,
          },
          {
            image: Line,
          },
          {
            image: Pyramid,
          },
          {
            image: Square,
          },
          {
            image: StepsLeft,
          },
          {
            image: StepsRight,
          },
        ],
        current: {},
        next: {},
      },

      images: {
        all: [
          AngleLeft,
          AngleRight,
          Line,
          Pyramid,
          Square,
          StepsLeft,
          StepsRight,
        ],
        current: '',
        next: '',
      },
      isDialogVisible: false,
      cellsCountHeight: 20,
      cellsCountWidth: 10,
      rightPanelWidth: 250,
    }
  },
  computed: {
    cssWrapper() {
      return {
        'height': this.scale.cellSizeCurrent * this.cellsCountHeight + 6 + 'px',
        'width': this.scale.cellSizeCurrent * this.cellsCountWidth + 6 + this.rightPanelWidth + 'px',
      }
    },

    cssGamePanel() {
      return {
        cssPanel: {
          'height': this.scale.cellSizeCurrent * this.cellsCountHeight + 6 + 'px',
          'width': this.scale.cellSizeCurrent * this.cellsCountWidth + 6 + 'px',
        },
        cssRow: {
          'height': this.scale.cellSizeCurrent + 'px',
          'width': this.scale.cellSizeCurrent * this.cellsCountWidth + 6 + 'px',
        },
        cssField: {
          'height': this.scale.cellSizeCurrent + 'px',
          'width': this.scale.cellSizeCurrent + 'px',
        },
      }
    },

    cssControlPanel() {
      return {
        'width': this.rightPanelWidth + 'px',
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
    newScale(val) {
      this.scale.scaleCurrent = val
      this.scale.cellSizeCurrent = this.scale.cellSizeDefault + this.scale.scaleStep * (this.scale.scaleCurrent - this.scale.scaleDefault)
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

      this.getFigure()
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
      console.log( 'Move Left' )
    },
    moveRight() {
      console.log( 'Move Right' )
    },
    rotate() {
      console.log( 'Rotate' )

      this.incrementLinesAndPoints(3)
      this.incrementLvl()
    },
    accelerate() {
      console.log( 'Accelerate' )
    },

    incrementLinesAndPoints(lines) {
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

    getFigure() {
      const getRand = (min, max) => {
        return Math.floor(min + Math.random() * (max + 1 - min))
      }

      this.figures.current = this.figures.all[getRand(0, 6)]
      this.figures.next = this.figures.all[getRand(0, 6)]
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
