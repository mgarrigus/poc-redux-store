import gridUIReducer from '../ui/grid';
import initialState from '../../store/initial-state';

const { grid } = initialState;
const { ui } = grid;

describe('grid ui reducer', () => {
	describe('basic cases', () => {
		it('should return the initial state', () => {
			const action = { type: 'fake' };
			expect(gridUIReducer(undefined, action)).toEqual(ui);
		});
	});
});
