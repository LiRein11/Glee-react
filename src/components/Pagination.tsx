import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { IProducts } from './products.interface';
import { AppDispatch, RootState } from '../store';
import { setPage } from '../store/slices/filterSlice';
import { IPosts } from './posts.interface';
import { useLocation } from 'react-router-dom';

const Pagination: FC<{
  devices: IProducts | IPosts | undefined;
  limit: number | undefined;
  count?: number | undefined;
  pageNoSlice?: number;
  setPageNoSlice?: any;
  pageBlog?: number;
  setPageBlog?: any;
}> = ({ devices, limit, count, pageNoSlice, pageBlog, setPageBlog, setPageNoSlice }) => {
  const location = useLocation();
  const pathBlogLoc = location.pathname.includes('/blog');

  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();
  // const [pageNoSlice, setPageNoSlice] = React.useState(1);

  const [pageNumbers, setPageNumbers] = React.useState<number[]>([]);
  console.log(limit);
  React.useEffect(() => {
    const lastPage = Math.ceil(
      devices !== undefined && limit !== undefined ? devices.count / limit : 0,
    );
    const newPageNumbers: number[] = [];

    for (let i: number = 1; i <= lastPage; i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  }, [devices, filter]);

  const onClickPagination = (index: number) => {
    dispatch(setPage(index + 1));
  };

  const onClickPaginationBlog = (index: number) => {
    setPageBlog(index + 1);
  };

  const onClickPaginationNoSlice = (index: number) => {
    setPageNoSlice(index + 1);
  };

  return (
    <>
      {count && pageNoSlice ? (
        <>
          <button
            className={
              pageNoSlice === 1 ? 'related__buttons related__buttons--active' : 'related__buttons'
            }
            disabled={pageNoSlice === 1 ? true : false}
            onClick={
              pageNoSlice === 1
                ? () => setPageNoSlice(pageNoSlice)
                : () => setPageNoSlice(pageNoSlice ? pageNoSlice - 1 : 0)
            }>
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='9' viewBox='0 0 22 9'>
              <path
                className='cls-1'
                d='M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z'
                transform='translate(-1439 -1327)'
              />
            </svg>
          </button>
          {/* <ul className='pagination__list'>
            {pageNumbers.map((el, i) => (
              <li className='pagination__item'>
                <div
                  className={
                    i === pageNoSlice - 1
                      ? 'pagination__link pagination__link--active'
                      : 'pagination__link'
                  }
                  onClick={() => onClickPaginationNoSlice(i)}>
                  {el}
                </div>
              </li>
            ))}
          </ul> */}
          <button
            className={
              pageNoSlice === pageNumbers.length
                ? 'related__buttons related__buttons--active'
                : 'related__buttons'
            }
            onClick={
              pageNoSlice === pageNumbers.length
                ? () => setPageNoSlice(pageNoSlice)
                : () => setPageNoSlice(pageNoSlice ? pageNoSlice + 1 : 0)
            }
            disabled={pageNoSlice === pageNumbers.length ? true : false}>
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='9' viewBox='0 0 22 9'>
              <path
                className='cls-1'
                d='M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z'
                transform='translate(-1509 -1327)'
              />
            </svg>
          </button>
        </>
      ) : pageBlog && pathBlogLoc ? (
        <div
          style={{ marginTop: '30px' }}
          className='pagination pagination-line'>
          <button
            className='pagination__prev pagination__arrow'
            onClick={pageBlog === 1 ? () => setPageBlog(pageBlog) : () => setPageBlog(pageBlog - 1)}
            disabled={pageBlog === 1 ? true : false}>
            Previous
          </button>
          <ul className='pagination__list'>
            {pageNumbers.map((el, i) => (
              <li className='pagination__item'>
                <div
                  className={
                    i === pageBlog - 1
                      ? 'pagination__link pagination__link--active'
                      : 'pagination__link'
                  }
                  onClick={() => onClickPaginationBlog(i)}>
                  {el}
                </div>
              </li>
            ))}
          </ul>
          <button
            className='pagination__next pagination__arrow'
            onClick={
              pageBlog === pageNumbers.length
                ? () => setPageBlog(pageBlog)
                : () => setPageBlog(pageBlog + 1)
            }
            disabled={pageBlog === pageNumbers.length ? true : false}>
            Next
          </button>
        </div>
      ) : (
        <div className={limit === 9 ? 'pagination' : 'pagination pagination-line'}>
          <button
            className='pagination__prev pagination__arrow'
            onClick={
              filter.page === 1
                ? () => dispatch(setPage(filter.page))
                : () => dispatch(setPage(filter.page - 1))
            }
            disabled={filter.page === 1 ? true : false}>
            Previous
          </button>
          <ul className='pagination__list'>
            {pageNumbers.map((el, i) => (
              <li className='pagination__item'>
                <div
                  className={
                    i === filter.page - 1
                      ? 'pagination__link pagination__link--active'
                      : 'pagination__link'
                  }
                  onClick={() => onClickPagination(i)}>
                  {el}
                </div>
              </li>
            ))}
          </ul>
          <button
            className='pagination__next pagination__arrow'
            onClick={
              filter.page === pageNumbers.length
                ? () => dispatch(setPage(filter.page))
                : () => dispatch(setPage(filter.page + 1))
            }
            disabled={filter.page === pageNumbers.length ? true : false}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
