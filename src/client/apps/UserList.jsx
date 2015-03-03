
var User = React.createClass({
  render: function() {
    return (
      <li>{this.props.username}</li>
    );
  }
});

var UserList = React.createClass({
  loadUsersFromServer: function () {
    // TODO: get from server
    $.ajax({
      url: '/api/users',
      dataType: 'json',
      success: function(data) {
        this.setState({users: data.users});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/users', status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function () {
    return {
      users: this.props.users
    };
  },
  componentDidMount: function () {
    this.loadUsersFromServer();
    setInterval(this.loadUsersFromServer, this.props.pollInterval);
  },
  render: function() {
    var users = this.state.users || {};
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
