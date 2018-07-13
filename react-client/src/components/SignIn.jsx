import React from 'react';
import OpenAccount from './OpenAccount.jsx';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <form id="sign-in-form">
          <FormControl
            placeholder="Enter username"
            id="signin-username"
          />
          <FormControl
            placeholder="Enter password"
            id='signin-password'
          />
          <Button bsStyle="success" id="signin-button">Sign In</Button>

        </form>
      </div>
    )
  }
}

export default SignIn;