import { combineReducers } from 'redux';
import password from './password';
import engines from './engines';
import colors from './colors';

// Reducers list (just one for now)
const spicyPasswordApp = combineReducers({
  password,
  engines,
  colors,
});

export default spicyPasswordApp;
