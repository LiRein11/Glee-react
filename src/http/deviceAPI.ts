import { $authHost, $host } from '.';

export const addDeviceToBasket = async (id: number) => {
  const { data } = await $authHost.post('/api/basket', { id });
  return data;
}; // server

export const deleteDeviceFromBasket = async (id: number) => {
  await $authHost.delete('api/basket/devices/' + id);
};

export const getFavorites = async () => {
  return $authHost.get('api/favorites/');
};

export const toggleFavorites = async (deviceId: number) => {
  await $authHost.put('api/favorites/' + deviceId);
};
