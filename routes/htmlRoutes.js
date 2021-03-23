// https://ui.dev/react-router-cannot-get-url-refresh/

const path = require('path');

module.exports = function (app) {
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    });
  });
};
