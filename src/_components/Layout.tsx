import { Outlet } from 'react-router-dom';
import { Logo } from '../assets/logo';

export const Layout = () => {
	return (
		<div className="min-h-screen flex flex-column">
			<div className="bg-gray-900" style={{ height: '250px' }}>
				<div
					className="py-3 px-5 flex align-items-center justify-content-between relative lg:static"
					style={{ minHeight: '80px' }}
				>
					<Logo height={40} />
					<a
						href="/listing"
						className="p-ripple cursor-pointer block lg:hidden text-gray-400"
					>
						<i className="pi pi-bars text-4xl"></i>
						<span role="presentation" className="p-ink"></span>
					</a>
					<div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1">
						<ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
							<li>
								<a
									href="/listing"
									className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
								>
									<i className="pi pi-home mr-2"></i>
									<span>Home</span>
									<span role="presentation" className="p-ink"></span>
								</a>
							</li>
							<li>
								<a
									href="/listing"
									className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
								>
									<i className="pi pi-users mr-2"></i>
									<span>Customers</span>
									<i className="pi pi-angle-down ml-auto lg:ml-3"></i>
									<span role="presentation" className="p-ink"></span>
								</a>
								<ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer lg:border-1 border-gray-800">
									<li>
										<a
											href="/listing"
											className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150"
										>
											<i className="pi pi-user-plus mr-2"></i>
											<span className="font-medium">Add New</span>
											<span role="presentation" className="p-ink"></span>
										</a>
									</li>
									<li className="relative">
										<a
											href="/listing"
											className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150"
										>
											<i className="pi pi-search mr-2"></i>
											<span className="font-medium">Search</span>
											<i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
											<span role="presentation" className="p-ink"></span>
										</a>
										<ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 lg:border-1 border-gray-800">
											<li>
												<a
													href="/listing"
													className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150"
												>
													<i className="pi pi-shopping-cart mr-2"></i>
													<span className="font-medium">Purchases</span>
													<span role="presentation" className="p-ink"></span>
												</a>
											</li>
											<li className="relative">
												<a
													href="/listing"
													className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150"
												>
													<i className="pi pi-comments mr-2"></i>
													<span className="font-medium">Messages</span>
													<span role="presentation" className="p-ink"></span>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<a
									href="/listing"
									className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
								>
									<i className="pi pi-calendar mr-2"></i>
									<span>Calendar</span>
									<span role="presentation" className="p-ink"></span>
								</a>
							</li>
							<li>
								<a
									href="/listing"
									className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
								>
									<i className="pi pi-chart-line mr-2"></i>
									<span>Stats</span>
									<span role="presentation" className="p-ink"></span>
								</a>
							</li>
						</ul>
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
									<img
										src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
										alt="profile"
										className="mr-3 lg:mr-0"
										style={{
											width: '32px',
											height: '32px',
											objectFit: 'cover',
											borderRadius: '25px',
										}}
									/>
									<div className="block lg:hidden">
										<div className="text-white font-medium">
											Josephine Lillard
										</div>
										<span className="text-gray-400 font-medium text-sm">
											Marketing Specialist
										</span>
									</div>
									<span role="presentation" className="p-ink"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<ul className="list-none py-3 px-5 m-0 flex align-items-center font-medium overflow-x-auto border-top-1 border-gray-800">
					<li className="pr-3">
						<a href="/listing" className="cursor-pointer">
							<i className="pi pi-home text-gray-400"></i>
						</a>
					</li>
					<li className="px-2">
						<i className="pi pi-angle-right text-gray-400"></i>
					</li>
					<li className="px-2">
						<a
							href="/listing"
							className="cursor-pointer text-gray-400 white-space-nowrap"
						>
							Level 3
						</a>
					</li>
					<li className="px-2">
						<i className="pi pi-angle-right text-gray-400"></i>
					</li>
					<li className="px-2">
						<a
							href="/listing"
							className="cursor-pointer text-gray-400 white-space-nowrap"
						>
							Level 2
						</a>
					</li>
					<li className="px-2">
						<i className="pi pi-angle-right text-gray-400"></i>
					</li>
					<li className="px-2">
						<a
							href="/listing"
							className="cursor-pointer text-indigo-300 white-space-nowrap"
						>
							Level 1
						</a>
					</li>
				</ul>
			</div>
			<div
				className="p-5 flex flex-column flex-auto"
				style={{ marginTop: '-8rem' }}
			>
				<div className="border-round surface-section flex-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
