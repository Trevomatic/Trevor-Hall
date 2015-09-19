var Home = React.createClass({displayName: "Home",
  render: function() {
    return(
      React.createElement("div", {id: "home", className: "home"}, 
        React.createElement("div", {className: "text-vcenter"}, 
          React.createElement("h1", null, "Trevor Hall"), 
          React.createElement("h3", null, "Full-Stack Web Developer"), 
          React.createElement("a", {href: "#about", className: "btn btn-default btn-lg"}, "Continue")
        )
      )
    );
  }
});

var About = React.createClass({displayName: "About",
  render: function() {
    return(

      React.createElement("div", {id: "about", className: "about"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
           
            React.createElement("div", {className: "col-sm-6 col-sm-offset-3 text-center"}, 
              React.createElement("h2", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet."), 
              React.createElement("p", {className: "lead"}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum metus et ligula venenatis, at rhoncus nisi molestie. Pellentesque porttitor elit suscipit massa laoreet metus.")
            )
          )
        )
      )


    );
  }
});

