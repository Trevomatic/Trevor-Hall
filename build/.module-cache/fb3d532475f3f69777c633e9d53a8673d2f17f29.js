var Footer = React.createClass({displayName: "Footer",
  render: function() {
    return(
      React.createElement("div", {className: "footer"}, 
        React.createElement("footer", null, 
          React.createElement("div", {className: "container"}, 
            React.createElement("p", {className: "text-right"}, "Copyright © Trevor Hall 2015")
          )
        )
      )
    );
  }
});