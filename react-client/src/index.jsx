import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn.jsx';
import OpenAccount from './components/OpenAccount.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {}
    }

    this.postOpenAccount = this.postOpenAccount.bind(this);
  }

  postOpenAccount(username, password, balance) {
    console.log(username, password, balance)
    axios.post(`/accounts`, {
      username: username,
      password: password,
      balance: balance
      })
      .then((response) => {
        console.log('successful post request', response)
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