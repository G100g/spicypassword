import { buildPassword } from '../spicerack';

const engines = (state = { availables: buildPassword.getEngines(), version: 2 }, action) => {

  switch (action.type) {

    case 'SELECT_ENGINE':

      if (action.value) {
        buildPassword.setVersion(action.value);
      }

      return { ...state, version: action.value };

    default:
      return state;

  }
};

export default engines;
