import type { Rule } from 'unocss'
import { anyRule } from './any'
import { flexRule } from './flex'
import { gradientRules } from './gradient'
import { positionRules } from './position'

const rules: Rule[] = [
  anyRule,
  flexRule,
  ...gradientRules,
  ...positionRules,
]

export default rules
