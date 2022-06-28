import { GET_OBJECTS_BEGIN, GET_OBJECTS_SUCCESS, GET_OBJECTS_FAILURE } from '../../constants';
import initialState from '../../store/initial-state';

const { grid } = initialState;
const { ui } = grid;

const gridUIReducer = (state = ui, action = null) => {
	switch (action.type) {
		case GET_OBJECTS_BEGIN: {
			return {
				...state,
				...{
					isLoading: true
				}
			};
		}
		case GET_OBJECTS_SUCCESS: {
			return {
				...state,
				...{
					isLoading: false,
					count: 0 // action.payload.count
				}
			};
		}
		case GET_OBJECTS_FAILURE: {
			const { error } = action.payload;

			return {
				...state,
				...{
					isLoading: false,
					count: 0, // action.payload.count,
					fetchError: error
				}
			};
		}
		default: {
			return state;
		}
	}
};

export default gridUIReducer;
