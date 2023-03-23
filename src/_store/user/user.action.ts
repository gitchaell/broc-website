// Redux Types
import {
	UserActionType,
	UserLogoutAction,
	UserUpdateAction,
} from './user.types';
// Models
import { User } from '../../_types';

export const updateUser = (user: User): UserUpdateAction => ({
	type: UserActionType.USER_UPDATE,
	payload: user,
});

export const logoutUser = (): UserLogoutAction => ({
	type: UserActionType.USER_LOGOUT,
});
