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
  }

  handleOpenAccount() {
    this.setState({showForm: true})
  }

  handleCreateAccount() {
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
                                  />
                                  <FormControl
                                    placeholder="Enter password"
                                    id='open-account-password'
                                  />
                                  <FormControl
                                    placeholder="Enter starting balance"
                                    id='open-account-balance'
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