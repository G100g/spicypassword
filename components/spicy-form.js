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
      <fieldset className="maincontent__password">
        <label htmlFor="masterpassword">Master password</label>
        <input
          id="masterpassword"
          type="password"
          placeholder="supersecretpassword"
          onChange={({ target }) => setMasterpassword(target.value)}
          autoComplete="current-password"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="service">Service name</label>
        <input
          id="service"
          type="text"
          placeholder="facebook.com"
          // defaultValue={password.domain}
          onChange={({ target }) => setService(target.value)}
          autocorrect="off"
          autocapitalize="none"
          autocomplete="off"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="result">Your spicy password</label>
        <input id="result" type="text" value={spicyPassword} readOnly />
      </fieldset>
      <fieldset>
        <button>Copy to clipboard</button>
      </fieldset>
    </form>
  );
}

export default SpicyForm;
