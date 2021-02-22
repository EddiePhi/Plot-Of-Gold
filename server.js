const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gardening_DB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// routes
app.use(require("./routes/apiRoutes.js"));
require('./routes/htmlRoutes.js')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});