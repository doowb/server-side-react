
var Remarkable = require('remarkable');
var md = new Remarkable();

var Comment = React.createClass({
  render: function() {
    var rawMarkup = md.render([
      '*',
      this.props.children.toString(),
      '*'
    ].join(''));
    return (
      <div className="comment">
        <h5 className="commentUser">{this.props.username}</h5>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

// Create a form that allows adding a new comment
var CommentForm = React.createClass({
  getInitialState: function () {
    return {
      username: this.props.username
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var username = this.state.username || this.props.username;
    var text = this.refs.text.getDOMNode().value.trim();
    console.log(username, text);
    if (!text || !username) {
      return;
    }
    this.props.onCommentSubmit({username: username, text: text});
    this.refs.text.getDOMNode().value = '';
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Say something..." ref="text" />
            <input className="btn btn.primary" type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
});

// Render a list of comments
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.comments.map(function (comment) {
      return (
        <Comment key={comment.key} username={comment.username}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="row">
        <div className="col-sm-12">
          {commentNodes}
        </div>
      </div>
    );
  }
});

var Chat = React.createClass({
  loadCommentsFromServer: function () {
    // TODO: get from server
    var comments = this.state.comments;
    var username = this.state.username || this.props.username;
    this.setState({comments: comments, username: username});
  },
  handleCommentSubmit: function (comment) {
    var username = this.state.username || this.props.username;
    var comments = this.state.comments;
    var newComments = comments.concat([comment]);
    this.setState({username: username, comments: newComments});
  },
  getInitialState: function () {
    return {
      comments: this.props.comments || [],
      username: this.props.username
    };
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function () {
    var username = this.state.username || this.props.username;
    return (
      <div>
        <CommentList comments={this.state.comments} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} username={username} />
      </div>
    );
  }
});

module.exports = Chat;
