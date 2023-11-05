import { CoffeeContextInitialState } from './state'
import { CoffeeContextAction, CoffeeContextActionType, ICoffeeContextState } from './types'

import { BannerWidthType, CoffeeType } from '~enums'

export const CoffeeContextReducer = (
  prevState: ICoffeeContextState,
  action: CoffeeContextAction,
): ICoffeeContextState => {
  switch (action.type) {
    case CoffeeContextActionType.SELECT_COFFEE_TYPE:
      return { ...prevState, selectedCoffeeType: action.payload as null | CoffeeType }
    case CoffeeContextActionType.SELECT_COFFEE:
      return { ...prevState, selectedCoffee: action.payload as null | string }
    case CoffeeContextActionType.SELECT_WIDTH:
      return { ...prevState, selectedWidth: action.payload as null | BannerWidthType, customWidth: 0 }
    case CoffeeContextActionType.SET_CUSTOM_WIDTH:
      return { ...prevState, customWidth: action.payload, selectedWidth: BannerWidthType.CUSTOM }
    case CoffeeContextActionType.SET_TITLE:
      return { ...prevState, title: action.payload }
    case CoffeeContextActionType.SET_DESCRIPTION:
      return { ...prevState, description: action.payload }
    case CoffeeContextActionType.SET_STEP:
      return { ...prevState, step: action.payload }
    case CoffeeContextActionType.SET_COFFEE:
      return { ...prevState, coffee: action.payload }
    case CoffeeContextActionType.RESET_ALL:
      return { ...prevState, ...CoffeeContextInitialState }
    default:
      return prevState
  }
}
