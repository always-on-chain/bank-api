import React from 'react';

class OpenAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      balance: null
    }
  }

  render() {
    return (
      <h1>Open Account</h1>
    )
  }
}

export default OpenAccount;