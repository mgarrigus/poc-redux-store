import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './containers/app';
import configureStore from './store/configure';
import './styles/objectmanager.scss';

const store  = configureStore();

const rootElement = createRoot(
	document.getElementById('root') // eslint-disable-line no-undef
);

rootElement.render(
	<Provider store={store}>
		<App />
	</Provider>
);
