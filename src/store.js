import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos, user } from './components/reducers';

const reducer = {
  todos,
  user
};

const rootReducer = combineReducers(reducer);

export const configureStore = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);