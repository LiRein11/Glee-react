import { $authHost, $host } from '.';
import {
  IBasketDevice,
  IBrand,
  IProductItem,
  IProducts,
  IProductsLength,
  IType,
} from '../components/products.interface';

export const addDeviceToBasket = async (id: number) => {
  const { data } = await $authHost.post<IProductItem>('/api/basket', { id });
  return data;
}; // server

export const deleteDeviceFromBasket = async (id: number) => {
  await $authHost.delete<IBasketDevice>('api/basket/devices/' + id);
};

export const getFavorites = async () => {
  return $authHost.get<IProductItem[] & IProductsLength>('api/favorites/');
};

export const toggleFavorites = async (deviceId: number) => {
  await $authHost.put('api/favorites/' + deviceId);
};

export const getTypes = async () => {
  const { data } = await $host.get<IType[]>(`api/type`);

  return data;
};

export const getBrands = async () => {
  const { data } = await $host.get<IBrand[]>(`api/brand`);

  return data;
};

export const fetchDevices = async (brandId, typeId, page?, limit?, priceMin?, priceMax?) => {
  const { data } = await $host.get<IProducts>(`http://localhost:5000/api/device`, {
    params: {
      brandId,
      typeId,
      page,
      limit,
      priceMin,
      priceMax,
    },
  });
  return data;
};

export const fetchDevicesAll = async () => {
  const { data } = await $host.get<IProducts>(`http://localhost:5000/api/device/all`);
  return data.rows;
};

export const fetchOneDevice = async (id:number) => {
  const { data } = await $host.get('api/device/' + id);
  return data;
};

export const addRating = async (body: { rate: number; deviceId: number }) => {
  const { data } = await $authHost.post('api/rating/', body);
  return data;
};

export const checkRating = async (body: {deviceId:number}) => {
  const { data } = await $authHost.post('api/rating/check', body);
  return data;
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
