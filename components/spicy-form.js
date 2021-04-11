import { useContext, useState } from "react";
import { LayoutContext } from "../context/layout";
import passwordEngines from "../core/spicy-rack";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

const saveService = (service) => {
  const spicyServices = getSavedServices();

  spicyServices.push(service);

  window.localStorage.setItem(
    "spicy-services",
    JSON.stringify([...new Set(spicyServices)])
  );
};

const getSavedServices = () => {
  const services =
    (global.window && (window.localStorage.getItem("spicy-services") ?? [])) ||
    [];

  try {
    return JSON.parse(services);
  } catch (e) {
    return [];
  }
};

const useSpicyPassword = () => {
  const [masterpassword, setMasterpassword] = useState("");
  const [service, setService] = useState("");

  const spicypassword = passwordEngines.build(masterpassword, service);

  return [setMasterpassword, setService, service, spicypassword];
};

function SpicyForm() {
  const [
    setMasterpassword,
    setService,
    service,
    spicyPassword,
  ] = useSpicyPassword();
  const [copied, copy] = useCopyToClipboard(spicyPassword);
  const layout = useContext(LayoutContext);

  if (service != "") {
    layout.setColorByDomain(`maincontent--${service.replace(/\./gi, "-")}`);
  }

  const spicyServices = getSavedServices();

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
          autoCorrect="off"
          autoCapitalize="none"
          autoComplete="off"
          list="spicy-services"
        />
        <datalist id="spicy-services">
          {spicyServices.map((spicyService) => (
            <option>{spicyService}</option>
          ))}
        </datalist>
      </fieldset>
      <fieldset>
        <label htmlFor="result">Your spicy password</label>
        <input id="result" type="text" value={spicyPassword} readOnly />
      </fieldset>
      <fieldset>
        <button
          type="button"
          onClick={() => {
            copy();
            saveService(service);
          }}
        >
          {copied ? `✅ Copied` : `Copy`} to clipboard
        </button>
      </fieldset>
    </form>
  );
}

export default SpicyForm;
