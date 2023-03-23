import { combineReducers } from 'redux';
import { userReducer } from './user';
import { listingReducer } from './listing';
import { UserActionType } from './user/';
import { State } from './states';

const appReducer = combineReducers<State>({
	user: userReducer,
	listing: listingReducer,
});

export const rootReducer = (state: any, action: any) => {
	if (action.type === UserActionType.USER_LOGOUT)
		return appReducer(undefined, action);

	return appReducer(state, action);
};
