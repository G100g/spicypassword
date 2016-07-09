
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
