import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { reportWebVitals } from './reportWebVitals';
// Redux
import { Provider } from 'react-redux';
import { store } from './_store/store';

import { App } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

reportWebVitals();
