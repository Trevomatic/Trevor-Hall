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
      React.createElement("div", {id: "services", className: "services"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("h2", {className: "text-center"}, "Technologies"), " ", React.createElement("hr", null), 
          React.createElement("div", {className: "row text-center"}, 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("h4", null, "Languages"), 
              React.createElement("p", null, "HTML5, CSS3, JavaScript, PHP5, Swift, Python, OOP, REST, AJAX, Git, GitHub")
            ), 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("h4", null, "Frameworks"), 
              React.createElement("p", null, "Express, CodeIgniter, AngularJS, Bootstrap, JQuery, SocketIO, Materialize, ReactJS, Flask")
            ), 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("h4", null, "Databases"), 
              React.createElement("p", null, "MongoDB, MySQL, PostgresQL, Mongoose.js, AnyDB")
            ), 
            React.createElement("div", {className: "col-sm-3 col-xs-6"}, 
              React.createElement("h4", null, "Servers"), 
              React.createElement("p", null, "Node.js, Apache, Ubuntu, Amazon EC2, Heroku, Nginex")
            )
          ), 
          React.createElement("p", {className: "text-center"}, React.createElement("a", {href: "#projects", className: "btn btn-default btn-lg"}, "Projects"))
        )
      )
    );
  }
});