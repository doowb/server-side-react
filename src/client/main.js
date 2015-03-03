var Authentication = require('./apps/Authentication.jsx');
var UserList = require('./apps/UserList.jsx');
var Chat = require('./apps/Chat.jsx');

var data = {
  username: null
};


function onSignonSubmit (user) {
  data.username = user.username;
  renderAll();
}

function onSignoutSubmit (user) {
  data.username = null;
  renderAll();
}

var comments = [];

function renderAll () {
  renderAuthentication();
  renderUserList();
  renderChat();
}

function renderChat () {
  console.log('renderChat', data.username);
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
    <UserList />,
    document.getElementById('userlist')
  );
}

renderAll();
