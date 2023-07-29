const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  last_login: {
    type: Date,
    default: null,
  },
  registered_on: {
    type: Date,
    default: Date.now,
  },
});

const Account = mongoose.model('account', accountSchema);

module.exports = Account;
