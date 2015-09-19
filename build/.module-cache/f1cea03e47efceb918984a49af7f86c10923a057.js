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
    
            React.createElement("div", {id: "bio", className: "col-sm-6 col-sm-offset-3 text-center"}, 
              React.createElement("p", {className: "lead"}, "I hail from the Bay Area, and have been interested in technology my whole life. During my time as an Electrician with Craft Electric, I was able to incorporate cutting edge technology into homes in the form of Lighting Control systems and Home Theaters. It was this experience that made me want to change gears and create the technology that people use and love." + ' ' +

"I graduated from CodingDojo, an immersive web development bootcamp in San Jose, CA. I learned to build web apps from the ground up in LAMP and MEAN stacks and create iOS apps in Swift.  I am a full-stack web developer seeking opportunities to create tech that makes a difference.")
            )
          )
        )
      )
    );
  }
});

var Services = React.createClass({displayName: "Services",
  render: function() {
    return(
      React.createElement("div", {id: "services", className: "pad-section"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("h2", {className: "text-center"}, "Our Services"), " ", React.createElement("hr", null), 
          React.createElement("div", {className: "row text-center"}, 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("i", {className: "glyphicon glyphicon-cloud"}, " "), 
              React.createElement("h4", null, "Service 1"), 
              React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.")
            ), 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("i", {className: "glyphicon glyphicon-leaf"}, " "), 
              React.createElement("h4", null, "Service 2"), 
              React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.")
            ), 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("i", {className: "glyphicon glyphicon-phone-alt"}, " "), 
              React.createElement("h4", null, "Service 3"), 
              React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.")
            ), 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("i", {className: "glyphicon glyphicon-bullhorn"}, " "), 
              React.createElement("h4", null, "Service 4"), 
              React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.")
            )
          )
        )
      )
    );
  }
});



var Projects = React.createClass({displayName: "Projects",
  render: function() {
    return(
      React.createElement("div", {id: "information", className: "projects"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-sm-6"}, 
              React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, 
                  React.createElement("h2", {className: "panel-title"}, "Useless Trivia")
                ), 
                React.createElement("div", {className: "panel-body lead"}, 
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi felis vehicula justo, a dapibus quam augue non massa. Duis euismod, augue et tempus consequat, lorem mauris porttitor quam, consequat ultricies mauris mi a metus. Phasellus congue, leo sed ultricies tristique, nunc libero tempor ligula, at varius mi nibh in nisi. Aliquam erat volutpat. Maecenas rhoncus, neque facilisis rhoncus tempus, elit ligula varius dui, quis amet." 
                )
              )
            ), 
            React.createElement("div", {className: "col-sm-6"}, 
              React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, 
                  React.createElement("h2", {className: "panel-title"}, "Kinector")
                ), 
                React.createElement("div", {className: "panel-body lead"}, 
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi felis vehicula justo, a dapibus quam augue non massa. Duis euismod, augue et tempus consequat, lorem mauris porttitor quam, consequat ultricies mauris mi a metus. Phasellus congue, leo sed ultricies tristique, nunc libero tempor ligula, at varius mi nibh in nisi. Aliquam erat volutpat. Maecenas rhoncus, neque facilisis rhoncus tempus, elit ligula varius dui, quis amet." 
                )
              )
            )
          )
        )
      )
    );
  }
});

