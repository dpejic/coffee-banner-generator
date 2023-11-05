import { createContext, Dispatch, useReducer } from 'react'

import { IProps } from './CoffeeContext.types'
import { CoffeeContextReducer } from './reducer'
import { CoffeeContextInitialState } from './state'
import { CoffeeContextAction, ICoffeeContextState } from './types'

export const CoffeeContext = createContext<{
  state: ICoffeeContextState
  dispatch: Dispatch<CoffeeContextAction>
}>({
  state: CoffeeContextInitialState,
  dispatch: () => {},
})

export const CoffeeContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(
    CoffeeContextReducer as React.Reducer<ICoffeeContextState, CoffeeContextAction>,
    CoffeeContextInitialState,
  )

  return <CoffeeContext.Provider value={{ state, dispatch }}>{children}</CoffeeContext.Provider>
}
