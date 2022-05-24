<template>
  <div class="controls-panel" :style="cssVars">
    <div class="options">
      <el-select
        v-model="lang.current"
        class="lang"
        popper-class="lang_popper"
        @change="changeLang"
      >
        <el-option
          v-for="item in lang.all"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <div class="scale">
        <el-slider
          v-model="scale"
          :min="1"
          :max="5"
          :step="1"
          show-stops
          @input="val => $emit('new-scale', val)"
        />
      </div>
    </div>

    <div class="next-figure">
      <img :src="nextImage"/>
    </div>

    <div class="progress-info">
      <div class="labels-and-values">
        <div class="labels">
          <div class="info-row lines">{{ $t('control_panel.lines') }}:</div>
          <div class="info-row points">{{ $t('control_panel.points') }}:</div>
          <div class="info-row level">{{ $t('control_panel.level') }}:</div>
        </div>
        <div class="values">
          <div class="info-row lines">{{ info.current.lines }}</div>
          <div class="info-row points">{{ info.current.points }}</div>
          <div class="info-row level">{{ info.current.level }}</div>
        </div>
      </div>
      <div class="increments">
        <div v-if="info.increment.lines" class="info-row lines">+{{ info.increment.lines }}</div>
        <div v-if="info.increment.points" class="info-row points">+{{ info.increment.points }}</div>
        <div v-if="info.increment.level" class="info-row level">+{{ info.increment.level }}</div>
      </div>
    </div>
    <div class="buttons">
      <template v-if="states.isGame">
        <template v-if="states.isUserPause">
          <el-button
            type="primary"
            class="continue"
            @click="$emit('continue')"
          >{{ $t('control_panel.continue') }}</el-button>
        </template>
        <template v-else>
          <el-button
            type="primary"
            class="pause"
            @click="$emit('pause')"
          >{{ $t('control_panel.pause') }}</el-button>
        </template>
        <el-button
          type="primary"
          class="finish"
          @click="$emit('open-finish-dialog')"
        >{{ $t('control_panel.finish') }}</el-button>
      </template>
      <template v-else>
        <el-button
          type="primary"
          class="start"
          @click="$emit('start')"
        >{{ $t('control_panel.start') }}</el-button>
      </template>
    </div>
    <div class="controls-info">
      <template v-if="states.isGame && !states.isUserPause">
        <div class="labels">
          <div class="info-row left">{{ $t('control_panel.left') }}:</div>
          <div class="info-row right">{{ $t('control_panel.right') }}:</div>
          <div class="info-row bottom">{{ $t('control_panel.bottom') }}:</div>
          <div class="info-row top">{{ $t('control_panel.rotate') }}:</div>
        </div>
        <div class="values">
          <div class="info-row left">«{{ $t('control_panel.arrow_left') }}»:</div>
          <div class="info-row right">«{{ $t('control_panel.arrow_right') }}»</div>
          <div class="info-row bottom">«{{ $t('control_panel.arrow_bottom') }}»</div>
          <div class="info-row top">«{{ $t('control_panel.arrow_top') }}»</div>
        </div>
      </template>
    </div>
  </div>
</template>


<script>

export default {
  name: 'ControlsPanel',
  emits: [
    'new-scale',
    'start',
    'open-finish-dialog',
    'pause',
    'continue',
    'move-left',
    'move-right',
    'rotate',
    'accelerate',
  ],
  props: {
    cssVars: {
      type: Object,
      required: true,
    },
    info: {
      type: Object,
      required: true,
    },
    scale: {
      type: Number,
      required: true,
    },
    states: {
      type: Object,
      required: true,
    },
    nextImage: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      lang: {
        current: '',
        all: [
          {
            value: 'en',
            label: 'En',
          },
          {
            value: 'ua',
            label: 'Укр',
          },
          {
            value: 'ru',
            label: 'Ру',
          },
        ],
      },

    }
  },
  methods: {
    changeLang(val) {
      console.log( val )
      this.$locale.change(val)
    },
  },
  created() {
    this.lang.current = this.$locale.current()

    window.addEventListener(
      'keydown',
      ({ code }) => {
        switch (code) {
          case 'ArrowLeft': {
            this.$emit('move-left')
            break
          }
          case 'ArrowRight': {
            this.$emit('move-right')
            break
          }
          case 'ArrowUp': {
            this.$emit('rotate')
            break
          }
          case 'ArrowDown': {
            this.$emit('accelerate')
            break
          }

          default: break
        }
      });
  },
}
</script>


<style lang="scss">

.controls-panel {
  height: 100%;
  width: 200px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .options {
    height: 100px;
    width: 100%;
    background-color: #088;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .lang {
      .select-trigger {
        .el-input {
          .el-input__wrapper {
            .el-input__inner {
              width: 156px;
            }
          }
        }
      }
    }

    .scale {
      width: 200px;
    }
  }

  .next-figure {
    height: 200px;
    width: 100%;
    background-color: #088;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 175px;
    }
  }

  .info-row {
    width: 100%;
    display: flex;

    .label {
      float: left;
      color: #f00;
    }
    .value {
      color: #fff;
    }
  }

  .progress-info {
    height: 80px;
    width: 100%;
    background-color: #088;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .labels,
    .values,
    .increments {
      color: #fff;
      display: flex;
      flex-direction: column;
    }

    .labels-and-values {
      width: 60%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .labels,
      .values {
        .info-row {
          margin-top: 8px;
        }

        .info-row:first-of-type {
          margin-top: 0;
        }
      }

      .labels {
        .info-row {
          justify-content: flex-end;
        }
      }

      .values {
        margin-left: 10px;

        .info-row {
          justify-content: flex-start;
        }
      }
    }

    .increments {
      margin-left: 15px;

      .info-row {
        margin-top: 3px;
        font-size: 18px;
        color: #0f0;
        justify-content: flex-start;
      }

      .info-row:first-of-type {
        margin-top: 2px;
      }
    }
  }

  .buttons {
    height: 50px;
    width: 100%;
    background-color: #088;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .controls-info {
    height: 110px;
    width: 100%;
    background-color: #088;
    display: flex;
    justify-content: center;
    align-items: center;

    .labels,
    .values {
      color: #fff;
      display: flex;
      flex-direction: column;

      .info-row {
        margin-top: 8px;
      }

      .info-row:first-of-type {
        margin-top: 1px;
      }
    }

    .labels {
      .info-row {
        justify-content: flex-end;
      }
    }

    .values {
      margin-left: 10px;

      .info-row {
        justify-content: flex-start;
      }
    }
  }
}

.lang_popper {
  min-width: 198px !important;

  &.el-select-dropdown {
    .el-scrollbar {
      .el-select-dropdown__wrap {
        .el-scrollbar__view {
          .el-select-dropdown__item {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
