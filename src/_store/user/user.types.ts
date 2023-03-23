import { Action } from 'redux';
// Types
import { User } from '../../_types';

export interface UserState extends User {}

export enum UserActionType {
	USER_UPDATE = 'USER_UPDATE',
	USER_LOGOUT = 'USER_LOGOUT',
}

export interface UserUpdateAction extends Action {
	type: UserActionType.USER_UPDATE;
	payload: User;
}

export interface UserLogoutAction extends Action {
	type: UserActionType.USER_LOGOUT;
}

export type UserActions = UserUpdateAction | UserLogoutAction;
