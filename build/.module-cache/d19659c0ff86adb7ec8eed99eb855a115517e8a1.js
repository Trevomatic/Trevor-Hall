var Contents = React.createClass({displayName: "Contents",
  render: function() {
    return (
      React.createElement("div", {className: "contents"}, 
        React.createElement(CommentBox, null)
      )
    )
  }
});   


React.render(
  React.createElement(Contents, null),
  document.getElementById('contents')
);