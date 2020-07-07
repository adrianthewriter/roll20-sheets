// Functions
export { default as setRowId } from './SetRowId'

// Batch Scripts
import { default as OnSheetCreation } from './OnSheetCreation'
import { default as CalculateSpentCap } from './CalculateSpentCap'
import { default as OnChangeWeaponEquipped } from './OnChangeWeaponEquipped'
import { default as OnChangeWeaponDamage } from './OnChangeWeaponDamage'
import { default as OnChangeTechniqueMacros } from './OnChangeTechniqueMacros'
import { default as OnChangeAbilityMacros } from './OnChangeAbilityMacros'

export default [
  OnSheetCreation,
  CalculateSpentCap,
  OnChangeWeaponEquipped,
  OnChangeWeaponDamage,
  OnChangeTechniqueMacros,
  OnChangeAbilityMacros,
]
