import { SHA3 } from 'crypto-js';

function buildPassword(password, domain) {
  return SHA3(password, domain).toString().substr(0, 10);
}

const password = (state = { result: '', password: '', domain: '' }, action) => {

  let saltedPassword = '';

  switch (action.type) {

    case 'UPDATE_PASSWORD':

      // Apply password transformation
      if (action.value) {
        saltedPassword = buildPassword(action.value, state.domain);
      }

      return { ...state, result: saltedPassword, password: action.value };
      // return Object.assign({}, state, { result: saltedPassword, password: action.value });

    case 'UPDATE_DOMAIN':

      // Apply password transformation

      if (action.value) {
        saltedPassword = buildPassword(state.password, action.value);
      }

      return { ...state, result: saltedPassword, domain: action.value };
      // return Object.assign({}, state, { result: saltedPassword, domain: action.value });

    default:
      return state;

  }
};

export default password;
