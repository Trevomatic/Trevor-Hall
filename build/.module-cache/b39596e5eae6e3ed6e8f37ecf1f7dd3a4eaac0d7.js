var Header = React.createClass({displayName: "Header",
  render: function() {
    return(
      React.createElement("div", {className: "header"}, 
      React.createElement("div", {className: "container"}, 
        React.createElement("nav", {className: "navbar navbar-default"}, 
          React.createElement("div", {className: "container-fluid"}, 
            React.createElement("div", {className: "navbar-header"}, 
              React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
                React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"})
              ), 
              React.createElement("a", {className: "navbar-brand", href: "#"}, "TH")
          ), 
          React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
              React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Link ", React.createElement("span", {className: "sr-only"}, "(current)"))), 
              React.createElement("li", null, React.createElement("a", {href: "#"}, "Link"))
            ), 
            React.createElement("form", {className: "navbar-form navbar-left", role: "search"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("input", {type: "text", className: "form-control", placeholder: "Search"})
              ), 
              React.createElement("button", {type: "submit", className: "btn btn-default"}, "Submit")
            ), 
            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
              React.createElement("li", null, React.createElement("a", {href: "mailto:TrevorWHall@gmail.com?Subject=from TrevorHall.us"}, "Email")), 
              React.createElement("li", null, React.createElement("a", {target: "blank", href: "https://github.com/Trevomatic"}, "GitHub")), 
              React.createElement("li", null, React.createElement("a", {target: "blank", href: "https://www.linkedin.com/in/trevorwhall"}, "LinkedIn"))
            )
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








