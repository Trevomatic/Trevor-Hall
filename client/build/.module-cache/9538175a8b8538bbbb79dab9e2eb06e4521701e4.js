var Header = React.createClass({displayName: "Header",
  render: function() {
    return(
      React.createElement("div", {className: "header"}, 
        React.createElement("nav", {className: "navbar navbar-default navbar-static-top"}, 
          React.createElement("div", {className: "container-fluid"}, 
            React.createElement("div", {className: "navbar-header"}, 
              React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
                React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"})
              ), 
              React.createElement("img", {src: "img/headshot.jpg", className: "headshot"})
            ), 
            React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
              React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                React.createElement("li", null, React.createElement("a", {href: "mailto:TrevorWHall@gmail.com?Subject=from TrevorHall.us"}, "Email Me")), 
                React.createElement("li", null, React.createElement("a", {target: "blank", href: "https://github.com/Trevomatic"}, "GitHub")), 
                React.createElement("li", null, React.createElement("a", {target: "blank", href: "https://www.linkedin.com/in/trevorwhall"}, "LinkedIn"))
              )
            )
          )
        )
      )
    );
  }
});

React.render(
  React.createElement(Header, null),
  document.getElementById('header')
);








