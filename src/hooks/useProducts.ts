import { getAllProducts, getProductsByCategory } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

const AllProducts = (searchTerm?: string) => {
  return useQuery({
    queryKey: ["allProducts", searchTerm],
    queryFn: () => getAllProducts(searchTerm),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: searchTerm !== undefined,
  });
};

const ProductsByCategory = (id: string) => {
  return useQuery({
    queryKey: ["productsByCategory", id],
    queryFn: () => getProductsByCategory(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useProducts = {
  AllProducts,
  ProductsByCategory
};
