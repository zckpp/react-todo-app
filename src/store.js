import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos } from './components/reducers';

const reducer = {
  todos,
};

const rootReducer = combineReducers(reducer);

export const configureStore = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);