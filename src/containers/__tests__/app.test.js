/**
 * @jest-environment jsdom
 */

// Setup for testing elements when we finish this container

import React from 'react';
import App from '../app';
import configureStore from '../../store/configure-dev';
import rootReducer from '../../reducers';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';

const store = configureStore(rootReducer);


describe('<App />', () => {
	const renderer = new ShallowRenderer();
	renderer.render(<App store={store} />);

	const result = renderer.getRenderOutput();

	it('should render default container', () => {
		expect(result).toBeDefined;
	});
});
