import { buildPassword } from '../spicerack';

const password = (state = { result: '', password: '', domain: '' }, action) => {

  let saltedPassword = '';

  switch (action.type) {

    case '@@INIT':

    if (window.location.hash) {
      return { ...state, domain: window.location.hash.substr(1).replace(/www\./, '') };
    }

    case 'UPDATE_PASSWORD':

      // Apply password transformation
      if (action.value) {
        saltedPassword = buildPassword.build(action.value, state.domain);
      }

      return { ...state, result: saltedPassword, password: action.value };
      // return Object.assign({}, state, { result: saltedPassword, password: action.value });

    case 'UPDATE_DOMAIN':

      // Apply password transformation

      if (action.value) {
        saltedPassword = buildPassword.build(state.password, action.value);
      }

      return { ...state, result: saltedPassword, domain: action.value };
      // return Object.assign({}, state, { result: saltedPassword, domain: action.value });

    default:
      return state;

  }
};

export default password;
