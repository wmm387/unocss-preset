import presetWmm from '@/index'
import { createAutocomplete } from '@unocss/autocomplete'
import postcss from 'postcss'
import postcssJs from 'postcss-js'
import { createGenerator, presetAttributify, presetUno } from 'unocss'
import { describe, expect, it } from 'vitest'

describe('position', () => {
  const generator = createGenerator({
    presets: [
      presetAttributify(),
      presetUno(),
      presetWmm(),
    ],
  })

  const prefix = ['abs', 'fixed']
  const insets = ['x', 'y']
  const positions = ['top', 't', 'left', 'l', 'right', 'r', 'bottom', 'b']
  const numbers = ['-5', '-4', '-2', '-1', '0', '1', '2', '3', '4', '5']
  const insetKeys = prefix.flatMap(p => insets.flatMap(inset => numbers.map(n => `${p}-inset-${inset}-${n}`)))
  const positionKeys = prefix.flatMap(p => positions.flatMap(pos => numbers.map(n => `${p}-${pos}-${n}`)))

  it('abs and fixed inset', async () => {
    const { css } = await generator.generate(
      insetKeys.join(' '),
      { preflights: false },
    )
    expect({ ...postcssJs.objectify(postcss.parse(css)) }).toEqual({
      '.abs-inset-x--5,\n.fixed-inset-x--5': { left: '-1.25rem', right: '-1.25rem' },
      '.abs-inset-x--4,\n.fixed-inset-x--4': { left: '-1rem', right: '-1rem' },
      '.abs-inset-x--2,\n.fixed-inset-x--2': { left: '-0.5rem', right: '-0.5rem' },
      '.abs-inset-x--1,\n.fixed-inset-x--1': { left: '-0.25rem', right: '-0.25rem' },
      '.abs-inset-x-0,\n.fixed-inset-x-0': { left: '0', right: '0' },
      '.abs-inset-x-1,\n.fixed-inset-x-1': { left: '0.25rem', right: '0.25rem' },
      '.abs-inset-x-2,\n.fixed-inset-x-2': { left: '0.5rem', right: '0.5rem' },
      '.abs-inset-x-3,\n.fixed-inset-x-3': { left: '0.75rem', right: '0.75rem' },
      '.abs-inset-x-4,\n.fixed-inset-x-4': { left: '1rem', right: '1rem' },
      '.abs-inset-x-5,\n.fixed-inset-x-5': { left: '1.25rem', right: '1.25rem' },
      '.abs-inset-y--5,\n.fixed-inset-y--5': { top: '-1.25rem', bottom: '-1.25rem' },
      '.abs-inset-y--4,\n.fixed-inset-y--4': { top: '-1rem', bottom: '-1rem' },
      '.abs-inset-y--2,\n.fixed-inset-y--2': { top: '-0.5rem', bottom: '-0.5rem' },
      '.abs-inset-y--1,\n.fixed-inset-y--1': { top: '-0.25rem', bottom: '-0.25rem' },
      '.abs-inset-y-0,\n.fixed-inset-y-0': { top: '0', bottom: '0' },
      '.abs-inset-y-1,\n.fixed-inset-y-1': { top: '0.25rem', bottom: '0.25rem' },
      '.abs-inset-y-2,\n.fixed-inset-y-2': { top: '0.5rem', bottom: '0.5rem' },
      '.abs-inset-y-3,\n.fixed-inset-y-3': { top: '0.75rem', bottom: '0.75rem' },
      '.abs-inset-y-4,\n.fixed-inset-y-4': { top: '1rem', bottom: '1rem' },
      '.abs-inset-y-5,\n.fixed-inset-y-5': { top: '1.25rem', bottom: '1.25rem' },
    })
  })

  it('abs and fixed position', async () => {
    const { css } = await generator.generate(
      positionKeys.join(' '),
      { preflights: false },
    )
    expect({ ...postcssJs.objectify(postcss.parse(css)) }).toEqual({
      '.abs-t--5,\n.abs-top--5,\n.fixed-t--5,\n.fixed-top--5': { top: '-1.25rem' },
      '.abs-t--4,\n.abs-top--4,\n.fixed-t--4,\n.fixed-top--4': { top: '-1rem' },
      '.abs-t--2,\n.abs-top--2,\n.fixed-t--2,\n.fixed-top--2': { top: '-0.5rem' },
      '.abs-t--1,\n.abs-top--1,\n.fixed-t--1,\n.fixed-top--1': { top: '-0.25rem' },
      '.abs-t-0,\n.abs-top-0,\n.fixed-t-0,\n.fixed-top-0': { top: '0' },
      '.abs-t-1,\n.abs-top-1,\n.fixed-t-1,\n.fixed-top-1': { top: '0.25rem' },
      '.abs-t-2,\n.abs-top-2,\n.fixed-t-2,\n.fixed-top-2': { top: '0.5rem' },
      '.abs-t-3,\n.abs-top-3,\n.fixed-t-3,\n.fixed-top-3': { top: '0.75rem' },
      '.abs-t-4,\n.abs-top-4,\n.fixed-t-4,\n.fixed-top-4': { top: '1rem' },
      '.abs-t-5,\n.abs-top-5,\n.fixed-t-5,\n.fixed-top-5': { top: '1.25rem' },
      '.abs-l--5,\n.abs-left--5,\n.fixed-l--5,\n.fixed-left--5': { left: '-1.25rem' },
      '.abs-l--4,\n.abs-left--4,\n.fixed-l--4,\n.fixed-left--4': { left: '-1rem' },
      '.abs-l--2,\n.abs-left--2,\n.fixed-l--2,\n.fixed-left--2': { left: '-0.5rem' },
      '.abs-l--1,\n.abs-left--1,\n.fixed-l--1,\n.fixed-left--1': { left: '-0.25rem' },
      '.abs-l-0,\n.abs-left-0,\n.fixed-l-0,\n.fixed-left-0': { left: '0' },
      '.abs-l-1,\n.abs-left-1,\n.fixed-l-1,\n.fixed-left-1': { left: '0.25rem' },
      '.abs-l-2,\n.abs-left-2,\n.fixed-l-2,\n.fixed-left-2': { left: '0.5rem' },
      '.abs-l-3,\n.abs-left-3,\n.fixed-l-3,\n.fixed-left-3': { left: '0.75rem' },
      '.abs-l-4,\n.abs-left-4,\n.fixed-l-4,\n.fixed-left-4': { left: '1rem' },
      '.abs-l-5,\n.abs-left-5,\n.fixed-l-5,\n.fixed-left-5': { left: '1.25rem' },
      '.abs-r--5,\n.abs-right--5,\n.fixed-r--5,\n.fixed-right--5': { right: '-1.25rem' },
      '.abs-r--4,\n.abs-right--4,\n.fixed-r--4,\n.fixed-right--4': { right: '-1rem' },
      '.abs-r--2,\n.abs-right--2,\n.fixed-r--2,\n.fixed-right--2': { right: '-0.5rem' },
      '.abs-r--1,\n.abs-right--1,\n.fixed-r--1,\n.fixed-right--1': { right: '-0.25rem' },
      '.abs-r-0,\n.abs-right-0,\n.fixed-r-0,\n.fixed-right-0': { right: '0' },
      '.abs-r-1,\n.abs-right-1,\n.fixed-r-1,\n.fixed-right-1': { right: '0.25rem' },
      '.abs-r-2,\n.abs-right-2,\n.fixed-r-2,\n.fixed-right-2': { right: '0.5rem' },
      '.abs-r-3,\n.abs-right-3,\n.fixed-r-3,\n.fixed-right-3': { right: '0.75rem' },
      '.abs-r-4,\n.abs-right-4,\n.fixed-r-4,\n.fixed-right-4': { right: '1rem' },
      '.abs-r-5,\n.abs-right-5,\n.fixed-r-5,\n.fixed-right-5': { right: '1.25rem' },
      '.abs-b--5,\n.abs-bottom--5,\n.fixed-b--5,\n.fixed-bottom--5': { bottom: '-1.25rem' },
      '.abs-b--4,\n.abs-bottom--4,\n.fixed-b--4,\n.fixed-bottom--4': { bottom: '-1rem' },
      '.abs-b--2,\n.abs-bottom--2,\n.fixed-b--2,\n.fixed-bottom--2': { bottom: '-0.5rem' },
      '.abs-b--1,\n.abs-bottom--1,\n.fixed-b--1,\n.fixed-bottom--1': { bottom: '-0.25rem' },
      '.abs-b-0,\n.abs-bottom-0,\n.fixed-b-0,\n.fixed-bottom-0': { bottom: '0' },
      '.abs-b-1,\n.abs-bottom-1,\n.fixed-b-1,\n.fixed-bottom-1': { bottom: '0.25rem' },
      '.abs-b-2,\n.abs-bottom-2,\n.fixed-b-2,\n.fixed-bottom-2': { bottom: '0.5rem' },
      '.abs-b-3,\n.abs-bottom-3,\n.fixed-b-3,\n.fixed-bottom-3': { bottom: '0.75rem' },
      '.abs-b-4,\n.abs-bottom-4,\n.fixed-b-4,\n.fixed-bottom-4': { bottom: '1rem' },
      '.abs-b-5,\n.abs-bottom-5,\n.fixed-b-5,\n.fixed-bottom-5': { bottom: '1.25rem' },
    })
  })

  it('autocomplete', async () => {
    const autocomplete = createAutocomplete(createGenerator({
      presets: [presetWmm()],
    }))

    expect(await autocomplete.suggest('abs-inset-x-')).toMatchSnapshot()
    expect(await autocomplete.suggest('abs-inset-y-')).toMatchSnapshot()
    expect(await autocomplete.suggest('abs-top-')).toMatchSnapshot()
    expect(await autocomplete.suggest('abs-t-')).toMatchSnapshot()
    expect(await autocomplete.suggest('abs-left-')).toMatchSnapshot()
    expect(await autocomplete.suggest('abs-l-')).toMatchSnapshot()
    expect(await autocomplete.suggest('abs-right-')).toMatchSnapshot()
    expect(await autocomplete.suggest('abs-r-')).toMatchSnapshot()
    expect(await autocomplete.suggest('abs-bottom-')).toMatchSnapshot()
    expect(await autocomplete.suggest('abs-b-')).toMatchSnapshot()

    expect(await autocomplete.suggest('fixed-inset-x-')).toMatchSnapshot()
    expect(await autocomplete.suggest('fixed-inset-y-')).toMatchSnapshot()
    expect(await autocomplete.suggest('fixed-top-')).toMatchSnapshot()
    expect(await autocomplete.suggest('fixed-t-')).toMatchSnapshot()
    expect(await autocomplete.suggest('fixed-left-')).toMatchSnapshot()
    expect(await autocomplete.suggest('fixed-l-')).toMatchSnapshot()
    expect(await autocomplete.suggest('fixed-right-')).toMatchSnapshot()
    expect(await autocomplete.suggest('fixed-r-')).toMatchSnapshot()
    expect(await autocomplete.suggest('fixed-bottom-')).toMatchSnapshot()
    expect(await autocomplete.suggest('fixed-b-')).toMatchSnapshot()
  })
})
