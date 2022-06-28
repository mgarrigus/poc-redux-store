// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getObjects from '../objects';
import { GET_OBJECTS_BEGIN, GET_OBJECTS_SUCCESS /* GET_OBJECTS_FAILURE */ } from '../../constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('Testing getObjects()', () => {
	beforeEach(() => {
		store.clearActions();
	});

	it('should return actions', () => {
		store.dispatch(getObjects()).then(() => {
			const expectedActions = [
				{
					type: GET_OBJECTS_BEGIN
				},
				{
					type: GET_OBJECTS_SUCCESS,
					payload: {
						objects: [],
						count: 0
					}
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
