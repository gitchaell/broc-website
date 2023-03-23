export const reportWebVitals = () => {
	const reportHandler = console.log;

	import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
		getCLS(reportHandler);
		getFID(reportHandler);
		getFCP(reportHandler);
		getLCP(reportHandler);
		getTTFB(reportHandler);
	});
};
