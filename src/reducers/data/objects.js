import { GET_OBJECTS_BEGIN, GET_OBJECTS_SUCCESS, GET_OBJECTS_FAILURE } from '../../constants';
import initialState from '../../store/initial-state';

const { grid } = initialState;
const { data } = grid;
const { objects } = data;

const objectsReducer = (state = objects, action = null) => {
	switch (action.type) {
		case GET_OBJECTS_BEGIN: {
			return state;
		}
		case GET_OBJECTS_SUCCESS: {
			// const items = action.payload.items;
			return state;
			// update state with new objects and other data
		}
		case GET_OBJECTS_FAILURE: {
			return state;
			// update with any error data we need other than ui messaging
		}
		default: {
			return state;
		}
	}
};

export default objectsReducer;
