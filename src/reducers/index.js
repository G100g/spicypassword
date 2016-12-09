import { combineReducers } from 'redux';
import password from './password';
import engines from './engines';

// Reducers list (just one for now)
const spicyPasswordApp = combineReducers({
  password,
  engines,
});

export default spicyPasswordApp;
