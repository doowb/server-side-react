var Authentication = require('./apps/Authentication.jsx');
var UserList = require('./apps/UserList.jsx');
var Chat = require('./apps/Chat.jsx');

var data = {
  username: null
};


function onSignonSubmit (user) {
  data.username = user.username;
  if (!users[data.username]) {
    users[data.username] = 1;
  }
  console.log('data.username', data.username);
  $.ajax({
    url: '/api/users',
    dataType: 'json',
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({ username: data.username }),
    success: function(data) {
      console.log('user online');
    }.bind(this),
    error: function(xhr, status, err) {
      console.error('/api/users', status, err.toString());
    }.bind(this)
  });
  renderAll();
}

function onSignoutSubmit (user) {
  var username = data.username;
  if (users[data.username]) {
    delete users[data.username];
  }
  data.username = null;
  $.ajax({
    url: '/api/users/' + username,
    dataType: 'json',
    type: 'DELETE',
    success: function(data) {
      console.log('user offline');
    }.bind(this),
    error: function(xhr, status, err) {
      console.error('/api/users', status, err.toString());
    }.bind(this)
  });
  renderAll();
}

var comments = [];
var users = {};

function renderAll () {
  renderAuthentication();
  renderUserList();
  renderChat();
}

function renderChat () {
  React.render(
    <Chat comments={comments} username={data.username} pollInterval={2000} />,
    document.getElementById('chat')
  );
}

function renderAuthentication () {
  React.render(
    <Authentication onSignonSubmit={onSignonSubmit} onSignoutSubmit={onSignoutSubmit} username={data.username} />,
    document.getElementById('navbar')
  );
}

function renderUserList () {
  React.render(
    <UserList users={users} pollInterval={2000} />,
    document.getElementById('userlist')
  );
}

renderAll();
