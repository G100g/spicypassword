import { SHA3 } from 'crypto-js';
import base64 from 'base-64';

function buildPassword(password, domain) {

  if (!password || !domain) return '';

  let new_password = base64.encode(SHA3(password + domain).toString()).substr(0, 10);

  // We need to have at least a number in my super password
  // So we take charcode of first and last new_password character and after first,

  let new_password_middle = Math.ceil(new_password.length / 2);
  let charCode = new_password.charCodeAt(new_password_middle);

  new_password = new_password.substr(0, new_password_middle) +  charCode + new_password.substr(new_password_middle);

  // and one of this special chars ^!@# adding the end
  new_password = '^' + new_password;

  return new_password;
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
