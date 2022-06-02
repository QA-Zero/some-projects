import AngleLeft from '@/assets/icons/png/angle-left.png'
import AngleRight from '@/assets/icons/png/angle-right.png'
import Line from '@/assets/icons/png/line.png'
import Pyramid from '@/assets/icons/png/pyramid.png'
import Square from '@/assets/icons/png/square.png'
import StepsLeft from '@/assets/icons/png/steps-left.png'
import StepsRight from '@/assets/icons/png/steps-right.png'

const figures = [
  {
    image: AngleLeft,
    list: [
      [
        [true, false, false],
        [true, true,  true ],
      ],
      [
        [true, true ],
        [true, false],
        [true, false],
      ],
      [
        [true,  true,  true],
        [false, false, true],
      ],
      [
        [false, true],
        [false, true],
        [true,  true],
      ],
    ],
  },
  {
    image: AngleRight,
    list: [
      [
        [false, false, true],
        [true,  true,  true],
      ],
      [
        [true, false],
        [true, false],
        [true, true ],
      ],
      [
        [true, true, true],
        [true, false, false],
      ],
      [
        [true,  true],
        [false, true],
        [false, true],
      ],
    ],
  },
  {
    image: Line,
    list: [
      [
        [true, true, true, true],
      ],
      [
        [true],
        [true],
        [true],
        [true],
      ],
    ],
  },
  {
    image: Pyramid,
    list: [
      [
        [false, true, false],
        [true,  true, true ],
      ],
      [
        [true, false],
        [true, true ],
        [true, false],
      ],
      [
        [true,  true, true ],
        [false, true, false],
      ],
      [
        [false, true],
        [true,  true],
        [false, true],
      ],
    ],
  },
  {
    image: Square,
    list: [
      [
        [true, true],
        [true, true],
      ],
    ],
  },
  {
    image: StepsLeft,
    list: [
      [
        [false, true, true ],
        [true,  true, false],
      ],
      [
        [true,  false],
        [true,  true ],
        [false, true ],
      ],
    ],
  },
  {
    image: StepsRight,
    list: [
      [
        [true,  true, false],
        [false, true, true ],
      ],
      [
        [false, true ],
        [true,  true ],
        [true,  false],
      ],
    ],
  },
]

export default figures.map(stack => ({
  ...stack,
  list: (
    stack.list
      .map(figure => figure.map((row, idxRow) => row.map((cell, idxColumn) => {
        if (cell) {
          const result = []

          if (figure.length > 1) {
            if (idxRow === 0) {
              if (figure[idxRow + 1][idxColumn]) result.push('bottom')
            } else {
              if (idxRow === figure.length - 1) {
                if (figure[idxRow - 1][idxColumn]) result.push('top')
              } else {
                if (figure[idxRow - 1][idxColumn]) result.push('top')
                if (figure[idxRow + 1][idxColumn]) result.push('bottom')
              }
            }
          }

          if (row.length > 1) {
            if (idxColumn === 0) {
              if (row[idxColumn + 1]) result.push('right')
            } else {
              if (idxColumn === row.length - 1) {
                if (row[idxColumn - 1]) result.push('left')
              } else {
                if (row[idxColumn - 1]) result.push('left')
                if (row[idxColumn + 1]) result.push('right')
              }
            }
          }

          if (
            result.find(val => val === 'top') &&
            result.find(val => val === 'left') &&
            !figure[idxRow - 1][idxColumn - 1]
          ) result.push('top-left')
          if (
            result.find(val => val === 'top') &&
            result.find(val => val === 'right') &&
            !figure[idxRow - 1][idxColumn + 1]
          ) result.push('top-right')
          if (
            result.find(val => val === 'bottom') &&
            result.find(val => val === 'left') &&
            !figure[idxRow + 1][idxColumn - 1]
          ) result.push('bottom-left')
          if (
            result.find(val => val === 'bottom') &&
            result.find(val => val === 'right') &&
            !figure[idxRow + 1][idxColumn + 1]
          ) result.push('bottom-right')

          return result
        } else {
          return []
        }
      })))
  )
}))
