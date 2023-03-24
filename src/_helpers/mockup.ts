import { faker } from '@faker-js/faker';
import {
	Brochure,
	BrochureStatus,
	Listing,
	ListingStatus,
	PropertyType,
	Role,
	User,
} from '../_types';

export const generateData = () => {
	const users = generateUsers();
	const listings = generateListings(users);
	const brochures = generateBrochures(listings);

	return { users, listings, brochures };
};

export const generateUsers = (): Array<User> =>
	Array.from({ length: 5 }).map((element, index) => ({
		id: index + 1,
		firstname: faker.name.firstName(),
		lastname: faker.name.lastName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		role: faker.helpers.arrayElement([Role.USER, Role.ADMIN]),
		createdAt: faker.date.past(),
	}));

export const generateListings = (user: Array<User>): Array<Listing> =>
	Array.from({ length: 50 }).map((element, index) => {
		const publisher = faker.helpers.arrayElement(user);

		return {
			id: index + 1,
			propertyAddress: faker.address.streetAddress(),
			propertyType: faker.helpers.arrayElement([
				PropertyType.CONDO,
				PropertyType.DETACHED_SINGLE_FAMILY,
				PropertyType.MULTI_FAMILY,
				PropertyType.MULTI_UNIT,
				PropertyType.TOWNHOME,
			]),
			price: +faker.finance.amount(100, 1000, 2),
			status: faker.helpers.arrayElement([
				ListingStatus.ACTIVE,
				ListingStatus.UNDER_CONTRACT,
				ListingStatus.CLOSED,
			]),
			publisher: publisher,
			publisherId: publisher.id,
			createdAt: faker.date.past(),
			updatedAt: faker.date.recent(),
		};
	});

export const generateBrochures = (listings: Array<Listing>): Array<Brochure> =>
	listings.map((listing, index) => ({
		id: index + 1,
		imageURL: faker.image.imageUrl(),
		status: faker.helpers.arrayElement([
			BrochureStatus.USING,
			BrochureStatus.DRAFT,
		]),
		createdAt: faker.date.past(),
		updatedAt: faker.date.recent(),
		listing,
		listingId: listing.id,
	}));

export const mockup = generateData();
