import { ActionMeta, InputActionMeta, Props, SingleValue } from 'react-select'

import { DropdownItem } from '~interfaces'

export type ISelectProps<T extends Props> = {
  className?: string
  selectedItem: T | null
  handleSelectItem: (newValue: SingleValue<DropdownItem>, actionMeta: ActionMeta<SingleValue<DropdownItem>>) => void
  onInputChange: (text: string, event: InputActionMeta) => void
  searchText: string
  searchData: T[]
  isLoading: boolean
}
