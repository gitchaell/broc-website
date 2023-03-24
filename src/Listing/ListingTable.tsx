import { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// primereact
import { DataTable, DataTableSelection } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
// providers
import { ListingContext } from '../_providers';
// models
import { Listing, ListingStatus, PropertyType } from '../_types';

export const ListingTable = () => {
	const {
		listings,
		brochures,
		filterListings,
		setFilterListings,
		filters,
		openModal,
	} = useContext(ListingContext);

	const [selectedListings, setSelectedListings] = useState<
		DataTableSelection<Array<Listing>>
	>([]);

	const navigate = useNavigate();

	const propertyAddressCellTemplate = (listing: Listing) => {
		return (
			<Fragment>
				<div className="flex">
					<Button
						label={listing.propertyAddress}
						icon="pi pi-map-marker"
						link
						onClick={() => openModal(listing)}
					/>
				</div>
			</Fragment>
		);
	};

	const propertyTypeCellTemplate = (listing: Listing) => {
		const propertyTypeLabel = {
			[PropertyType.CONDO]: 'Condo',
			[PropertyType.DETACHED_SINGLE_FAMILY]: 'Detached Single Family',
			[PropertyType.MULTI_UNIT]: 'Multi-Unit',
			[PropertyType.MULTI_FAMILY]: 'Multi-Family',
			[PropertyType.TOWNHOME]: 'Townhome',
		}[listing.propertyType!];

		return <Fragment>{propertyTypeLabel}</Fragment>;
	};

	const priceCellTemplate = (listing: Listing) => {
		const formattedPrice = listing.price?.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});

		return <Fragment>{formattedPrice || '-'}</Fragment>;
	};

	const createdCellTemplate = (listing: Listing) => {
		const formattedDate = listing.createdAt?.toLocaleDateString('en-US', {
			month: '2-digit',
			day: '2-digit',
			year: 'numeric',
		});

		return <Fragment>{formattedDate || '-'}</Fragment>;
	};

	const statusCellTemplate = (listing: Listing) => {
		const statusLabel = {
			[ListingStatus.ACTIVE]: 'Active',
			[ListingStatus.UNDER_CONTRACT]: 'Under Contract',
			[ListingStatus.CLOSED]: 'Closed',
		}[listing.status!];

		return <Fragment>{statusLabel}</Fragment>;
	};

	const brochureCellTemplate = (listing: Listing) => {
		const hasBrochures = brochures.filter(
			brochure => brochure.listingId === listing.id
		).length;

		return (
			<Fragment>
				{hasBrochures ? (
					<div className="flex justify-content-center gap-1">
						<Button
							label="Edit"
							icon="pi pi-pencil"
							link
							onClick={() => navigate('/brochure')}
						/>
						<Button
							label="View"
							icon="pi pi-external-link"
							link
							onClick={() => navigate('/brochure')}
						/>
					</div>
				) : (
					<Button
						label="Create"
						icon="pi pi-plus"
						link
						onClick={() => navigate('/brochure')}
					/>
				)}
			</Fragment>
		);
	};

	useEffect(() => {
		setFilterListings(
			listings.filter(
				listing =>
					listing.propertyAddress
						?.toLowerCase()
						.search(filters.propertyAddress?.toLowerCase()!) !== -1 &&
					filters.propertyTypes?.includes(listing.propertyType!) &&
					filters.status?.includes(listing.status!)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [listings, filters]);

	return (
		<DataTable
			sortMode="multiple"
			tableStyle={{ minWidth: '50rem' }}
			value={filterListings}
			selection={selectedListings}
			cellSelection={true}
			onSelectionChange={e => setSelectedListings(e.value)}
			dataKey="id"
			paginator
			rows={10}
			rowsPerPageOptions={[5, 10, 25]}
			paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
			currentPageReportTemplate="Showing {first} to {last} of {totalRecords} listings"
		>
			<Column selectionMode="multiple" exportable={false}></Column>
			<Column field="id" header="ID" sortable></Column>
			<Column
				field="propertyAddress"
				header="Property Address"
				align="center"
				body={propertyAddressCellTemplate}
				sortable
			></Column>
			<Column
				field="propertyType"
				header="Property Type"
				align="left"
				body={propertyTypeCellTemplate}
				sortable
			></Column>
			<Column
				field="price"
				header="Price"
				align="right"
				body={priceCellTemplate}
				sortable
			></Column>
			<Column
				field="createdAt"
				header="Created"
				align="left"
				body={createdCellTemplate}
				sortable
			></Column>
			<Column
				field="status"
				header="Status"
				align="left"
				body={statusCellTemplate}
				sortable
			></Column>
			<Column
				field="brochure"
				header="Brochure"
				align="center"
				body={brochureCellTemplate}
			></Column>
		</DataTable>
	);
};
