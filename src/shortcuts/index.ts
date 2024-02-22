import type { UserShortcuts } from 'unocss'

const shortcuts: UserShortcuts = [
  {
    'rel': 'relative',
    'abs': 'absolute',
    'abs-xc': 'absolute left-1/2 translate-x--1/2',
    'abs-yc': 'absolute top-1/2  translate-y--1/2',
    'abs-cc': 'absolute top-1/2 left-1/2 translate--1/2',
  },
  [
    /^text-w-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
    ([, weight]) => `font-${weight}`,
    {
      autocomplete: [
        'text-w-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)',
      ],
    },
  ],
]

export default shortcuts
