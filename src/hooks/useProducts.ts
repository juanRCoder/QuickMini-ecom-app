import { getAllProducts } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

const AllProducts = () => {
  return useQuery({
    queryKey: ['allProducts'],
    queryFn: () => getAllProducts(),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false
  }) 
}

export const useProducts = {
  AllProducts
}