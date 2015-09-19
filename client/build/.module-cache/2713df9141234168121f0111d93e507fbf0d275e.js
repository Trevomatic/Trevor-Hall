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
          React.createElement("div", {className: "commentBox"}, 
            React.createElement(Home, null), 
       
            React.createElement(About, null), 
            React.createElement(Services, null), 
            React.createElement(Projects, null)
          )
        );
      }
    });

          React.render(
        React.createElement(Contents, null),
        document.getElementById('contents')
      );