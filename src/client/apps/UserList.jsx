
var User = React.createClass({
  render: function() {
    return (
      <li>{this.props.username}</li>
    );
  }
});

var UserList = React.createClass({
  render: function() {
    var users = this.props.users || {};
    var keys = Object.keys(users);
    var userNodes = keys.filter(function (key) {
      return users[key];
    }).map(function (key) {
      if (!users[key]) return;
      return (
        <User key={key} username={key} />
      );
    });
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul>
            {userNodes}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = UserList;
