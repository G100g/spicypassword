
export const updatePassword = (text) => {
  return {
    type: 'UPDATE_PASSWORD',
    value: text,
  };
};


export const updateDomain = (domain) => {
  return {
    type: 'UPDATE_DOMAIN',
    value: domain,
  };
};

// export const selectEngine = (version) => {
//   return {
//     type: 'SELECT_ENGINE',
//     value: version,
//   };
// };

export const selectEngine = (version) => {
  return {
    type: 'SELECT_ENGINE',
    value: version,
  };
};
