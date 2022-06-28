import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore () {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-undef

	const middleware = [thunk];

	middleware.push(createLogger());

	return createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
	);
}
