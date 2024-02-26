import type { Rule } from 'unocss'
import { anyRule } from './any'
import { flexRule } from './flex'
import { gradientRules } from './gradient'
import { positionRules } from './position'
import type { Options } from '@/types'

const genRules = (options?: Options): Rule[] => {
  const rules = [
    flexRule,
    ...gradientRules,
    ...positionRules,
  ]
  if (options?.anyStyle) {
    rules.push(anyRule)
  }
  return rules
}

export default genRules
