const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const KeywordSchema = new Schema({
  content: {
    type: String,
  }
});

// This creates our model from the above schema, using Mongoose's model method
var Keyword = mongoose.model('Keyword', KeywordSchema);

// Export the Tweet model
module.exports = Keyword;