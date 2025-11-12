import { getAllProducts, getProductsByCategory } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

const AllProducts = () => {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
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
