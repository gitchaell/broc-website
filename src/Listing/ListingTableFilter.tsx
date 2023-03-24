import { useContext, useEffect, useState } from 'react';
// primereact
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';
// providers
import { ListingContext } from '../_providers';
// models
import { ListingStatus, PropertyType } from '../_types';

export const ListingTableFilter = () => {
	const { filters, setFilters } = useContext(ListingContext);

	const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<
		Array<PropertyType>
	>(Array.from(Object.values(PropertyType)));

	const [selectedListingStatus, setSelectedListingStatus] = useState<
		Array<ListingStatus>
	>(Array.from(Object.values(ListingStatus)));

	const [searchedPropertyAddress, setSearchedPropertyAddress] =
		useState<string>();

	useEffect(() => {
		setFilters({
			...filters,
			propertyAddress: searchedPropertyAddress,
			propertyTypes: selectedPropertyTypes,
			status: selectedListingStatus,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchedPropertyAddress, selectedPropertyTypes, selectedListingStatus]);

	return (
		<Toolbar
			left={
				<div className="flex gap-2">
					<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-folder"></i>
						</span>
						<MultiSelect
							id="property-type"
							value={selectedPropertyTypes}
							onChange={(e: MultiSelectChangeEvent) =>
								setSelectedPropertyTypes(e.value)
							}
							options={[
								{ label: 'Condo', value: PropertyType.CONDO },
								{
									label: 'Detached Single Family',
									value: PropertyType.DETACHED_SINGLE_FAMILY,
								},
								{ label: 'Multi-Unit', value: PropertyType.MULTI_UNIT },
								{ label: 'Multi-Family', value: PropertyType.MULTI_FAMILY },
								{ label: 'Townhome', value: PropertyType.TOWNHOME },
							]}
							placeholder="Property Type"
							filter={true}
							display="chip"
							selectAll={true}
							className="w-30rem"
						/>
					</div>

					<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-calendar"></i>
						</span>
						<MultiSelect
							id="listing-status"
							value={selectedListingStatus}
							onChange={(e: MultiSelectChangeEvent) =>
								setSelectedListingStatus(e.value)
							}
							options={[
								{ label: 'Active', value: ListingStatus.ACTIVE },
								{
									label: 'Under Contract',
									value: ListingStatus.UNDER_CONTRACT,
								},
								{ label: 'Closed', value: ListingStatus.CLOSED },
							]}
							placeholder="Listing Status"
							filter={true}
							display="chip"
							selectAll={true}
							className="w-20rem"
						/>
					</div>
				</div>
			}
			right={
				<span className="p-input-icon-right">
					<i className="pi pi-search" />
					<InputText
						id="search"
						value={searchedPropertyAddress}
						placeholder="Searh by Property Address ..."
						onChange={e => setSearchedPropertyAddress(e.target.value)}
						className="w-20rem"
					/>
				</span>
			}
		></Toolbar>
	);
};
