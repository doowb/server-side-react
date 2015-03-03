
var HelloWorld = React.createClass({
  loadRemoteMessage: function () {
    this.props.loadMessage(function (message) {
      this.setState({message: message});
    }.bind(this));
  },
  getInitialState: function () {
    return {
      message: this.props.message || 'Hello Client World'
    }
  },
  componentDidMount: function () {
    this.loadRemoteMessage();
  },
  render: function () {
    return (
      <span>{this.state.message}</span>
    );
  }
});
