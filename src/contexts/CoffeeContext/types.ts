import { BannerWidthType, CoffeeType, StepCoffee } from '~enums'
import { Coffee } from '~interfaces'

export type CoffeeContextAction =
  | { type: CoffeeContextActionType.SELECT_COFFEE_TYPE; payload: CoffeeType }
  | { type: CoffeeContextActionType.SELECT_COFFEE; payload: string | null }
  | { type: CoffeeContextActionType.SELECT_WIDTH; payload: BannerWidthType | null }
  | { type: CoffeeContextActionType.SET_CUSTOM_WIDTH; payload: number }
  | { type: CoffeeContextActionType.SET_TITLE; payload: string }
  | { type: CoffeeContextActionType.SET_DESCRIPTION; payload: string }
  | { type: CoffeeContextActionType.SET_STEP; payload: StepCoffee }
  | { type: CoffeeContextActionType.SET_COFFEE; payload: Coffee | null }
  | { type: CoffeeContextActionType.RESET_ALL }

export enum CoffeeContextActionType {
  SELECT_COFFEE_TYPE = 'SELECT_COFFEE_TYPE',
  SELECT_COFFEE = 'SELECT_COFFEE',
  SELECT_WIDTH = 'SELECT_WIDTH',
  SET_CUSTOM_WIDTH = 'SET_CUSTOM_WIDTH',
  SET_TITLE = 'SET_TITLE',
  SET_DESCRIPTION = 'SET_DESCRIPTION',
  SET_STEP = 'SET_STEP',
  SET_COFFEE = 'SET_COFFEE',
  RESET_ALL = 'RESET_ALL',
}

export interface ICoffeeContextState {
  selectedCoffeeType: CoffeeType | null
  selectedCoffee: string | null
  selectedWidth: BannerWidthType | null
  customWidth: number
  title: string
  description: string
  step: StepCoffee
  coffee: Coffee | null
}
