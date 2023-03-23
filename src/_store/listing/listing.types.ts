import { Action } from 'redux';
import { Listing } from '../../_types';

export interface ListingState {
	searchedListing: Listing;
	selectedListing: Listing | null;
}

export const enum ListingActionType {
	LISTING_SEARCH = 'LISTING_SEARCH',
	LISTING_SELECT = 'LISTING_SELECT',
}

export interface ListingSearchAction extends Action {
	type: ListingActionType.LISTING_SEARCH;
	payload: Listing;
}

export interface ListingSelectAction extends Action {
	type: ListingActionType.LISTING_SELECT;
	payload: Listing;
}

export type ListingActions = ListingSearchAction | ListingSelectAction;
