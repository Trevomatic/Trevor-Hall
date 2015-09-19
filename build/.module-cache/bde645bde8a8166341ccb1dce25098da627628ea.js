var Contents = React.createClass({displayName: "Contents",
  render: function() {
    return (
      React.createElement("div", {className: "contents"}, 
        React.createElement(CommentBox, null)
      )
    )
  }
});   

var CommentBox = React.createClass({displayName: "CommentBox",
      render: function() {
        return (
          React.createElement("div", {className: "commentBox col-sm-6 col-sm-offset-3"}, 
            React.createElement("h1", null, "Comments"), 
React.createElement(Home, null), 
            React.createElement("button", {className: "btn btn-success"}, "Button")
          )
        );
      }
    });

          React.render(
        React.createElement(Contents, null),
        document.getElementById('contents')
      );