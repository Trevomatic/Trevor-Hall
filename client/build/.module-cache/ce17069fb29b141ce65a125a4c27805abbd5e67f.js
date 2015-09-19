var Footer = React.createClass({displayName: "Footer",
  render: function() {
    return (
      React.createElement("footer", null, 
        React.createElement("hr", null), 
        React.createElement("div", {className: "container"}, 
          React.createElement("p", {className: "text-right"}, "Copyright © Your Company 2014")
        )
      )
    );
  }
});
React.render(
  React.createElement(Footer, null),
  document.getElemenetById('footer')
);