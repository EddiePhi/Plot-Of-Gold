// referencing code from https://github.com/ksentak/react-user-auth

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const PORT = process.env.PORT || 3001;
const app = express();


////////////////////// auth test 
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
require('dotenv').config();
require('./config/keys');
const user = require('./routes/auth/userAuth');

// // Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // Passport middleware
app.use(passport.initialize());

// // Passport config
require('./config/passport')(passport);

// // Routes
app.use('/userAuth', user);

  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });

////////////////////// auth test end




app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/plotOfGold", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));;

// routes
app.use(require("./routes/apiRoutes"));
require("./routes/htmlRoutes.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



















