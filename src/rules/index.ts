import { anyRule } from './any'
import { flexRule } from './flex'
import { gradientRules } from './gradient'
import { positionRules } from './position'

export default [
  anyRule,
  flexRule,
  ...gradientRules,
  ...positionRules,
]
