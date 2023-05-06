import { $authHost, $host } from '.';

export const getOnePost = async (id:string|undefined) => {
  const { data } = await $host.get(`api/post/${id}`);

  return data;
};
export const getAllPosts = async () => {
  const { data } = await $host.get(`api/post`);

  return data;
};
