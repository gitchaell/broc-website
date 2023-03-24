import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// primereact
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import { Avatar } from 'primereact/avatar';
import { BreadCrumb } from 'primereact/breadcrumb';
// assets
import { Logo } from '../assets/logo';

export const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const menuItems: Array<MenuItem> = [
		{
			template() {
				return (
					<div onClick={() => navigate('/home')}>
						<span className="p-menuitem-icon pi pi-fw pi-home text-white"></span>
						<span className="p-menuitem-text text-white">Home</span>
					</div>
				);
			},
			items: undefined,
		},
		{
			template() {
				return (
					<div onClick={() => navigate('/listing')}>
						<span className="p-menuitem-icon pi pi-fw pi-users text-white"></span>
						<span className="p-menuitem-text text-white">Listings</span>
					</div>
				);
			},
			items: undefined,
		},
		{
			template() {
				return (
					<div onClick={() => navigate('/brochure')}>
						<span className="p-menuitem-icon pi pi-fw pi-shopping-cart text-white"></span>
						<span className="p-menuitem-text text-white">Brochure</span>
					</div>
				);
			},
			items: undefined,
		},
		{
			template() {
				return (
					<div onClick={() => navigate('/messages')}>
						<span className="p-menuitem-icon pi pi-fw pi-comments text-white"></span>
						<span className="p-menuitem-text text-white">Messages</span>
					</div>
				);
			},
			items: undefined,
		},
	];

	const getBreadcrumbItems = (): Array<MenuItem> => {
		const pathnames = location.pathname.split('/').filter(x => x);

		return pathnames.map((pathname, i) => ({
			url: `/${pathnames.slice(0, i + 1).join('/')}`,
			template() {
				return (
					<span
						className="p-menuitem-text text-white cursor-pointer"
						onClick={() => navigate(`/${pathnames.slice(0, i + 1).join('/')}`)}
					>
						{pathname.charAt(0).toUpperCase() + pathname.slice(1)}
					</span>
				);
			},
		}));
	};

	const home: MenuItem = {
		template() {
			return (
				<span
					className="p-menuitem-icon pi pi-home text-white cursor-pointer"
					onClick={() => navigate('/home')}
				></span>
			);
		},
	};

	return (
		<div className="bg-gray-900" style={{ height: '250px' }}>
			<div
				className="py-3 px-5 flex align-items-center relative lg:static"
				style={{ minHeight: '80px' }}
			>
				<MegaMenu
					className="w-full bg-gray-900"
					model={menuItems}
					orientation="horizontal"
					start={<Logo height={40} />}
					end={
						<ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800 lg:border-top-none">
							<li>
								<a
									href="/listing"
									className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
								>
									<i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
									<span className="block lg:hidden font-medium">Inbox</span>
									<span role="presentation" className="p-ink"></span>
								</a>
							</li>
							<li>
								<a
									href="/listing"
									className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
								>
									<i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
									<span className="block lg:hidden font-medium">
										Notifications
									</span>
									<span role="presentation" className="p-ink"></span>
								</a>
							</li>
							<li className="border-top-1 border-gray-800 lg:border-top-none">
								<a
									href="/listing"
									className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
								>
									<Avatar
										className="p-overlay-badge"
										icon="pi pi-user"
										size="large"
										imageAlt="avatar"
										shape="square"
									/>
								</a>
							</li>
						</ul>
					}
					breakpoint="960px"
				/>
			</div>

			<BreadCrumb
				className="bg-gray-900 px-5"
				model={getBreadcrumbItems()}
				home={home}
			/>
		</div>
	);
};

export const Footer = () => {
	return (
		<div className="bg-gray-900 px-4 md:px-6 lg:px-8">
			<div className="py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
				<div>
					<Logo height={40} />
					<div className="mt-2 line-height-3 text-white">
						© {new Date().getFullYear()} Brochurist, Inc. All rights reserved
					</div>
				</div>
				<div className="mt-3 sm:mt-0">
					<a
						href="/"
						className="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700"
					>
						<i className="pi pi-twitter text-xl text-white"></i>
					</a>
					<a
						href="/"
						className="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700"
					>
						<i className="pi pi-facebook text-xl text-white"></i>
					</a>
					<a
						href="/"
						className="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700"
					>
						<i className="pi pi-github text-xl text-white"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export const Layout = () => {
	return (
		<div className="min-h-screen flex flex-column">
			<Header />

			<div
				className="p-5 flex flex-column flex-auto"
				style={{ marginTop: '-7rem' }}
			>
				<div className="flex-auto surface-card p-4 shadow-2 border-round">
					<Outlet />
				</div>
			</div>

			<Footer />
		</div>
	);
};
