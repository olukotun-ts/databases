var schema = require('./orm-example');

module.exports = {
 messages: {
  get: function(req, res) {
    schema.Message.findAll()
      .then((resultOfQuery) => {
        res.json(resultOfQuery);
      });
  },
  post: function(req, res) {
    schema.User.findOrCreate({where: {username: req.body.username}})
      .spread((user, created) => {
        schema.Message.create({
          message: req.body.message
        })
        .then((message) => {
          res.sendStatus(201);
        });
      });
  }
 },

 users: {
  get: function(req, res) {
    schema.User.findAll()
      .then((users) => {
        res.json(users);
      });
  },
  post: function(req, res) {
    schema.User.findOrCreate({where: {username: req.body.username}})
      .spread((user, created) => {
        res.sendStatus(created ? 201 : 200);
      });
  }
 },

 rooms: {
  get: function(req, res) {
    schema.Room.findAll()
      .then((rooms) => {
        res.json(rooms);
      });

  },
  post: function(req, res) {
    schema.Room.findOrCreate({where: {roomname: req.body.roomname}})
      .spread((room, created) => {
        res.sendStatus(created ? 201 : 200);
      });
  }
 }
};

