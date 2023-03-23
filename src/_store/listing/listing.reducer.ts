import {
	ListingActionType,
	ListingState,
	ListingActions,
} from './listing.types';

const initialState: ListingState = {
	searchedListing: {
		propertyAddress: '',
	},
	selectedListing: null,
};

export const listingReducer = (
	state: ListingState = initialState,
	action: ListingActions
): ListingState => {
	switch (action.type) {
		case ListingActionType.LISTING_SEARCH:
			return { ...state, searchedListing: { ...action.payload } };
		case ListingActionType.LISTING_SELECT:
			return { ...state, selectedListing: { ...action.payload } };
		default:
			return state;
	}
};
