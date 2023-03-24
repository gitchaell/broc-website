import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Logo } from '../assets/logo';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../_providers';
import { useRef } from 'react';

interface LoginFormValues {
	email: string;
	password: string;
	rememberMe: boolean;
}

const initialValues: LoginFormValues = {
	email: 'admin@brochurist.com',
	password: 'brochurist!!!!!!!!',
	rememberMe: false,
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email address is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required'),
});

export const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const toast = useRef<Toast>(null);
	const auth = useAuth();

	const from = location.state?.from?.pathname || '/listing';

	const onSubmit = ({ email, password }: LoginFormValues) => {
		auth
			?.signIn({ email, password })
			.then(({ firstname }) => {
				toast.current?.show({
					severity: 'success',
					summary: 'Success',
					detail: `Hola ${firstname}! Bienvenido.`,
					life: 3000,
				});

				navigate(from, { replace: true });
			})
			.catch(() => {
				toast.current?.show({
					severity: 'error',
					summary: 'Error',
					detail: 'Acceso denegado',
					life: 3000,
				});
			});
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<div className="h-screen surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
			<div className="surface-card p-4 shadow-2 border-round w-full lg:w-4">
				<div className="text-center mb-5">
					<Logo height={120} />
					<div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
					<span className="text-600 font-medium line-height-3">
						Don't have an account?
					</span>
					<a
						href="/"
						className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
					>
						Create today!
					</a>
				</div>

				<form onSubmit={formik.handleSubmit}>
					<label htmlFor="email" className="block text-900 font-medium mb-2">
						Email
					</label>
					<InputText
						id="email"
						name="email"
						type="text"
						placeholder="admin@brochurist.com"
						className="w-full mb-3"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className="text-red-600">{formik.errors.email}</div>
					) : null}

					<label htmlFor="password" className="block text-900 font-medium mb-2">
						Password
					</label>
					<InputText
						type="password"
						name="password"
						placeholder="12345678"
						className="w-full mb-3"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className="text-red-600">{formik.errors.password}</div>
					) : null}

					<div className="flex align-items-center justify-content-between mb-6">
						<div className="flex align-items-center">
							<Checkbox
								id="rememberMe"
								name="rememberMe"
								className="mr-2"
								checked={formik.values.rememberMe}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<label htmlFor="rememberMe">Remember me</label>
						</div>
						<a
							href="/"
							className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
						>
							Forgot your password?
						</a>
					</div>

					<Button
						type="submit"
						label="Sign In"
						icon="pi pi-user"
						className="w-full"
					/>
				</form>
			</div>
			<Toast ref={toast} />
		</div>
	);
};
