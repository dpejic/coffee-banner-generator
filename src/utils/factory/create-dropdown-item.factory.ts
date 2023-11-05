import { DropdownItem } from '~interfaces'

export const createDropdownItemFactory = (value: string | null): DropdownItem | null => {
  if (typeof value === 'string') {
    return { value, label: value }
  } else {
    return null
  }
}
