import { Middleware } from 'redux';

export const loggerMiddleware: Middleware = store => next => action => {
	console.groupCollapsed(`[${action.type}]`);
	console.log('Payload:', action.payload);
	console.groupEnd();
	next(action);
};
