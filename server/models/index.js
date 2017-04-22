var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      // db.dbConnection.connect();
      // db.dbConnection.query();
      // db.dbConnection.end();
    }, // a function which produces all the messages
    post: function (body, response) {
      console.log(body, 'BODYIZZZLEEE')
      db.dbConnection.connect();

      module.exports.users.get(body, (result) => {
        var id = result.length > 0 ? result[0].id : undefined;

        var message = body.message;
        if (id) {
          db.dbConnection.query('INSERT INTO messages SET ?', {user_id: id, message: message}, function(err, results) {
              if (err) {
                throw err;
              }
              response.end(JSON.stringify(results));
          });
        } else {
          module.exports.users.post(body, (result) => {
            module.exports.users.post(body, response);
          });
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (body, callback) {
      var username = body.username;
      db.dbConnection.query('SELECT id FROM users WHERE name = ?', [username], (err, results) => {
        return callback(results);
      });
    },
    post: function (body, callback) {
      var username = body.username
      db.dbConnection.query('INSERT INTO users SET ?', {name: username}, (err, results) => {
        return callback(results);
      });
    }
  },

  rooms: {
    get: function (body, callback) {
      var roomname = body.roomname;
      db.dbConnection.query('SELECT id FROM rooms WHERE name = ?', [roomname], (err, results) => {
          return callback(results);
      })
    },
    post: function (body, callback) {
      var roomname = body.roomname;
      db.dbConnection.query('INSERT INTO rooms SET ?', {name: roomname}, (err, results) => {
        return callback(results);
      });
    }
  }
};

