import { $authHost, $host } from '.';
import { IProductItem, IProducts } from '../components/products.interface';

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

export const getBrands = async () => {
  const { data } = await $host.get(`api/brand`);

  return data;
};

export const fetchDevices = async (brandId, typeId, page?, limit?) => {
  const { data } = await $host.get<IProducts>(`http://localhost:5000/api/device`, {
    params: {
      brandId,
      typeId,
      page,
      limit
    },
  });
  return data.rows;
};

export const fetchDevicesAll = async () => {
  const { data } = await $host.get<IProducts>(`http://localhost:5000/api/device/all`);
  return data.rows;
};

// export const fetchProducts = async (brandId:number|string='', typeId:number|string='') => {
//   if (brandId || typeId) {
//     const { data } = await $host.get<IProducts>(
//       `http://localhost:5000/api/device?brandId=${brandId}&typeId=${typeId}`,
//     );
//     return data.rows as IProductItem[];
//   } else {
//     const { data } = await $host.get<IProducts>(`http://localhost:5000/api/device`);
//     return data.rows as IProductItem[];
//   }
// };
