import React from 'react';
//import FinalResult from './FinalResult';

const Main = ({ updatePassword, updateDomain, selectEngine, password, engines, colors }) => {

  function handlePasswordChange(event) {
    updatePassword(event.target.value);
  }

  function handleDomainChange(event) {
    updateDomain(event.target.value);
  }

  function handleSelectEngine(event) {
    selectEngine(event.target.value);
    updatePassword(password.password);
  }

  let status = {
    backgroundColor: colors.background
  };

  return (
    <div className="maincontent" style={ status }>
      <h1>Welcome to <em>Spicy Password</em></h1>

      <p>this is the</p>

      <div className="maincontent__password">
        <input type="password" placeholder="password" onChange={handlePasswordChange} />
      </div>

      <p>for my account on</p>

      <div className="maincontent__domain">
        <input type="text" placeholder="facebook.com" defaultValue={password.domain} onChange={handleDomainChange} />
      </div>

      <p>and this is the result</p>

      <div className="maincontent__result">
        <input type="text" value={password.result} readOnly />
      </div>

      <div className="maincontent__engine">
        Engine
        <select onChange={handleSelectEngine}>
          { engines.availables.map(engine => <option key={engine} value={engine}>{engine}</option>) }
        </select>
      </div>

    </div>
  );
};

export default Main;
