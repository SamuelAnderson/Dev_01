
var React = require('react');




var Todo = React.createClass({
  render: function() {
    return (
	      <tr>
	      	<td>{this.props.author}</td>
	      	<td>{this.props.children}</td>
	      </tr>
	      <tr>
	      	<td>{this.props.author}</td>
	      	<td>{this.props.children}</td>
	      </tr>
	      //<tr><td>{this.props.children}</td></tr>
    );
  }
});

    var TodoList = React.createClass({
      render: function() {
        return (
          <div className = "todoList">
            <table>
              <tbody>
                <Todo title="Shopping">Milk</Todo>
                <Todo title="Hair cut">13:00</Todo>
              </tbody>
            </table>
          </div>
        );
      }
    });

/********************************************/
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});


module.exports = TodoList;