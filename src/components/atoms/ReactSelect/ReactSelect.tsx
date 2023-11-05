import Select from 'react-select'

import classNames from 'classnames'

import { ISelectProps } from './ReactSelect.types'

import { DropdownItem } from '~interfaces'

function ReactSelect({
  className,
  selectedItem,
  handleSelectItem,
  onInputChange,
  searchText,
  searchData,
  isLoading,
  ...rest
}: ISelectProps<DropdownItem>) {
  return (
    <Select
      noOptionsMessage={() => 'No data found'}
      className={classNames('search-select', className)}
      isClearable={true}
      isLoading={isLoading}
      inputValue={searchText}
      value={selectedItem}
      options={searchData}
      onChange={handleSelectItem}
      onInputChange={onInputChange}
      {...rest}
    />
  )
}

export { ReactSelect }
