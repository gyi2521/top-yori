const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require("./routes/api-routes")(app);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactDishApp");
//mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password12@ds141043.mlab.com:41043/heroku_zzcz8hmq")
//mongoose.connect('mongodb://gyi:NamJee01@ds121282.mlab.com:21282/heroku_js7qh2wp', {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI || "mongodb://gina:NamJee1@ds141043.mlab.com:41043/heroku_zzcz8hmq");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
