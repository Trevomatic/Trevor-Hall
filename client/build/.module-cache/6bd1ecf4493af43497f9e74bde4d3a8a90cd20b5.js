var Contents = React.createClass({displayName: "Contents",
  render: function() {
    return (
      React.createElement("div", {className: "contents"}, 
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


