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

  users: {
    // Ditto as above.
    get: function () {
      // takes a user as an argument
      // runs a SELECT query based on the username
      // returns the id for that user
    },
    post: function () {
      // Create var for user_id
      // Check if username is already in table
      // If yes, get user_id from table (need to insert into join table)
      // If no,
        // add username to table.
        // get user_id.
      // returns an id
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

