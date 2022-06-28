import withTarget from '../target';

describe('Testing withTarget()', () => {
	it('should return function', () => {
		const result = withTarget(jest.fn(), 'GRID_VIEW');

		expect(result).toEqual(expect.any(Function));
	});

	it('should dispatch action', () => {
		const spy = jest.fn();

		const result = withTarget(spy, 'GRID_VIEW');

		result();

		expect(spy).toHaveBeenCalled();
	});
});
