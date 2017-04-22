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
      module.exports.users.post(body, (v) => v)


      // users.get(body.username, function(data) {
      //   console.log(data, 'DATAIZZZZLEE');
      // });
      // On POST request:
        // if (users.get === true)
          // Add message to table.
          // Add user_id
          // Add room_id
          // Add timestamp
        // else
          // we call users.post
          // retrieves user.id from call
      // passes the user id into the message object
      // inserts
        // Add message to table.
        // Add user_id
        // Add room_id
        // Add timestamp
        // with the new id

      // db.dbConnection.connect();

      // db.dbConnection.query();

      // db.dbConnection.end();
    } // a function which can be used to insert a message into the database
  },
// connection.query('INSERT INTO posts SET ?', {title: 'test'}, function (
  users: {
    get: function (username, callback) {
      db.dbConnection.connect();
      db.dbConnection.query(`SELECT id FROM users WHERE name = ${username}`, [], function(err, results) {
        if (err) {
          throw err;
        }
        return callback(results);
      });
    },
    post: function (body, callback) {
      db.dbConnection.query('INSERT INTO users SET ?', {name: body.username}, function(err, results) {
        console.log(results, 'resultsizzle');
        return results;
      });
    }
  },

  rooms: {
    // Ditto as above.
    get: function () {
      // takes a roomname as an argument
        // runs a select query based on the roomname
        // returns the roomname if one exists otherwise it returns undefined
    },
    post: function () {
      // Check if roomname is already in table
      // If yes, get room_id (need to insert into join table).
      // If no,
        // add roomname to table.
        // get room_id.
    }
  }
};

