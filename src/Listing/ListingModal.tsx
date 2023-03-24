import { useContext } from 'react';
// primereact
import { Dialog } from 'primereact/dialog';
// redux
import { useSelector } from 'react-redux';
import { State } from '../_store/states';
// models
import { Listing } from '../_types';
// providers
import { ListingContext } from '../_providers';
// components
import { ListingForm } from './ListingForm';

export const ListingModal = () => {
	const { isModalOpen, closeModal } = useContext(ListingContext);

	const selectedListing = useSelector<State, Listing | undefined>(
		(state: State) => state.listing.selectedListing || undefined
	);

	return (
		<Dialog
			header={selectedListing?.id ? 'Edit Listing' : 'New Listing'}
			visible={isModalOpen}
			onHide={closeModal}
		>
			<ListingForm />
		</Dialog>
	);
};
