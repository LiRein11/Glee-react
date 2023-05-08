import { IUser } from './products.interface';

export interface IComment {
  createdAt: Date;
  id: number;
  userId: number;
  postId: number;
  text: string;
  user: IUser;
}

export interface IPost {
  id: number;
  title: string;
  text: string;
  tags: [];
  imageUrl: string;
  smallImageUrl: string;
  miniTitleTwo: string;
  miniTitleOne: string;
  textMiniOne: string;
  textMiniTwo: string;
  quote: string;
  createdAt: Date;
  userId: number;
  postComments: IComment[];
}

export interface IPosts {
  rows: IPost[];
  count: number;
}
