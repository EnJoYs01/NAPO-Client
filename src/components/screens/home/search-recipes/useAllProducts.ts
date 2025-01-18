import { useQuery } from '@tanstack/react-query'
import productsService from '../../../../services/products.service'
import { useMemo } from 'react'

export const useAllProducts = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['get all exercises'],
    queryFn: () => productsService.getAll(),
    select: ({ data }) => data
  });

  return useMemo(() => {
    return data;
  }, [isPending, error]);
};
