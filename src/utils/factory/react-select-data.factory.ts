import { DropdownItem } from '~interfaces'

export const formatDataForSelect = <T>(data: T[] | null, labelProp: keyof T, valueProp: keyof T): DropdownItem[] => {
  if (!data) {
    return []
  }

  return data.map((item) => ({
    value: item[valueProp] as string,
    label: item[labelProp] as string,
  }))
}
