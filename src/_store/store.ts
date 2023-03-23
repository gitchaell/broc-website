import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { loggerMiddleware } from './middleware';

export const store = configureStore({
	reducer: rootReducer,
	middleware: [loggerMiddleware],
});
