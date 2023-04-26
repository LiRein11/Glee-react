import { useQuery } from 'react-query';
import { getFavorites } from '../http/deviceAPI';

export const useFavorites = () => {
  const {
    isLoading,
    data: favoritesDevices,
    refetch,
  } = useQuery(['favorites devices'], () => getFavorites(), {
    select: ({ data }) => data,
    // cacheTime: 0,
  });

  return {
    isLoading,
    favoritesDevices,
    refetch,
  };
};
