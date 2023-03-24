import { Brochure } from './Brochure';
import { ListingStatus } from './ListingStatus';
import { PropertyType } from './PropertyType';
import { User } from './User';

export type Listing = {
	id?: number;
	propertyAddress?: string;
	propertyType?: PropertyType;
	price?: number;
	status?: ListingStatus;
	createdAt?: Date;
	updatedAt?: Date;
	publisher?: User;
	publisherId?: number;
	brochures?: Array<Brochure>;
};
