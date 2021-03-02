// Exports Schemas so that in other files they can be imported with require(relativePath/models)

module.exports = {
  Plant: require("./plant"),
  Plot: require("./plot"),
  User: require("./user"),
  ZipCode: require("./zipCode"),
  ForumnThread: require("./forumThread"),
  Location: require("./Location"),
};
