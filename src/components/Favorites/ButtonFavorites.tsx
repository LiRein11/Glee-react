import React, { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useFavorites } from '../../hooks/useFavorites';
import { toggleFavorites } from '../../http/deviceAPI';
import { IBasketDevice, IProductItem } from '../products.interface';

const ButtonFavorites: FC<{ deviceBasket: IBasketDevice }> = ({ deviceBasket }) => {
  const [isToggled, setIsToggled] = React.useState(false);

  const { favoritesDevices, isLoading, refetch } = useFavorites();

  const queryClient = useQueryClient();

  React.useEffect(() => {
    if (!favoritesDevices) return;

    const isHasDevice = favoritesDevices.some((f: any) => f.id === deviceBasket.device.id); // Проверка в избранном ли девайс

    if (isToggled !== isHasDevice) setIsToggled(isHasDevice);
  }, [favoritesDevices, isToggled, deviceBasket.device.id]);

  const { mutateAsync } = useMutation(
    'update favorites',
    () => toggleFavorites(deviceBasket.device.id),
    {
      onSuccess: () => {
        setIsToggled(!isToggled);
        setTimeout(() => {
          queryClient.invalidateQueries(); // перезапускаем все запросы в приложении
        }, 80);
        // обновляем кэш данных для фаворитов, чтобы React Query автоматически обновил данные на странице
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  // const toggle = React.useCallback(async () => {
  //   setIsLoading(true);

  //   try {
  //     await mutateAsync();
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   setIsLoading(false);
  // }, [mutateAsync]);

  return (
    <>
      {isLoading ? (
        'loading'
      ) : (
        <button
          onClick={() => mutateAsync()}
          className={isToggled ? 'products-item__link-active' : 'products-item__link'}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20px'
            height='18px'
            viewBox='0 0 20 18'
            version='1.1'>
            <g id='surface1'>
              <path
                style={{ stroke: 'none', fillRule: 'evenodd', fill: '$accent' }}
                d='M 19.992188 5.820312 C 19.917969 4.269531 19.316406 2.808594 18.308594 1.71875 C 17.3125 0.621094 15.957031 0.00390625 14.546875 0 C 12.445312 0 10.957031 1.78125 10.15625 2.738281 C 10.113281 2.800781 10.066406 2.855469 10.015625 2.910156 L 9.941406 2.820312 C 9.210938 1.898438 7.6875 0 5.449219 0 C 4.039062 0.00390625 2.6875 0.621094 1.6875 1.71875 C 0.683594 2.808594 0.0820312 4.269531 0.0078125 5.820312 C -0.0664062 7.367188 0.339844 8.898438 1.164062 10.160156 C 2.433594 11.921875 3.886719 13.515625 5.492188 14.910156 C 7.042969 16.320312 9.082031 18 10.007812 18 C 10.945312 18 12.976562 16.320312 14.519531 14.910156 C 16.121094 13.515625 17.566406 11.921875 18.835938 10.160156 C 19.648438 8.894531 20.058594 7.367188 19.992188 5.820312 Z M 17.832031 9.429688 C 16.648438 11.070312 15.296875 12.554688 13.800781 13.851562 C 11.617188 15.851562 10.320312 16.640625 10.011719 16.671875 C 9.699219 16.640625 8.402344 15.839844 6.203125 13.828125 C 4.707031 12.542969 3.351562 11.066406 2.167969 9.429688 C 1.496094 8.402344 1.15625 7.15625 1.210938 5.890625 C 1.324219 3.382812 3.171875 1.390625 5.453125 1.320312 C 7.144531 1.320312 8.375 2.859375 9.039062 3.691406 C 9.238281 4.089844 9.589844 4.367188 10 4.449219 C 10.4375 4.355469 10.816406 4.0625 11.046875 3.640625 C 11.769531 2.769531 12.976562 1.320312 14.546875 1.320312 C 16.828125 1.390625 18.675781 3.382812 18.789062 5.890625 C 18.847656 7.15625 18.511719 8.40625 17.832031 9.429688 Z M 17.832031 9.429688 '
              />
            </g>
          </svg>
        </button>
      )}
    </>
  );
};

export default ButtonFavorites;
