import { getAllCategories } from '@/services/categories.service'
import { useQuery } from '@tanstack/react-query'

const AllCategories = () => {
  return useQuery({
    queryKey: ['allCategories'],
    queryFn: () => getAllCategories(),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false
  }) 
}

export const useCategories = {
  AllCategories
}