const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bank-accounts');

const accountSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  balance: Number
})

const Account = mongoose.model('Account', accountSchema);

const storeAccount = (data) => {
  let account = new Account({
    username: data.username,
    password: data.password,
    balance: data.balance
  });
  account.save((err) => {
    // if (err) return console.error(err);
  });
}

const getAccount = (username, password, callback) => {
  Account.find({username: username, password: password}, (err, account) => {
    console.log('new account', account)
    callback(account)
  })
}

// Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }, function (err, tank) {
//   if (err) return handleError(err);
//   res.send(tank);
// });

const makeTransaction = (id, newBalance, callback) => {
  Account.findByIdAndUpdate(id, {$set: {balance: newBalance}}, {new: true}, (err, account) => {
    callback(account);
  })
}

module.exports = {
  storeAccount,
  getAccount,
  makeTransaction
}