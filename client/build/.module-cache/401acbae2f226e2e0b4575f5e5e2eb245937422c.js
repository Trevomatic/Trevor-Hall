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
          React.createElement("div", null, 
            React.createElement(Home, null)
          )
        );
      }
    });

          React.render(
        React.createElement(Contents, null),
        document.getElementById('contents')
      );