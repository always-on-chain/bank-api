import React from 'react';
import OpenAccount from './OpenAccount.jsx';
import FormControl from 'react-bootstrap/lib/FormControl';

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
        <form id="sign-in">
          <FormControl
            placeholder="Enter username"
            id="signin-username"
          />
          <FormControl
            placeholder="Enter password"
            id='signin-password'
          />

        </form>
        <OpenAccount />
      </div>
    )
  }
}

export default SignIn;