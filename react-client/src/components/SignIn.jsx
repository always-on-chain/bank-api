import React from 'react';
import OpenAccount from './OpenAccount.jsx';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import MakeTransaction from './MakeTransaction.jsx'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      username: '',
      password: '',
      incorrect: false,
      account: {},
    }

    this.handleClick = this.handleClick.bind(this);
    this.getAccount = this.getAccount.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.makeTransaction = this.makeTransaction.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getAccount(username, password) {
    axios.post(`/login`, {
      username: username,
      password: password,
      })
      .then((response) => {
        console.log('successful post request for login', response.data);
        if (response.data.length > 0) {
          this.setState({
            signedIn: true,
            incorrect: false,
            account: response.data[0]
          })
        } else {
          this.setState({
            incorrect: true
          })
        }
      })
      .catch((error) => {
        console.log('failed post requst for login', error);
      })
  }

  makeTransaction(type, amount) {
    let newBalance;

    if (type === 'deposit') {
      newBalance = this.state.account.balance + amount;
    } else {
      newBalance = this.state.account.balance - amount;
    }
    
    axios.post(`/accounts/${this.state.account._id}/${type}`, {
      newBalance: newBalance
    })
    .then((response) => {
      console.log('response data',response.data)
      this.setState({account: response.data})
    })
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleClick() {    
    this.setState({
      username: this.state.username,
      password: this.state.password
    })
    this.getAccount(this.state.username, this.state.password);
  }

  signOut() {
    this.setState({signedIn: false})
  }

  render() {
    return (
      <div>
        <form id="sign-in-form">
          <FormControl
            placeholder="Enter username"
            id="signin-username"
            onChange={this.handleUsernameChange}
          />
          <FormControl
            placeholder="Enter password"
            id='signin-password'
            onChange={this.handlePasswordChange}
          />
          <Button bsStyle="success" id="signin-button" onClick={this.handleClick}>Sign In</Button>
        </form>
        {this.state.signedIn ? 
          <MakeTransaction account={this.state.account} 
                           makeTransaction={this.makeTransaction}
                           signOut={this.signOut} /> : null
        }
        {this.state.incorrect ? 
          <p id="signin-incorrect">The Online ID or Passcode you entered does not match our records.</p> : null
        }
      </div>
    )
  }
}

export default SignIn;