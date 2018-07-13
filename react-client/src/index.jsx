import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {}
    }
  }

  postOpenAccount(username, password, balance) {
    axios.post(`/accounts`, {
      username: username,
      password: password,
      balance: balance
    })
  }

  render() {
    return (
      <SignIn />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));