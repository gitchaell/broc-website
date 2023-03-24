import React, { createContext, useRef, useState } from 'react';
// primereact
import { Toast } from 'primereact/toast';
// mockup
import { mockup } from '../_helpers/mockup';
// redux
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ListingActions, selectListing } from '../_store/listing';
// models
import {
	Brochure,
	Listing,
	ListingFilter,
	ListingStatus,
	PropertyType,
} from '../_types';

export type ListingContextType = {
	listings: Array<Listing>;
	saveListing: (listing: Listing) => void;
	deleteListing: (listing: Listing) => void;
	brochures: Array<Brochure>;
	filterListings: Array<Listing>;
	setFilterListings: (listings: Array<Listing>) => void;
	filters: ListingFilter;
	setFilters: (filters: ListingFilter) => void;
	isModalOpen: boolean;
	openModal: (listing?: Listing) => void;
	closeModal: () => void;
	toast?: Toast;
};

export const ListingContext = createContext<ListingContextType>({
	listings: [],
	saveListing: () => {},
	deleteListing: () => {},
	brochures: [],
	filterListings: [],
	setFilterListings: () => {},
	filters: {
		propertyAddress: '',
		propertyTypes: Array.from(Object.values(PropertyType)),
		status: Array.from(Object.values(ListingStatus)),
	},
	setFilters: () => {},
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
});

export const ListingProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [listings, setListings] = useState<Array<Listing>>(mockup.listings);
	const [brochures] = useState<Array<Brochure>>(mockup.brochures);
	const [filterListings, setFilterListings] =
		useState<Array<Listing>>(listings);

	const [filters, setFilters] = useState<ListingFilter>({
		propertyAddress: '',
		propertyTypes: Array.from(Object.values(PropertyType)),
		status: Array.from(Object.values(ListingStatus)),
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

	const toast = useRef<Toast>(null);

	const dispatch = useDispatch<Dispatch<ListingActions>>();

	const openModal = (listing?: Listing) => {
		dispatch(selectListing(listing!));
		setIsModalOpen(true);
	};

	const closeModal = () => {
		dispatch(selectListing(undefined!));
		setIsModalOpen(false);
	};

	const saveListing = (listing: Listing) => {
		setListings(prevListings => {
			const listingIndex = prevListings.findIndex(
				({ id }) => id === listing.id
			);
			if (listingIndex !== -1) {
				const updatedListings = [...prevListings];
				updatedListings[listingIndex] = listing;
				return updatedListings;
			} else {
				listing.id = prevListings.length + 1;
				return [...prevListings, listing];
			}
		});
	};

	const deleteListing = (listing: Listing) => {
		setListings(prevListings => {
			return prevListings.filter(({ id }) => id !== listing.id);
		});
	};

	return (
		<ListingContext.Provider
			value={{
				listings,
				saveListing,
				deleteListing,
				brochures,
				filterListings,
				setFilterListings,
				filters,
				setFilters,
				isModalOpen,
				openModal,
				closeModal,
				toast: toast.current!,
			}}
		>
			{children}
			<Toast ref={toast} />
		</ListingContext.Provider>
	);
};
