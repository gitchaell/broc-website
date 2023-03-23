import { UserState } from './user';
import { ListingState } from './listing';

export interface State {
	user: UserState;
	listing: ListingState;
}
