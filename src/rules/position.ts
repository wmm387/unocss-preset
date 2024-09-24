import type { Rule } from 'unocss'
import { handler, positionMap } from '@unocss/preset-mini/utils'

const xyMap = {
  x: ['left', 'right'],
  y: ['top', 'bottom'],
}

export const positionRules: Rule[] = [
  [
    /^(abs|fixed)-inset-(x|y)-(.+)$/,
    ([, , d, size]) => {
      const value = handler.bracket.cssvar.auto.fraction.rem(size)
      if (value !== null && d in xyMap)
        return xyMap[d].map(i => [i, value])
    },
    {
      autocomplete: [
        '(abs|fixed)-inset-(x|y)-<num>',
      ],
    },
  ],
  [
    /^(abs|fixed)-([^-\n]+)-(.+)$/,
    ([, , p, size]) => {
      const value = handler.bracket.cssvar.auto.fraction.rem(size)
      if (value !== null && p in positionMap) {
        return {
          [positionMap[p]]: value,
        }
      }
    },
    {
      autocomplete: [
        '(abs|fixed)-(top|t|left|l|right|r|bottom|b)-<num>',
      ],
    },
  ],
]
