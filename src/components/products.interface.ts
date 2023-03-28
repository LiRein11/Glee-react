export interface IProductItem {
  img: string;
  text?: string | null;
  id: number;
  name: string;
  price: number;
  brandId: number;
  typeId: number;
  rating: number;
}

export interface IBasketDevice {
  basketId?: number;
  device: IProductItem;
  deviceId?: number;
  id?: number;
}
export interface IBasketDevices {
  items: IBasketDevice[];
}

export interface IProducts {
  rows: IProductItem[];
}

// export interface IProducts {
//   products: {
//     imageUrl: string;
//     title: string;
//     price: number;
//     id: number;
//     category: number;
//   };
// }
