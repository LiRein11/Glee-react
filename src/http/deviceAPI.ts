import { $authHost, $host } from '.';
import { IProducts } from '../components/products.interface';

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

export const getTypes = async () => {
  const { data } = await $host.get(`api/type`);

  return data;
};

export const fetchProducts = async() =>{
  const { data } = await $host.get<IProducts>('http://localhost:5000/api/device');

  return data.rows;
}
