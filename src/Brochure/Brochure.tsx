// primereact
import { Button } from 'primereact/button';

export const Brochure = () => {
	return (
		<>
			<header className="flex w-full justify-content-between align-items-center border-bottom-1 surface-border pb-5">
				<div>
					<h2 className="mt-0 mb-3 font-medium text-2xl text-900">
						Brochure Editor
					</h2>
					<p className="mt-0 mb-0 font-normal text-base text-500">
						Brochure name of Listing
					</p>
				</div>
				<Button label="Apply changes" icon="pi pi-plus" />
			</header>
		</>
	);
};
