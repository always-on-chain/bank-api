import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class MakeTransaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: props.account,
      amount: 0
    }

    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleWithdrawChange = this.handleWithdrawChange.bind(this);
    this.makeTransaction = props.makeTransaction.bind(this);
    this.signOut = props.signOut.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state.account = nextProps.account;
  }

  handleDepositChange(event) {
    this.setState({amount: parseInt(event.target.value)})
  }

  handleWithdrawChange(event) {
    this.setState({amount: parseInt(event.target.value)})
  }

  render() {
    return (
      <form id="transaction-form">
        <h3>Hello {this.state.account.username}</h3>
        <p id="current-balance">Current Balance: {this.state.account.balance}</p>
        <div id="deposit-form-button">
          <FormControl
            placeholder="Deposit Amount"
            id="signin-deposit"
            onChange={this.handleDepositChange}
          />
          <Button id="make-deposit" 
                  bsStyle="primary" 
                  bsSize="xs" 
                  onClick={() => {this.makeTransaction('deposit', this.state.amount)}} >
                  Deposit
          </Button>
        </div>
        <div id="withdraw-form-button">
          <FormControl
            placeholder="Withdraw Amount"
            id='signin-withdraw'
            onChange={this.handleDepositChange}
          />
          <Button id="make-withdraw" 
                  bsStyle="primary" 
                  bsSize="xs" 
                  onChange={this.handleWithdrawChange}
                  onClick={() => {this.makeTransaction('withdraw', this.state.amount)}}>
                  Withdraw
          </Button>
        </div>

        <Button bsStyle="success" 
                id="signin-button" 
                onClick={()=>{this.signOut()}}>
                Sign Out
        </Button>
      </form>
    )
  }
}

export default MakeTransaction;