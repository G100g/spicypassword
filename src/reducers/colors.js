import DomainColors from '../colors';

const colors = (state = { background: '#fff' }, action) => {

  switch (action.type) {

    case 'UPDATE_DOMAIN':

      // Apply password transformation
      let background = "";

      if (action.value) {
        background = DomainColors.match(action.value) || '';
      }

       return { ...state, background };

      // return Object.assign({}, state, { result: saltedPassword, domain: action.value });

    default:
      return state;

  }
};

export default colors;
