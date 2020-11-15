import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from '@src/slices';

const isProduction = process.env.NODE_ENV === 'production';

// const middleware = [sagaMiddleware, logger];
const defaultMiddleware = getDefaultMiddleware({ serializableCheck: false });

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...defaultMiddleware,
    // ...middleware
  ],
  devTools: !isProduction,
});

export default store;
