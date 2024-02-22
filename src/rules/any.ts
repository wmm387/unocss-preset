import type { Rule } from 'unocss'
import { parseColor } from '@unocss/preset-mini/utils'

export const anyRule: Rule = [
  /^(.+)::(.+)$/,
  ([, n, v], { theme }) => {
    const color = parseColor(v, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
      return {
        [n]: `${color.cssColor.components.join(',')}`,
      }
    }
    return {
      [n]: v,
    }
  },
]
