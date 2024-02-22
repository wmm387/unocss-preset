import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: false,
    typescript: true,
  },
  {
    rules: {
      'no-console': 'warn',
      'style/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      'style/arrow-parens': 'off',
      'curly': 'off',
      'antfu/if-newline': 'off',
      'antfu/top-level-function': 'off',
      'unicorn/prefer-number-properties': 'off',
    },
  },
)
