import { combineReducers } from 'redux';
import { filterActions } from 'redux-ignore';
// CONSTANTS
import { GRID_VIEW } from '../constants';
// DATA
import objectsReducer from './data/objects';
// UI
import gridUIReducer from './ui/grid';

export default combineReducers({
	// Common nodes can be shared anywhere across the application
	// common: combineReducers({}),
	// UI nodes contain ui and data information.
	grid: combineReducers({
		ui: gridUIReducer,
		data: combineReducers({
			// We can use redux-ignore or create a custom function here to use the same action to display data with a specific target
			// We can also use ignoreActions when we add to this object to ignore certain actions (i.e. ignoreActions(reducer, [ARRAY_OF_ACTIONS]))
			objects: filterActions(objectsReducer, (action) => action.target === GRID_VIEW)
		})
	})
});
