// import {create} from 'zustand';

// const useStore = create<any>()((set) => ({
//   pokemons: [
//     { id: 1, name: 'Bulbasaur' },
//     { id: 2, name: 'Ivysaur' },
//     { id: 3, name: 'Venusaur' },
//     { id: 4, name: 'Charmander' },
//     { id: 5, name: 'Charmeleon' },
//   ],
//   addPokemons: (pokemon: any) =>
//     set((state: any) => ({
//       pokemons: [{ name: pokemon.name, id: Math.random() * 100 }, ...state.pokemons],
//     })),
//   removePokemon: (id: any) =>
//     set((state: any) => ({
//       pokemons: state.pokemons.filter((pokemon: any) => pokemon.id !== id),
//     })),
// }));
// export default useStore;

import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: { filter: filterReducer, cart },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
