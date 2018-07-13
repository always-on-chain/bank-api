import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {}
    }
    
  }

  render() {
    return (
      <SignIn />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));