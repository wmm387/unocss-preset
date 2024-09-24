import presetWmm from '@/index'
import postcss from 'postcss'
import postcssJs from 'postcss-js'
import { createGenerator, presetAttributify, presetIcons, presetUno } from 'unocss'
import { describe, expect, it } from 'vitest'

describe('any', () => {
  const generator = createGenerator({
    presets: [
      presetAttributify(),
      presetIcons(),
      presetUno(),
      presetWmm({ anyStyle: true }),
    ],
  })

  const keys = [
    'a-color::#FFF',
    'a-border-radius::4px',
    'a-text-align::center',
    'a-display::flex',
    'a-margin::0',
    'a-height::100%',
  ]

  it('flex row布局', async () => {
    const { css } = await generator.generate(
      keys.join(' '),
      { preflights: false },
    )
    expect({ ...postcssJs.objectify(postcss.parse(css)) }).toEqual({
      '.a-color\\:\\:\\#FFF': { color: 'rgb(255,255,255)' },
      '.a-border-radius\\:\\:4px': { borderRadius: '4px' },
      '.a-text-align\\:\\:center': { textAlign: 'center' },
      '.a-display\\:\\:flex': { display: 'flex' },
      '.a-margin\\:\\:0': { margin: '0' },
      '.a-height\\:\\:100\\%': { height: '100%' },
    })
  })
})
