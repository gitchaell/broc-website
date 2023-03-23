import './index.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './_providers';
import { Listing } from './Listing/Listing';
import { NotFound } from './NotFound/NotFound';
import { Login } from './Login/Login';
import { Layout } from './_components/Layout';

export const App = () => {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route
					element={
						<RouteGuard>
							<Layout />
						</RouteGuard>
					}
				>
					<Route path="/listing" element={<Listing />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AuthProvider>
	);
};

export const RouteGuard = ({ children }: { children: JSX.Element }) => {
	const auth = useAuth();
	const location = useLocation();

	return auth?.token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};
