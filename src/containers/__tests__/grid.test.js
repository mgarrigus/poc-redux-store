/**
 * @jest-environment jsdom
 */

// Setup for testing elements when we finish this container

import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../grid';
import configureStore from '../../store/configure-dev';
import rootReducer from '../../reducers';

const store = configureStore(rootReducer);

describe('<Grid />', () => {
	const { getAllByRole } = render(<Grid store={store} />, { context: { store } });

	it('should render default columns in container', () => {
		const listItems = getAllByRole('listitem');

		expect(listItems.length).toEqual(6);
	});
});
