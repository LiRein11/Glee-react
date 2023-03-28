import { $authHost } from '.';

export const addDeviceToBasket = async (id: number) => {
  const { data } = await $authHost.post('/api/basket', { id });
  return data;
}; // server

export const deleteDeviceFromBasket = async (id: number) => {
  await $authHost.delete('api/basket/devices/' + id);
};
