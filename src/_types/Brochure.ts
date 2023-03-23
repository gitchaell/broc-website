import { Listing } from './Listing';

export type Brochure = {
	id?: string;
	imageURL?: string;
	status?: string;
	createdAt?: Date;
	updatedAt?: Date;
	listing?: Listing;
	listingId?: string;
};
