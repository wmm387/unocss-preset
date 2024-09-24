import presetWmm from '@/index'
import postcss from 'postcss'
import postcssJs from 'postcss-js'
import { createGenerator, presetAttributify, presetUno } from 'unocss'
import { describe, expect, it } from 'vitest'

describe('gradient', () => {
  const generator = createGenerator({
    presets: [
      presetAttributify(),
      presetUno(),
      presetWmm(),
    ],
  })

  const positionMap = ['t', 'r', 'bottom', 'left', 'bl', 'tr', '90deg', '110deg', '320deg']
  const colors = [
    '#000-#FFF',
    '#F0F-#0FF/10%-#0F0/50%-#F0F',
    '#F0F-#F00',
    '#FF00FF10-#00F-#FF0',
    '#F0F-#0FF/10%-#0F0/50%-#F0F',
    '#F0F-#F00',
    '#FF00FF10-#00F-#FF0',
  ]
  const keys = positionMap.flatMap(a => colors.map(b => `${a}-${b}`))

  it('渐变', async () => {
    const { css } = await generator.generate(
      keys.map(s => `bg-lg-${s}`).join(' '),
      { preflights: false },
    )
    expect({ ...postcssJs.objectify(postcss.parse(css)) }).toEqual({
      '.bg-lg-110deg-\\#000-\\#FFF': { background: 'linear-gradient(110deg, #000, #FFF)' },
      '.bg-lg-110deg-\\#F0F-\\#0FF\\/10\\%-\\#0F0\\/50\\%-\\#F0F': { background: 'linear-gradient(110deg, #F0F, #0FF 10%, #0F0 50%, #F0F)' },
      '.bg-lg-110deg-\\#F0F-\\#F00': { background: 'linear-gradient(110deg, #F0F, #F00)' },
      '.bg-lg-110deg-\\#FF00FF10-\\#00F-\\#FF0': { background: 'linear-gradient(110deg, #FF00FF10, #00F, #FF0)' },
      '.bg-lg-320deg-\\#000-\\#FFF': { background: 'linear-gradient(320deg, #000, #FFF)' },
      '.bg-lg-320deg-\\#F0F-\\#0FF\\/10\\%-\\#0F0\\/50\\%-\\#F0F': { background: 'linear-gradient(320deg, #F0F, #0FF 10%, #0F0 50%, #F0F)' },
      '.bg-lg-320deg-\\#F0F-\\#F00': { background: 'linear-gradient(320deg, #F0F, #F00)' },
      '.bg-lg-320deg-\\#FF00FF10-\\#00F-\\#FF0': { background: 'linear-gradient(320deg, #FF00FF10, #00F, #FF0)' },
      '.bg-lg-90deg-\\#000-\\#FFF': { background: 'linear-gradient(90deg, #000, #FFF)' },
      '.bg-lg-90deg-\\#F0F-\\#0FF\\/10\\%-\\#0F0\\/50\\%-\\#F0F': { background: 'linear-gradient(90deg, #F0F, #0FF 10%, #0F0 50%, #F0F)' },
      '.bg-lg-90deg-\\#F0F-\\#F00': { background: 'linear-gradient(90deg, #F0F, #F00)' },
      '.bg-lg-90deg-\\#FF00FF10-\\#00F-\\#FF0': { background: 'linear-gradient(90deg, #FF00FF10, #00F, #FF0)' },
      '.bg-lg-bl-\\#000-\\#FFF': { background: 'linear-gradient(to bottom left, #000, #FFF)' },
      '.bg-lg-bl-\\#F0F-\\#0FF\\/10\\%-\\#0F0\\/50\\%-\\#F0F': { background: 'linear-gradient(to bottom left, #F0F, #0FF 10%, #0F0 50%, #F0F)' },
      '.bg-lg-bl-\\#F0F-\\#F00': { background: 'linear-gradient(to bottom left, #F0F, #F00)' },
      '.bg-lg-bl-\\#FF00FF10-\\#00F-\\#FF0': { background: 'linear-gradient(to bottom left, #FF00FF10, #00F, #FF0)' },
      '.bg-lg-bottom-\\#000-\\#FFF': { background: 'linear-gradient(to bottom, #000, #FFF)' },
      '.bg-lg-bottom-\\#F0F-\\#0FF\\/10\\%-\\#0F0\\/50\\%-\\#F0F': { background: 'linear-gradient(to bottom, #F0F, #0FF 10%, #0F0 50%, #F0F)' },
      '.bg-lg-bottom-\\#F0F-\\#F00': { background: 'linear-gradient(to bottom, #F0F, #F00)' },
      '.bg-lg-bottom-\\#FF00FF10-\\#00F-\\#FF0': { background: 'linear-gradient(to bottom, #FF00FF10, #00F, #FF0)' },
      '.bg-lg-left-\\#000-\\#FFF': { background: 'linear-gradient(to left, #000, #FFF)' },
      '.bg-lg-left-\\#F0F-\\#0FF\\/10\\%-\\#0F0\\/50\\%-\\#F0F': { background: 'linear-gradient(to left, #F0F, #0FF 10%, #0F0 50%, #F0F)' },
      '.bg-lg-left-\\#F0F-\\#F00': { background: 'linear-gradient(to left, #F0F, #F00)' },
      '.bg-lg-left-\\#FF00FF10-\\#00F-\\#FF0': { background: 'linear-gradient(to left, #FF00FF10, #00F, #FF0)' },
      '.bg-lg-r-\\#000-\\#FFF': { background: 'linear-gradient(to right, #000, #FFF)' },
      '.bg-lg-r-\\#F0F-\\#0FF\\/10\\%-\\#0F0\\/50\\%-\\#F0F': { background: 'linear-gradient(to right, #F0F, #0FF 10%, #0F0 50%, #F0F)' },
      '.bg-lg-r-\\#F0F-\\#F00': { background: 'linear-gradient(to right, #F0F, #F00)' },
      '.bg-lg-r-\\#FF00FF10-\\#00F-\\#FF0': { background: 'linear-gradient(to right, #FF00FF10, #00F, #FF0)' },
      '.bg-lg-t-\\#000-\\#FFF': { background: 'linear-gradient(to top, #000, #FFF)' },
      '.bg-lg-t-\\#F0F-\\#0FF\\/10\\%-\\#0F0\\/50\\%-\\#F0F': { background: 'linear-gradient(to top, #F0F, #0FF 10%, #0F0 50%, #F0F)' },
      '.bg-lg-t-\\#F0F-\\#F00': { background: 'linear-gradient(to top, #F0F, #F00)' },
      '.bg-lg-t-\\#FF00FF10-\\#00F-\\#FF0': { background: 'linear-gradient(to top, #FF00FF10, #00F, #FF0)' },
      '.bg-lg-tr-\\#000-\\#FFF': { background: 'linear-gradient(to top right, #000, #FFF)' },
      '.bg-lg-tr-\\#F0F-\\#0FF\\/10\\%-\\#0F0\\/50\\%-\\#F0F': { background: 'linear-gradient(to top right, #F0F, #0FF 10%, #0F0 50%, #F0F)' },
      '.bg-lg-tr-\\#F0F-\\#F00': { background: 'linear-gradient(to top right, #F0F, #F00)' },
      '.bg-lg-tr-\\#FF00FF10-\\#00F-\\#FF0': { background: 'linear-gradient(to top right, #FF00FF10, #00F, #FF0)' },
    })
  })
})
