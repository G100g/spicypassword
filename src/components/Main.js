import React from 'react';
import Bookmarklet from './Bookmarklet';

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

  let domainClass = 'maincontent maincontent--' + password.domain.replace('.', '-');

  return (
    <div className={domainClass}>
      <h1>Welcome to <em>Spicy Password</em></h1>

      <p>type your personal and unique</p>

      <div className="maincontent__password">
        <input type="password" placeholder="password" onChange={handlePasswordChange} />
      </div>

      <p>for your account on domain</p>

      <div className="maincontent__domain">
        <input type="text" placeholder="facebook.com" defaultValue={password.domain} onChange={handleDomainChange} />
      </div>

      <p>and get the new spicy password</p>

      <div className="maincontent__result">
        <input type="text" value={password.result} readOnly />
      </div>

      <div className="maincontent__engine">
        <select onChange={handleSelectEngine}>
          { engines.availables.map(engine => <option key={engine} value={engine}>Engine v{engine}</option>) }
        </select>
      </div>

      <Bookmarklet />

    </div>
  );
};

export default Main;
