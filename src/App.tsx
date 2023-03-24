import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// styles
import './index.css';
// providers
import { AuthProvider, useAuth } from './_providers';
// layout
import { Layout } from './_components/Layout';
// pages
import { Login } from './Login/Login';
import { Home } from './Home/Home';
import { Listing } from './Listing/Listing';
import { Brochure } from './Brochure/Brochure';
import { NotFound } from './NotFound/NotFound';

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
					<Route path="/home" element={<Home />} />
					<Route path="/listing" element={<Listing />} />
					<Route path="/brochure" element={<Brochure />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AuthProvider>
	);
};

export const RouteGuard = ({ children }: { children: JSX.Element }) => {
	const auth = useAuth();
	const location = useLocation();

	return auth?.verifyAuthToken() ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};
