import { GET_OBJECTS_BEGIN, GET_OBJECTS_FAILURE, GET_OBJECTS_SUCCESS } from '../constants';

const getObjects = () => async (dispatch) => {
	dispatch({ type: GET_OBJECTS_BEGIN });

	try {
		// replace with fetch, i.e. await createFetch(params)
		dispatch({
			type: GET_OBJECTS_SUCCESS,
			payload: {
				objects: [], // response.items,
				count: 0 // response.count
			}
		});
	} catch (error) {
		dispatch({
			type: GET_OBJECTS_FAILURE,
			payload: {
				error
			} // payload error
		});
	}
};

export default getObjects;
