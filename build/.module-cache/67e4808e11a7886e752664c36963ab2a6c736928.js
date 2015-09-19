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
            React.createElement(CommentList, null), 
            React.createElement(CommentForm, null), 
            React.createElement("button", {className: "btn btn-success"}, "Button")
          )
        );
      }
    });
        var CommentList = React.createClass({displayName: "CommentList",
          render: function() {
            return (
              React.createElement("div", {className: "commentList"}, 
                "Hello, world! I am a CommentList."
              )
            );
          }
        });

        var CommentForm = React.createClass({displayName: "CommentForm",
          render: function() {
            return (
              React.createElement("div", {className: "CommentForm"}, 
                "Hello, world! I am a CommentForm."
              )
            );
          }
        });

          React.render(
        React.createElement(Contents, null),
        document.getElementById('contents')
      );