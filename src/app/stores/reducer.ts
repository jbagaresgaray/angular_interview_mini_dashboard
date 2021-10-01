import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment';

import booksReducer from './bookSlice';
import { storageMetaReducer } from './metareducer';

export const reducers: ActionReducerMap<any> = {
  books: booksReducer,
};


// export function localStorageSyncReducer(
//   reducer: ActionReducer<any>
// ): ActionReducer<any> {
//   return localStorageSync({ keys: ['books', 'formattedBooks'] })(reducer);
// }
// export const metaReducers: Array<MetaReducer<any, any>> = [
//   localStorageSyncReducer,
// ];


export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storageMetaReducer]
  : [storageMetaReducer];
