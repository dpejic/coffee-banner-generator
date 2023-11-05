import { useQuery } from '@tanstack/react-query'

import api from '~api'
import { CoffeeType, QueryNames } from '~enums'
import { Coffee } from '~interfaces'

const fetchCoffeeData = async (type: CoffeeType): Promise<Coffee[]> => {
  const response = await api.get<Coffee[]>(`/coffee/${type}`)
  return response.data
}

export const useCoffee = (type: CoffeeType | null) => {
  if (type === null) {
    return useQuery({
      queryKey: [QueryNames.GET_COFFEE, type],
      queryFn: () => Promise.resolve(null),
      enabled: type !== null,
    })
  }

  return useQuery({
    queryKey: [QueryNames.GET_COFFEE, type],
    queryFn: () => fetchCoffeeData(type),
    enabled: type !== null,
    staleTime: Infinity,
  })
}
