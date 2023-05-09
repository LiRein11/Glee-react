import { $authHost, $host } from '.';

export const getOnePost = async (id: string | undefined) => {
  const { data } = await $host.get(`api/post/${id}`);

  return data;
};

export const getAllPosts = async (page?, limit?) => {
  const { data } = await $host.get(`api/post`, {
    params: {
      page,
      limit,
    },
  });

  return data;
};

export const createComment = async (id: string | undefined, text: string) => {
  const { data } = await $authHost.post(`api/comment/post/${id}`, { text });

  return data;
};

export const getCommentsByPost = async (id: number | undefined) => {
  const { data } = await $host.get(`api/comment/post/${id}`);

  return data;
};

export const deleteComment = async (id: number) => {
  const { data } = await $authHost.delete('api/comment', { data: { id } });

  return data;
};
