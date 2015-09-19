var Contents = React.createClass({displayName: "Contents",
  onClick: function(target, e){
    e.preventDefault();
    console.log('hey there');
    // var element_to_scroll_to = document.getElementById(target);
    // element_to_scroll_to.scrollIntoView();
    console.log('hello');
   },
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
          React.createElement("h1", null, React.createElement("b", null, "Trevor Hall")), 
          React.createElement("h3", null, "Full-Stack Web Developer"), 
          React.createElement("button", {onClick: this.onClick}, "Hey there")
        )

      )
    );
  }
});

React.render(
  React.createElement(Contents, null),
  document.getElementById('contents')
);


