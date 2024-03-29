export interface IProductItem {
  img: string;
  text?: string | null;
  id: number;
  name: string;
  price: number;
  brandId: number;
  typeId: number;
  rating: number;
  description: string;
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
  count: number;
  rows: IProductItem[];
}

export interface IProductsLength {
  length?: number;
}
export interface IType {
  id: number;
  name: string;
}

export interface IBrand {
  id: number;
  name: string;
  devicesCount: number;
}

export interface IDataToken {
  id:number;
  exp: number;
  email: string;
  role: string;
  name: string;
}

export interface IUser {
  email: string;
  name: string;
  avatarUrl: string;
  id: number;
  favorites: [];
  role: string;
  userComments: [];
}

export interface IRating {
  clickRating: Function;
  ratingVal: number;
  isAuth: boolean;
  isAccessRating: boolean;
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
