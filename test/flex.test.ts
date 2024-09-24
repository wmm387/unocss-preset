import presetWmm from '@/index'
import { createAutocomplete } from '@unocss/autocomplete'
import postcss from 'postcss'
import postcssJs from 'postcss-js'
import { createGenerator, presetAttributify, presetUno } from 'unocss'
import { describe, expect, it } from 'vitest'

describe('flex', () => {
  const generator = createGenerator({
    presets: [
      presetAttributify(),
      presetUno(),
      presetWmm(),
    ],
  })

  const keyMap = ['s', 'c', 'e', 'b', 'a', 'v']
  const keys = keyMap.flatMap(a => keyMap.map(b => `${a}${b}`))

  it('flex row布局', async () => {
    const { css } = await generator.generate(
      keys.map(s => `flex-${s}`).join(' '),
      { preflights: false },
    )
    expect({ ...postcssJs.objectify(postcss.parse(css)) }).toEqual({
      '.flex-ss': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' },
      '.flex-sc': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
      '.flex-se': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' },
      '.flex-sb': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'space-between' },
      '.flex-sa': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'space-around' },
      '.flex-sv': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'space-evenly' },
      '.flex-cs': { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' },
      '.flex-cc': { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
      '.flex-ce': { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' },
      '.flex-cb': { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'space-between' },
      '.flex-ca': { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'space-around' },
      '.flex-cv': { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'space-evenly' },
      '.flex-es': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start' },
      '.flex-ec': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
      '.flex-ee': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' },
      '.flex-eb': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'space-between' },
      '.flex-ea': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'space-around' },
      '.flex-ev': { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'space-evenly' },
      '.flex-bs': { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
      '.flex-bc': { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
      '.flex-be': { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
      '.flex-bb': { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-between' },
      '.flex-ba': { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-around' },
      '.flex-bv': { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-evenly' },
      '.flex-as': { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' },
      '.flex-ac': { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
      '.flex-ae': { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end' },
      '.flex-ab': { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'space-between' },
      '.flex-aa': { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'space-around' },
      '.flex-av': { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'space-evenly' },
      '.flex-vs': { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start' },
      '.flex-vc': { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' },
      '.flex-ve': { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-end' },
      '.flex-vb': { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'space-between' },
      '.flex-va': { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'space-around' },
      '.flex-vv': { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'space-evenly' },
    })
  })

  it('flex column布局', async () => {
    const { css } = await generator.generate(
      keys.map(s => `flexc-${s}`).join(' '),
      { preflights: false },
    )
    expect({ ...postcssJs.objectify(postcss.parse(css)) }).toEqual({
      '.flexc-ss': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' },
      '.flexc-sc': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' },
      '.flexc-se': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' },
      '.flexc-sb': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'space-between' },
      '.flexc-sa': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'space-around' },
      '.flexc-sv': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'space-evenly' },
      '.flexc-cs': { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' },
      '.flexc-cc': { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
      '.flexc-ce': { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' },
      '.flexc-cb': { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'space-between' },
      '.flexc-ca': { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'space-around' },
      '.flexc-cv': { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'space-evenly' },
      '.flexc-es': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start' },
      '.flexc-ec': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' },
      '.flexc-ee': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' },
      '.flexc-eb': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'space-between' },
      '.flexc-ea': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'space-around' },
      '.flexc-ev': { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'space-evenly' },
      '.flexc-bs': { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' },
      '.flexc-bc': { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' },
      '.flexc-be': { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' },
      '.flexc-bb': { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'space-between' },
      '.flexc-ba': { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'space-around' },
      '.flexc-bv': { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'space-evenly' },
      '.flexc-as': { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start' },
      '.flexc-ac': { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' },
      '.flexc-ae': { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end' },
      '.flexc-ab': { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'space-between' },
      '.flexc-aa': { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'space-around' },
      '.flexc-av': { display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'space-evenly' },
      '.flexc-vs': { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start' },
      '.flexc-vc': { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' },
      '.flexc-ve': { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-end' },
      '.flexc-vb': { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'space-between' },
      '.flexc-va': { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'space-around' },
      '.flexc-vv': { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'space-evenly' },
    })
  })

  it('autocomplete', async () => {
    const autocomplete = createAutocomplete(createGenerator({
      presets: [presetWmm()],
    }))

    expect(await autocomplete.suggest('flex-')).toMatchSnapshot()
    expect(await autocomplete.suggest('flex-a')).toMatchSnapshot()
    expect(await autocomplete.suggest('flex-b')).toMatchSnapshot()
    expect(await autocomplete.suggest('flex-c')).toMatchSnapshot()
    expect(await autocomplete.suggest('flex-e')).toMatchSnapshot()
    expect(await autocomplete.suggest('flex-s')).toMatchSnapshot()
    expect(await autocomplete.suggest('flex-v')).toMatchSnapshot()
  })
})
