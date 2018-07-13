import React from 'react';
import Button from 'react-bootstrap/lib/Button';

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
      <Button bsStyle="primary">Open Account</Button>
    )
  }
}

export default OpenAccount;