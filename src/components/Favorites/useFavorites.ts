import { useQuery } from 'react-query';
import { getFavorites } from '../../http/deviceAPI';

export const useFavorites = () => {
  const {
    isLoading,
    data: favoritesDevices,
    refetch,
  } = useQuery('favorite movies', () => getFavorites(), {
    select: ({ data }) => data,
  });

  return {
    isLoading,
    favoritesDevices,
    refetch,
  };
};
