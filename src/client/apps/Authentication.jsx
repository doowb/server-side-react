
var Authentication = React.createClass({
  getInitialState: function () {
    return {
      username: this.props.username || null
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var username = this.refs.username.getDOMNode().value.trim();
    if (!username) {
      return;
    }
    this.setState({username: username});
    this.refs.username.getDOMNode().value = '';
    this.props.onSignonSubmit({username: username});
  },
  handleLogout: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({username: null});
    this.props.onSignoutSubmit({username: username});
  },
  render: function() {
    var output = null;
    if (this.state.username) {
      output = (
        <form className="navbar-form navbar-right" onSubmit={this.handleLogout}>
          <div className="form-group">
            <span>Logged in as {this.state.username}</span>
          </div>
          <button type="submit" className="btn btn-primary">Sign out</button>
        </form>
      );
    } else {
      output = (
        <form className="navbar-form navbar-right" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Name" className="form-control" ref="username" />
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      );
    }
    return output;
  }
});

module.exports = Authentication;
