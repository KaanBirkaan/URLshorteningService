const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: String,
  FirstUrl: String,
  SecondUrl: String,
  date: { type: String, default: Date.now }
});

module.exports = mongoose.model('Url', urlSchema);
