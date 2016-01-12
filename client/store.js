import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { monitor } from './reducers/monitorReducer';

const rootReducer = combineReducers({
  monitor
});

export const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(rootReducer);