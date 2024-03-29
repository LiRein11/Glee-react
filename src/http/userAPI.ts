import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post('api/user/registration', {
    email,
    password,
  });
  localStorage.setItem('token', data.token);

  return jwt_decode(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', data.token);

  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const getOneUser = async () => {
  const { data } = await $authHost.get('api/user/info');

  return data;
};

export const getUserById = async (id: number | undefined) => {
  const { data } = await $host.get(`api/user/${id}`);

  return data;
};
