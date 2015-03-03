'use strict';
var routes = require('connect-route');

module.exports = function () {

  var data = {};
  data.comments = [];
  data.users = {};

  function json (res, obj) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj));
  }

  return routes(function (router) {
    router.get('/comments', function (req, res, next) {
      json(res, {comments: data.comments});
    });

    router.post('/comments', function (req, res, next) {
      data.comments.push(req.body);
      json(res, {comments: data.comments});
    });

    router.get('/users', function (req, res, next) {
      json(res, {users: data.users});
    });

    router.post('/users', function (req, res, next) {
      var user = req.body;
      console.log('user', user);
      if (!data.users[user.username]) {
        data.users[user.username] = 1;
      }
      json(res, {users: data.users});
    });

    router.delete('/users/:id', function (req, res, next) {
      var username = req.params.id;
      if (data.users[username]) {
        data.users[username] = 0;
      }
      json(res, {users: data.users});
    });
  });
}
