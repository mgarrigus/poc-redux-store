import objectsReducer from '../data/objects';
import initialState from '../../store/initial-state';

const { grid } = initialState;
const { data } = grid;
const { objects } = data;

describe('objects reducer', () => {
	describe('basic cases', () => {
		it('should return the initial state', () => {
			const action = { type: 'fake' };
			expect(objectsReducer(undefined, action)).toEqual(objects);
		});
	});
});
