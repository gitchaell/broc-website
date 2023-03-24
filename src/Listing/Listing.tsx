// providers
import { ListingProvider } from '../_providers';
// components
import { ListingHeader } from './ListingHeader';
import { ListingModal } from './ListingModal';
import { ListingTable } from './ListingTable';
import { ListingTableFilter } from './ListingTableFilter';

export const Listing = () => {
	return (
		<ListingProvider>
			<ListingHeader />
			<div className="flex flex-column gap-4">
				<ListingTableFilter />
				<ListingTable />
				<ListingModal />
			</div>
		</ListingProvider>
	);
};
