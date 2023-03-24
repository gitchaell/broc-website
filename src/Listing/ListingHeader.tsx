import { useContext } from 'react';
// primereact
import { Button } from 'primereact/button';
// providers
import { ListingContext } from '../_providers';

export const ListingHeader = () => {
	const { openModal } = useContext(ListingContext);

	return (
		<header className="flex w-full justify-content-between align-items-center border-bottom-1 surface-border pb-5">
			<div>
				<h2 className="mt-0 mb-3 font-medium text-2xl text-900">My Listings</h2>
				<p className="mt-0 mb-0 font-normal text-base text-500">
					Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.
				</p>
			</div>
			<Button
				label="Create New Listing"
				icon="pi pi-plus"
				onClick={() => openModal()}
			/>
		</header>
	);
};
