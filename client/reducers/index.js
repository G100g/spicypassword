import { combineReducers } from 'redux';
import password from './password';

// Reducers list (just one for now)
const spicyPasswordApp = combineReducers({
  password,
});

export default spicyPasswordApp;
