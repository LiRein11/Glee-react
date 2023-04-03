import { useQuery } from 'react-query';
import { getFavorites } from '../../http/deviceAPI';

export const useFavorites = (tt?:any) => {
  const {
    isLoading,
    data: favoritesDevices,
    refetch,
  } = useQuery(['favorites devices', tt], () => getFavorites(), {
    select: ({ data }) => data,
    // cacheTime: 0,
  });

  return {
    isLoading,
    favoritesDevices,
    refetch,
  };
};
