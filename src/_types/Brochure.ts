import { Listing } from './Listing';

export type Brochure = {
	id?: number;
	imageURL?: string;
	status?: string;
	createdAt?: Date;
	updatedAt?: Date;
	listing?: Listing;
	listingId?: number;
};
