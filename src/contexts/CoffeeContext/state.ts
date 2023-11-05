import { ICoffeeContextState } from './types'

import { BannerWidthType, CoffeeType, StepCoffee } from '~enums'

export const CoffeeContextInitialState: ICoffeeContextState = {
  selectedCoffeeType: CoffeeType.HOT,
  selectedCoffee: null,
  selectedWidth: BannerWidthType.MEDIUM,
  customWidth: 0,
  title: '',
  description: '',
  step: StepCoffee.STEP1,
  coffee: null,
}
