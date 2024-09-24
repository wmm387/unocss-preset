import type { Rule } from 'unocss'

const justifyItemsMap: Record<string, string> = {
  s: 'flex-start',
  c: 'center',
  e: 'flex-end',
  b: 'space-between',
  a: 'space-around',
  v: 'space-evenly',
}

export const flexRule: Rule = [
  /^flex(c?)-([scebav]{2})$/,
  ([, column, val]) => {
    const justify = justifyItemsMap[val[0]]
    const items = justifyItemsMap[val[1]]
    return {
      'display': 'flex',
      'flex-direction': column ? 'column' : 'row',
      'justify-content': justify,
      'align-items': items,
    }
  },
  {
    autocomplete: [
      '(flex|flexc)-(s|c|e|b|a|v)(s|c|e|b|a|v)',
    ],
  },
]
