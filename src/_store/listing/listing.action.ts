import { Listing } from '../../_types';
import {
	ListingActionType,
	ListingSearchAction,
	ListingSelectAction,
} from './listing.types';

export const searchListing = (search: Listing): ListingSearchAction => ({
	type: ListingActionType.LISTING_SEARCH,
	payload: search,
});

export const selectListing = (trip: Listing): ListingSelectAction => ({
	type: ListingActionType.LISTING_SELECT,
	payload: trip,
});
