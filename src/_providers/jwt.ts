// Types
import { User } from '../_types';

export type SessionToken = string;

export type SessionPayload = {
	user: User;
	expiration?: number;
};

export const createSession = (payload: SessionPayload): SessionToken => {
	const expiration = new Date().getTime() + 60 * 60 * 1000; // Token expira en 1 hora
	const token = JSON.stringify({ expiration, ...payload });
	localStorage.setItem('TOKEN', token);
	return token;
};

export const getToken = (): SessionToken | null => {
	return localStorage.getItem('TOKEN');
};

export const decodeToken = (): SessionPayload | null => {
	try {
		const token = getToken();
		return JSON.parse(token!) as SessionPayload;
	} catch (err) {
		return null;
	}
};

export const existsSession = (): boolean => {
	const payload = decodeToken();
	return (payload && new Date().getTime() < payload.expiration!)!;
};

export const deleteSession = (): void => {
	localStorage.removeItem('TOKEN');
};
