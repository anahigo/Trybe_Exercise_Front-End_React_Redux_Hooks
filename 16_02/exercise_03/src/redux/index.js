import { createStore, combineReducers } from 'redux';
import { MOVE_CAR,  CHANGE_SIGNAL } from './actionCreators';

const initialStateSignal = {
  signal: {
    color: 'red',
  }
}

function signalReducer(state = initialStateSignal, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default: 
      return state;
  }
}

const initialStateCars = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

function carsReducer(state = initialStateCars, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  signalReducer,
  carsReducer,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;