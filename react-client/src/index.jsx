import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn.jsx';
import OpenAccount from './components/OpenAccount.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.postOpenAccount = this.postOpenAccount.bind(this);
  }

  postOpenAccount(username, password, balance) {
    console.log(typeof parseInt(balance))
    axios.post(`/accounts`, {
      username: username,
      password: password,
      balance: balance
      })
      .then((response) => {
        console.log('succesfully opened an account', response)
      })
      .catch((error) => {
        console.log('failed to open an account', error);
      })
  }

  render() {
    return (
      <div>
        <SignIn />
        <OpenAccount postOpenAccount={this.postOpenAccount} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));