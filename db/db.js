const mongoose = require('mongoose');

const DB = async (url) => {
  try {
    await mongoose.connect(url).then(console.log('connected to db'));
  } catch (error) {
    console.log(error);
  }
};
module.exports = DB;
