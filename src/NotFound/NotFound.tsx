import { useNavigate } from 'react-router-dom';
// primereact
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="flex h-screen justify-content-center align-items-center">
			<Card className="mb-3 shadow-4" style={{ width: '500px' }}>
				<h1 className="text-center mb-4">Oops! Page Not Found</h1>
				<div className="flex justify-content-center gap-2">
					<Button
						label="Go Back"
						icon="pi pi-arrow-left"
						severity="secondary"
						outlined
					/>
					<Button
						label="Go Home"
						icon="pi pi-home"
						onClick={() => navigate('/home')}
					/>
				</div>
			</Card>
		</div>
	);
};
