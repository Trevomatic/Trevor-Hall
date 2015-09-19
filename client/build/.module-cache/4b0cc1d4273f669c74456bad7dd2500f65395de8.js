var Footer = React.createClass({displayName: "Footer",
  render: function() {
    return(
      React.createElement("div", {className: "footer", id: "footer"}, 
        React.createElement("footer", null, 
          React.createElement("div", {class: "container"}, 
            React.createElement("p", {class: "text-right"}, "Copyright © Your Company 2014")
          )
        )
      )
    );
  }
});
