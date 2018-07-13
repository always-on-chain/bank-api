import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {}
    }
    
  }

  render() {
    console.log('hi')
    return (
      <h3>This is your account</h3>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));