import { createContext, useState } from "react";

export const LayoutContext = createContext({
  domain: "",
  setColorByDomain: () => {},
});

export const { Consumer, Provider } = LayoutContext;

export const LayoutProvider = ({ children }) => {
  const [domain, setDomain] = useState("");

  return (
    <Provider value={{ domain, setColorByDomain: setDomain }}>
      {children}
    </Provider>
  );
};
