import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
}; // Подстановка токена для авторизованного пользователя

$authHost.interceptors.request.use(authInterceptor); // На каждый запрос чтобы отрабатывала проверка, если пользователь авторизован 

export { $host, $authHost };
