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
  renderAll();
}

function onSignoutSubmit (user) {
  var username = data.username;
  if (users[data.username]) {
    delete users[data.username];
  }
  data.username = null;
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
    <Chat comments={comments} username={data.username} pollInterval={10000} />,
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
    <UserList users={users} />,
    document.getElementById('userlist')
  );
}

renderAll();
