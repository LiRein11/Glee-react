export interface IPost {
  id:string
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
}
export interface IPosts {
  posts: IPost[];
  count:number
}

export interface IPostsCount {
  count: number;
}
