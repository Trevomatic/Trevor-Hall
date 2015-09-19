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