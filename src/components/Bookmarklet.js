import React from 'react';
import conf from '../../package.json';
import '../styles/Bookmarklet.css';

const Bookmarklet = (props) => {

  const bookmarklet = `javascript:(function (base_url) {
    var result = base_url + '#' + window.location.host;
    window.open(result);
  })('${conf.homepage}')`;

  return (
    <div className="bookmarklet">
      <p>Use this bookmarklet for quicly access from domain<br />
      <a href={bookmarklet}>Get Password</a>
      </p>
    </div>
  );
};

export default Bookmarklet;