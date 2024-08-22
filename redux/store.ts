// store.js
import { configureStore } from '@reduxjs/toolkit';
// import * as actionTypes from "_constants__WEBPACK_IMPORTED_MODULE_0__";
import localforage from 'localforage';
import { combineReducers } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import deviceSlice from './slices/deviceSlice';

const combinedReducer = combineReducers({
  device: deviceSlice,
});

//@ts-ignore  <-- fix this
const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const persistConfig = {
  key: 'redux',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Make sure to configure localforage bxefore the Redux store is created
localforage.config({
  driver: localforage.INDEXEDDB, // or localforage.LOCALSTORAGE
  name: 'goregal',
  storeName: 'goregal',
  version: 1.0,
  description: 'goregal store',
});

const isDevelopment = process.env.MODE === 'development';


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true ? false : {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: true ? false : true,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;