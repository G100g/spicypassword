import { useState } from "react";
import passwordEngines from "../core/spicy-rack";

const useSpicyPassword = () => {
  const [masterpassword, setMasterpassword] = useState("");
  const [service, setService] = useState("");

  const spicypassword = passwordEngines.build(masterpassword, service);

  return [setMasterpassword, setService, spicypassword];
};

function SpicyForm() {
  const [setMasterpassword, setService, spicyPassword] = useSpicyPassword();

  return (
    <form>
      <fieldset>
        <label htmlFor="masterpassword">Type master password</label>
        <input
          id="masterpassword"
          type="password"
          placeholder="password"
          onChange={({ target }) => setMasterpassword(target.value)}
          autoComplete="current-password"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="service">
          Type your service name (a domain usually)
        </label>
        <input
          id="service"
          type="text"
          placeholder="facebook.com"
          // defaultValue={password.domain}
          onChange={({ target }) => setService(target.value)}
          autoCapitalize="off"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="result">Get your spicy password</label>
        <input id="result" type="text" value={spicyPassword} readOnly />
        <button>Copy to clipboard</button>
      </fieldset>
    </form>
  );
}

export default SpicyForm;
