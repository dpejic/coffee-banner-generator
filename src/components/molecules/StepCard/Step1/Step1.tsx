import { useEffect, useState } from 'react'
import { InputActionMeta, SingleValue } from 'react-select'

import { Button, ButtonVariant, ReactSelect } from '~atoms'
import { CoffeeContextActionType } from '~contexts'
import { CoffeeType } from '~enums'
import { useCoffeeContext } from '~hooks'
import { DropdownItem } from '~interfaces'
import { useCoffee } from '~query'
import { createDropdownItemFactory, formatDataForSelect } from '~utils'

const StepCardStep1 = () => {
  const { state, dispatch } = useCoffeeContext()

  const [query, setQuery] = useState('')
  const [searchData, setSearchData] = useState<DropdownItem[]>([])
  const coffee = useCoffee(state.selectedCoffeeType)

  useEffect(() => {
    if (!coffee.isLoading && coffee.data) {
      const dataFormated = formatDataForSelect(coffee.data, 'title', 'title')
      setSearchData(dataFormated)
    }
  }, [coffee?.data, coffee?.isLoading])

  const handleInputChange = (text: string, event: InputActionMeta) => {
    if (event.action !== 'input-blur' && event.action !== 'menu-close') {
      setQuery(text)
    }
  }

  const handleSelectItem = (item: SingleValue<DropdownItem>) => {
    const title = item ? item.value : null

    selectCoffee(title)
    setCoffee(title)
  }

  const selectCoffee = (value: string | null) => {
    dispatch({ type: CoffeeContextActionType.SELECT_COFFEE, payload: value })
  }

  const setCoffee = (title: string | null) => {
    const coffeeData = coffee.data
    if (coffeeData) {
      const selectedCoffee = coffeeData.filter((data) => data.title === title)
      if (selectedCoffee.length > 0) {
        dispatch({ type: CoffeeContextActionType.SET_COFFEE, payload: selectedCoffee[0] })
      }
    }
  }

  const handleRadioChange = (type: CoffeeType) => {
    dispatch({ type: CoffeeContextActionType.SELECT_COFFEE_TYPE, payload: type })

    if (state.selectedCoffeeType !== null) {
      dispatch({ type: CoffeeContextActionType.SELECT_COFFEE_TYPE, payload: type })
    }
  }

  return (
    <div className="flex flex-col">
      <Button
        wrapperClassName="flex items-center space-x-2"
        variant={ButtonVariant.radio}
        text={'Hot coffee'}
        value={CoffeeType.HOT}
        name="coffee"
        checked={state.selectedCoffeeType === CoffeeType.HOT}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleRadioChange(e?.currentTarget?.value as CoffeeType)
        }}
        id="select-coffee-hot"
      />
      <Button
        wrapperClassName="flex items-center space-x-2"
        variant={ButtonVariant.radio}
        text={'Iced coffee'}
        value={CoffeeType.ICED}
        name="coffee"
        checked={state.selectedCoffeeType === CoffeeType.ICED}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleRadioChange(e?.currentTarget?.value as CoffeeType)
        }}
        id="select-coffee-iced"
      />
      <ReactSelect
        className="mt-5"
        onInputChange={handleInputChange}
        handleSelectItem={handleSelectItem}
        isLoading={coffee.isLoading}
        searchData={searchData}
        searchText={query}
        selectedItem={createDropdownItemFactory(state.selectedCoffee)}
      />
    </div>
  )
}

export { StepCardStep1 }
