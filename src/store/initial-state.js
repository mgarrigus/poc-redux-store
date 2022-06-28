// This file will centralize the entire app state
const initialState = {
	common: {}, // shared across all application components
	grid: { // only used for grid view
		ui: {
			isLoading: false,
			fetchError: null,
			count: 0,
			columns: [
				'name',
				'location',
				'type',
				'customerKey',
				'modified',
				'actions'
			]
		},
		data: {
			objects: []
		}
	}
};

export default initialState;
