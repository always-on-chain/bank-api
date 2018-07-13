import React from 'react';
import OpenAccount from './OpenAccount.jsx'

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
        Sign In
        <OpenAccount />
      </div>
    )
  }
}

export default SignIn;