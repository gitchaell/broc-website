import { Middleware } from 'redux';

export const loggerMiddleware: Middleware = store => next => action => {
	console.info(`[${action.type}]: ${JSON.stringify(action.payload || {})}`);
	next(action);
};
