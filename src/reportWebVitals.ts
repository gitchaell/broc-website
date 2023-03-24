export const reportWebVitals = () => {
	const reportHandler = () => {};

	import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
		getCLS(reportHandler);
		getFID(reportHandler);
		getFCP(reportHandler);
		getLCP(reportHandler);
		getTTFB(reportHandler);
	});
};
