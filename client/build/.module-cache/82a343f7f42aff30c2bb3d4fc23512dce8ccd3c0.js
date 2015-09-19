var Contents = React.createClass({displayName: "Contents",
  render: function() {
    return (
      React.createElement("div", {className: "contents"}, 
        React.createElement(Header, null), 
        React.createElement(Home, null), 
        React.createElement(About, null), 
        React.createElement(Services, null), 
        React.createElement(Projects, null)
      )
    )
  }
});   

var Home = React.createClass({displayName: "Home",
  render: function() {
    return(
      React.createElement("div", {id: "home", className: "home"}, 
            React.createElement("div", {className: "header"}, 
        React.createElement("nav", {className: "navbar navbar-inverse "}, 
          React.createElement("div", {className: "container-fluid"}, 
            React.createElement("div", {className: "navbar-header"}, 
              React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "aria-expanded": "false", href: "#links"}, 
                React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"})
              ), 
              React.createElement("a", {class: "navbar-brand", href: "#"}, 
                React.createElement("img", {alt: "TH", src: "img/headshot.jpg", className: "headshot img-circle"})
              )
            ), 
            React.createElement("div", {className: "collapse navbar-collapse", id: "links"}, 
              React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                React.createElement("li", null, React.createElement("a", {href: "mailto:TrevorWHall@gmail.com?Subject=from TrevorHall.us"}, "Email Me")), 
                React.createElement("li", null, React.createElement("a", {target: "_blank", href: "https://github.com/Trevomatic"}, "GitHub")), 
                React.createElement("li", null, React.createElement("a", {target: "_blank", href: "https://www.linkedin.com/in/trevorwhall"}, "LinkedIn"))
              )
            )
          )
        )
      ), 
        React.createElement("div", {className: "text-vcenter"}, 
          React.createElement("h1", null, "Trevor Hall"), 
          React.createElement("h3", null, "Full-Stack Web Developer"), 
          React.createElement("a", {href: "#about", className: "btn btn-default btn-lg"}, "About Me")
        )
      )
    );
  }
});

React.render(
  React.createElement(Contents, null),
  document.getElementById('contents')
);


