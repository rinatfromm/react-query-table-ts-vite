import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../entities/product/api/ fetchProducts';


export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
