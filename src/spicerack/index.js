import engineV1 from './engine-v1';
import engineV2 from './engine-v2';

let currentVersion;
let engines = {
  '1': engineV1,
  '2': engineV2,
};

const passwordEngines = {

  build(password, domain) {
      return engines[currentVersion].build(password, domain);
    },

  getEngines() {
      return Object.keys(engines);
    },

  setVersion(version) {
      return currentVersion = version;
    },

  getVersion() {
      return currentVersion;
    },

};

passwordEngines.setVersion(1);

export default passwordEngines;

export const buildPassword = passwordEngines;
