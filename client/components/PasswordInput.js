import React from 'react';

// class PasswordInput extends React.Component {
//
//   render() {
//     return <input type="text" value="" />;
//   }
//
// }

const PasswordInput = ({ updatePassword, domain }) => {

  return {
    handleChange(event) {
      updatePassword(event.target.value, domain);
    },

    render() {
      return (<input type="text" onChange={this.handleChange} />);
    },
  };

};

export default PasswordInput;
