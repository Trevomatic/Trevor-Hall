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

var Break = React.createClass({displayName: "Break",
  render: function() {
    return(
      React.createElement("div", {id: "break", className: "break"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}
          )
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
    
            React.createElement("div", {id: "bio", className: "col-sm-10 col-sm-offset-1 text-center text-vcenter"}, 
              React.createElement("p", {className: "lead"}, "I hail from the Bay Area, and have been interested in technology my whole life. During my time as an Electrician, I was able to incorporate cutting edge technology into homes in the form of Lighting Control systems and Home Theaters. It was this experience that made me want to shift gears and create the technology that people use and love." + ' ' +
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
          React.createElement("h2", {className: "text-center"}, "Technologies"), " ", React.createElement("hr", null), 
          React.createElement("div", {className: "row text-center"}, 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("h4", null, "Service 1"), 
              React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.")
            ), 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("h4", null, "Service 2"), 
              React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.")
            ), 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("h4", null, "Service 3"), 
              React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.")
            ), 
            React.createElement("div", {className: "col-sm-3 col-xs-6 technologies"}, 
              React.createElement("h4", null, "Service 4"), 
              React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sem cras amet. Donec in sem cras amet.")
            )
          ), 
          React.createElement("p", {className: "text-center"}, React.createElement("a", {href: "#information", className: "btn btn-default btn-lg"}, "Projects"))
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
            React.createElement("div", {className: "col-sm-8 col-sm-offset-2 project"}, 
              React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, 
                  React.createElement("h2", {className: "panel-title"}, "Kinector")
                ), 
                React.createElement("div", {className: "panel-body lead"}, 
                  React.createElement("div", {className: "col-sm-3"}, 
                    React.createElement("a", {href: "http://ec2-54-68-172-39.us-west-2.compute.amazonaws.com", target: "_blank"}, React.createElement("img", {src: "img/kinector.jpg", alt: "", className: "screenshot"}))
                  ), 
                  React.createElement("div", {className: "col-sm-9"}, 
                  React.createElement("p", null, "Increased team coordination and effectiveness through improved communication and administrative control. This app was pair programmed using GIT and GitHub for version control. Deployed on Amazon EC2."), 
                  React.createElement("p", null, "Technologies: HTML5, CSS3, Bootstrap, CodeIgniter, MySQL, AJAX, PHP5, REST")
                  )
                )
              )
            )
          ), 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-sm-8 col-sm-offset-2 project"}, 
              React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-heading"}, 
                  React.createElement("h2", {className: "panel-title"}, "Useless Trivia")
                ), 
                React.createElement("div", {className: "panel-body lead"}, 
                  React.createElement("div", {className: "col-sm-3"}, 
                    React.createElement("a", {href: "http://uselesstrivia.info", target: "_blank"}, React.createElement("img", {src: "img/uselesstrivia.jpg", alt: "", className: "screenshot"}))
                  ), 
                  React.createElement("div", {className: "col-sm-9"}, 
                  React.createElement("p", null, "Increased team coordination and effectiveness through improved communication and administrative control. This app was pair programmed using GIT and GitHub for version control. Deployed on Amazon EC2."), 
                  React.createElement("p", null, "Technologies: HTML5, CSS3, Bootstrap, CodeIgniter, MySQL, AJAX, PHP5, REST")
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});

