import { useContext } from 'react';
// forms
import { useFormik } from 'formik';
import * as Yup from 'yup';
// primereact
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
// redux
import { useSelector } from 'react-redux';
import { State } from '../_store/states';
// models
import { Listing, ListingStatus, PropertyType } from '../_types';
import { ListingContext } from '../_providers';

export const ListingForm = () => {
	const { saveListing, deleteListing, closeModal, toast } =
		useContext(ListingContext);

	const selectedListing = useSelector<State, Listing | undefined>(
		(state: State) => state.listing.selectedListing || undefined
	);

	const initialValues: Listing = selectedListing || {
		id: -1,
		propertyAddress: '',
		propertyType: PropertyType.CONDO,
		price: 0,
		status: ListingStatus.ACTIVE,
	};

	const validationSchema = Yup.object().shape({
		propertyAddress: Yup.string().required('Property address is required'),
		propertyType: Yup.string().required('Property type is required'),
		price: Yup.number()
			.min(0, 'Price must be greater than or equal to 0')
			.required('Price is required'),
		status: Yup.string().required('Status is required'),
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: listing => {
			saveListing(listing);
			toast!.show({
				severity: 'success',
				summary: 'Success',
				detail: `Changes applied`,
				life: 3000,
			});
			closeModal();
		},
	});

	const handleRemove = () => {
		deleteListing(selectedListing!);
		toast!.show({
			severity: 'success',
			summary: 'Success',
			detail: `Removed!`,
			life: 3000,
		});
		closeModal();
	};

	return (
		<form
			className="flex flex-column gap-4 w-30rem px-2 py-4"
			onSubmit={formik.handleSubmit}
		>
			<div className="flex flex-column gap-2">
				<label htmlFor="propertyAddress">Property Address</label>
				<div className="p-inputgroup">
					<span className="p-inputgroup-addon">
						<i className="pi pi-map-marker"></i>
					</span>
					<InputText
						id="propertyAddress"
						name="propertyAddress"
						type="text"
						placeholder="Property Address"
						className="w-full"
						value={formik.values.propertyAddress}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{formik.touched.propertyAddress && formik.errors.propertyAddress && (
					<div className="text-red-600">{formik.errors.propertyAddress}</div>
				)}
			</div>
			<div className="flex flex-column gap-2">
				<label htmlFor="propertyType">Property Type</label>
				<div className="p-inputgroup">
					<span className="p-inputgroup-addon">
						<i className="pi pi-folder"></i>
					</span>
					<Dropdown
						id="propertyType"
						name="propertyType"
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
						placeholder="Select Property Type"
						className="w-full"
						value={formik.values.propertyType}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{formik.touched.propertyType && formik.errors.propertyType && (
					<div className="text-red-600">{formik.errors.propertyType}</div>
				)}
			</div>
			<div className="flex flex-column gap-2">
				<label htmlFor="price">Price</label>
				<div className="p-inputgroup">
					<span className="p-inputgroup-addon">
						<i className="pi pi-dollar"></i>
					</span>
					<InputNumber
						inputId="price"
						name="price"
						mode="currency"
						currency="USD"
						locale="en-US"
						min={0}
						max={1000}
						placeholder="$ 00.0"
						className="w-full"
						value={formik.values.price}
						onValueChange={e => formik.setFieldValue('price', e.value)}
					/>
				</div>
				{formik.touched.price && formik.errors.price && (
					<div className="text-red-600">{formik.errors.price}</div>
				)}
			</div>
			<div className="flex flex-column gap-2">
				<label htmlFor="status">Status</label>
				<div className="p-inputgroup">
					<span className="p-inputgroup-addon">
						<i className="pi pi-calendar"></i>
					</span>
					<Dropdown
						id="status"
						name="status"
						options={[
							{ label: 'Active', value: ListingStatus.ACTIVE },
							{
								label: 'Under Contract',
								value: ListingStatus.UNDER_CONTRACT,
							},
							{ label: 'Closed', value: ListingStatus.CLOSED },
						]}
						placeholder="Select Status"
						className="w-full"
						value={formik.values.status}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				{formik.touched.status && formik.errors.status && (
					<div className="text-red-600">{formik.errors.status}</div>
				)}
			</div>
			<div className="flex justify-content-between">
				{selectedListing?.id ? (
					<Button
						type="button"
						label="Remove"
						severity="danger"
						onClick={() => handleRemove()}
					/>
				) : (
					<span></span>
				)}
				<div className="flex gap-2">
					<Button
						type="button"
						label="Cancel"
						severity="secondary"
						outlined
						onClick={() => closeModal()}
					/>
					<Button
						type="submit"
						label={selectedListing?.id ? 'Apply changes' : 'Create Listing'}
						icon="pi pi-save"
						severity="success"
					/>
				</div>
			</div>
		</form>
	);
};
