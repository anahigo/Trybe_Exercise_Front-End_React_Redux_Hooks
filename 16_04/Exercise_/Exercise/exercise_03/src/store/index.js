// configuração geral do redux 
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk'; 
import reducer from '../reducers';

const rootReducer = combineReducers({
  character: reducer
})

const store = createStore(
  rootReducer, 
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
