var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // a function which handles a get request for all messages
      // models.messages.get();
    },
    post: function (req, res) {
      // a function which handles posting a message to the database
      // Invoke post fn from models/index.js
      models.messages.post(req.body, res);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // models.users.get();
    },
    post: function (req, res) {
      // models.users.post();
    }
  },

  controllers: {
    get: function(req, res) {

    },
    post: function(req, res) {

    }
  }
};

