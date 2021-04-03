import { SHA3 } from "crypto-js";
// import base64 from 'base-64';

function build(password, domain) {
  if (!password || !domain) return "";

  let new_password = btoa(SHA3(password + domain).toString()).substr(0, 10);

  // We need to have at least a number in my super password
  // So we take charcode of first and last new_password character and after first,

  let new_password_middle = Math.ceil(new_password.length / 2);
  let charCode = new_password.charCodeAt(new_password_middle);

  new_password =
    new_password.substr(0, new_password_middle) +
    charCode +
    new_password.substr(new_password_middle);

  // and one of this special chars ^!@# adding the end
  new_password =
    addSymbol(password.length + domain.length) +
    new_password +
    addSymbol(password.length + new_password.length + domain.length);

  return new_password;
}

export const symbols = ["#", "%", "^", "$", "[", "}", "@", "&"];

export function addSymbol(length) {
  let index = Math.floor(length / symbols.length);
  index *= symbols.length;
  index = length - index;
  return symbols[index];
}

export default {
  build: (password, domain) => {
    return build(password, domain);
  },
};
