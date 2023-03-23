// Types
import { UserActionType, UserState, UserActions } from './user.types';

const initialState: UserState = {};

export const userReducer = (
	state: UserState = initialState,
	action: UserActions
): UserState => {
	switch (action.type) {
		case UserActionType.USER_UPDATE:
			return { ...state, ...action.payload };
		case UserActionType.USER_LOGOUT:
			return state;
		default:
			return state;
	}
};
