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

// export const getCommentsByPost = async (id: number | undefined) => {
//   const { data } = await $host.get(`api/comment/post/${id}`);

//   return data;
// };
