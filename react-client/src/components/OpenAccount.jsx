import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';

class OpenAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      createdAccount: false,
      username: '',
      password: '',
      balance: null
    }

    this.postOpenAccount = props.postOpenAccount.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleBalanceChange = this.handleBalanceChange.bind(this);
  }

  handleOpenAccount() {
    this.setState({showForm: true})
  }

  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange (event) {
    this.setState({
      password: event.target.value
    })
  }

  handleBalanceChange (event) {
    this.setState({
      balance: event.target.value
    })
  }

  handleCreateAccount() {
    this.postOpenAccount(this.state.username, this.state.password, this.state.balance)
    this.setState({
      showForm: false,
      createdAccount: true
    })

  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={()=> {this.handleOpenAccount()}} id="open-account-button">Open Account</Button>
        {this.state.showForm ? <form id="open-account-form">
                                  <FormControl
                                    placeholder="Enter username"
                                    id="open-account-username"
                                    type="username"
                                    onChange={this.handleUsernameChange}
                                  />
                                  <FormControl
                                    placeholder="Enter password"
                                    id='open-account-password'
                                    onChange={this.handlePasswordChange}
                                  />
                                  <FormControl
                                    placeholder="Enter starting balance"
                                    id='open-account-balance'
                                    onChange={this.handleBalanceChange}
                                  />
                                  <Button bsStyle="success" onClick={()=> {this.handleCreateAccount()}} id="create-account-button">Create Account</Button>
                                </form> : null
        }
        {this.state.createdAccount ? <div id="created-account">Sign in above</div> : null
        }
                                
      </div>
    )
  }
}

export default OpenAccount;