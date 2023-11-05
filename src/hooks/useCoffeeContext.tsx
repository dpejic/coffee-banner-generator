import { useContext } from 'react'

import { CoffeeContext } from '../contexts/CoffeeContext/CoffeeContext'
import { CoffeeContextAction, ICoffeeContextState } from '../contexts/CoffeeContext/types'

export const useCoffeeContext = () => {
  const context = useContext(CoffeeContext)

  if (context === undefined) {
    throw new Error('useCoffeeContext must be used within a CoffeeContextProvider')
  }

  return context as {
    state: ICoffeeContextState
    dispatch: React.Dispatch<CoffeeContextAction>
  }
}
