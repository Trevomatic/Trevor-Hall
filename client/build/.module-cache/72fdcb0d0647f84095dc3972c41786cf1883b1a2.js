var Container = React.createClass({displayName: "Container",
  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement(Header, null), 
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
        var Header = React.createClass({displayName: "Header",
          render: function() {
            return(
              React.createElement("div", {className: "header"}, 
                React.createElement("nav", {className: "navbar navbar-default"}, 
                  React.createElement("div", {className: "container-fluid"}, 
                    React.createElement("div", {className: "navbar-header"}, 
                      React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
                        React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                        React.createElement("span", {className: "icon-bar"}), 
                        React.createElement("span", {className: "icon-bar"}), 
                        React.createElement("span", {className: "icon-bar"})
                      ), 
                      React.createElement("a", {className: "navbar-brand", href: "#"}, "Brand")
                    )
                  )
                )
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
              React.createElement("div", {className: "Contain"}, 
                "Hello, world! I am a CommentForm."
              )
            );
          }
        });
      React.render(
        React.createElement(Container, null),
        document.getElementById('container')
      );