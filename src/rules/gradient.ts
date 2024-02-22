import type { Rule } from 'unocss'
import { positionMap } from '@unocss/preset-mini/utils'

export const gradientRules: Rule[] = [
  [
    /^bg-lg-(.*?)-(.*)$/,
    ([, p, colors]) => {
      let pos = positionMap[p]
      if (pos) pos = `to ${pos}`
      if (!pos && p.endsWith('deg')) pos = p
      const colorsStr = colors.split('-').map((item: string) => {
        const [c, w] = item.split('/')
        return c + (w ? ` ${w}` : '')
      })
      return {
        background: `linear-gradient(${pos}, ${colorsStr.join(', ')})`,
      }
    },
  ],
  [
    /^text-clg-(.*?)-(.*)$/,
    ([, p, colors]) => {
      let pos = positionMap[p]
      if (pos) pos = `to ${pos}`
      if (!pos && p.endsWith('deg')) pos = p
      const colorsStr = colors.split('-').map((item: string) => {
        const [c, w] = item.split('/')
        return c + (w ? ` ${w}` : '')
      })
      return {
        'background': `linear-gradient(${pos}, ${colorsStr.join(', ')})`,
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      }
    },
  ],
]
