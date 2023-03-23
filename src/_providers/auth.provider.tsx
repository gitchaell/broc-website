import * as React from 'react';
// Types
import { Role, User } from '../_types';
// Services
import { createSession, deleteSession } from './jwt';
// Redux
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { updateUser, UserActions } from '../_store/user';
// Utils
import { uid } from '../_utils';

export type AuthContextType = {
	users: Array<User>;
	token: string;
	signIn: (user: User) => Promise<User>;
	signUp: (user: User) => Promise<User>;
	signOut: () => Promise<boolean>;
};

const defaultUser: User = {
	id: uid(),
	firstname: 'Fernando Michaell',
	lastname: 'Alavedra Munayco',
	email: 'admin@brochurist.com',
	password: '12345678',
	role: Role.ADMIN,
	token: undefined,
	createdAt: new Date(),
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [users, setUsers] = React.useState<Array<User>>([defaultUser]);
	const [token, setToken] = React.useState<string>('');

	const dispatch = useDispatch<Dispatch<UserActions>>();

	const signIn = ({ email, password }: User): Promise<User> => {
		return new Promise((resolve, reject) => {
			const user = users.find(
				user => user.email === email && user.password === password
			);

			if (user !== undefined) {
				user.token = createSession({ user });
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
			deleteSession();
			setToken('');
			resolve(true);
		});
	};

	const value = { users, token, signUp, signIn, signOut };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return React.useContext(AuthContext);
};
