import { createContext, useContext, useState } from 'react';
// Types
import { Role, User } from '../_types';
// Redux
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { updateUser, UserActions } from '../_store/user';

export type AuthToken = string;

export type AuthPayload = {
	user: User;
	expiration?: number;
};

export type AuthContextType = {
	users: Array<User>;
	token: AuthToken;
	signIn: (user: User) => Promise<User>;
	signUp: (user: User) => Promise<User>;
	signOut: () => Promise<boolean>;
	verifyAuthToken: () => boolean;
};

const defaultUser: User = {
	id: 0,
	firstname: 'Fernando Michaell',
	lastname: 'Alavedra Munayco',
	email: 'admin@brochurist.com',
	password: 'brochurist!!!!!!!!',
	role: Role.ADMIN,
	token: undefined,
	createdAt: new Date(),
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [users, setUsers] = useState<Array<User>>([defaultUser]);
	const [token, setToken] = useState<AuthToken>('');

	const dispatch = useDispatch<Dispatch<UserActions>>();

	const signIn = ({ email, password }: User): Promise<User> => {
		return new Promise((resolve, reject) => {
			const user = users.find(
				user => user.email === email && user.password === password
			);

			if (user !== undefined) {
				user.token = createAuthToken({ user });
				setToken(user.token);
				dispatch(updateUser(user));
				resolve(user);
			} else {
				reject({ user, users });
			}
		});
	};

	const signUp = (user: User): Promise<User> => {
		return new Promise(resolve => {
			setUsers([...users, user]);
			setToken('');
			resolve(user);
		});
	};

	const signOut = (): Promise<boolean> => {
		return new Promise(resolve => {
			deleteAuthToken();
			setToken('');
			resolve(true);
		});
	};

	const createAuthToken = (payload: AuthPayload): AuthToken => {
		const expiration = new Date().getTime() + 60 * 60 * 1000; // Token expira en 1 hora
		const token = JSON.stringify({ expiration, ...payload });
		localStorage.setItem('TOKEN', token);
		return token;
	};

	const getAuthToken = (): AuthToken => {
		return localStorage.getItem('TOKEN')!;
	};

	const decodeAuthToken = (): AuthPayload | null => {
		try {
			const token = getAuthToken();
			return JSON.parse(token!) as AuthPayload;
		} catch (err) {
			return null;
		}
	};

	const verifyAuthToken = (): boolean => {
		const payload = decodeAuthToken();
		return (payload && new Date().getTime() < payload.expiration!)!;
	};

	const deleteAuthToken = (): void => {
		localStorage.removeItem('TOKEN');
	};

	const value = { users, token, signUp, signIn, signOut, verifyAuthToken };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};
