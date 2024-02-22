import type { Preset } from 'unocss'
import shortcuts from './shortcuts'
import rules from './rules'

interface Options {
  enableElementPlusColor?: boolean
}

const presetWmm = (options?: Options): Preset => {
  let colors
  if (options?.enableElementPlusColor) {
    colors = {
      bg_color: 'var(--el-bg-color)',
      primary: 'var(--el-color-primary)',
      warn: 'var(--el-color-warning)',
      danger: 'var(--el-color-danger)',
      success: 'var(--el-color-success)',
      info: 'var(--el-color-info)',
      placeholder: 'var(--el-text-color-placeholder)',
      border_color: 'var(--el-border-color)',
    }
  }
  return {
    name: '@wmm387/unocss-preset',
    shortcuts,
    rules,
    theme: { colors },
  }
}

export default presetWmm
