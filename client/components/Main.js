import React from 'react';
import FinalResult from './FinalResult';

const Main = ({ updatePassword, updateDomain, password }) => {

  function handlePasswordChange(event) {
    updatePassword(event.target.value);
  }

  function handleDomainChange(event) {
    updateDomain(event.target.value);
  }

  return (
    <div className="maincontent">
      <h1>Welcome to <em>Spicy Password</em></h1>

      <p>this is the</p>

      <div className="maincontent__password">
        <input type="password" placeholder="password" onChange={handlePasswordChange} />
      </div>

      <p>for my account on</p>

      <div className="maincontent__domain">
        <input type="text" placeholder="facebook.com" onChange={handleDomainChange} />
      </div>

      <p>and this is the result</p>

      <div className="maincontent__result">
        <input type="text" value={password.result} readOnly />
      </div>

    </div>
  );
};

export default Main;
