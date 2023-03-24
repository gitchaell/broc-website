import { ListingStatus } from './ListingStatus';
import { PropertyType } from './PropertyType';

export interface ListingFilter {
	propertyAddress?: string;
	propertyTypes?: Array<PropertyType>;
	status?: Array<ListingStatus>;
}
