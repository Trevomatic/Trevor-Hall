var Header = React.createClass({displayName: "Header",
  onClick: function(target, e){
      e.preventDefault();
      var element_to_scroll_to = document.getElementById(target);
      element_to_scroll_to.scrollIntoView();
   },
   render: function() {
    return(
      React.createElement("div", {className: "header nav-header"}, 
        React.createElement("nav", {className: "navbar navbar-inverse navbar-fixed-top"}, 
          React.createElement("div", {className: "container-fluid"}, 
            React.createElement("div", {className: "navbar-header"}, 
              React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "aria-expanded": "false", href: "#links"}, 
                React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"})
              ), 
              React.createElement("a", {href: "#", className: "navbar-brand", onClick: this.onClick.bind(null, 'contents')}, 
                React.createElement("img", {alt: "TH", src: "img/headshot.jpg", className: "headshot img-circle"})
              )
            ), 
            React.createElement("div", {className: "collapse navbar-collapse", id: "links"}, 
              React.createElement("ul", {className: "nav navbar-nav"}, 
                React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.onClick.bind(null, 'about')}, "About")), 
                React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.onClick.bind(null, 'projects')}, "Projects"))
              ), 
              React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                React.createElement("li", null, React.createElement("a", {href: "mailto:TrevorWHall@gmail.com?Subject=from TrevorHall.us"}, "Email Me")), 
                React.createElement("li", null, React.createElement("a", {target: "_blank", href: "https://github.com/Trevomatic"}, "GitHub")), 
                React.createElement("li", null, React.createElement("a", {target: "_blank", href: "https://www.linkedin.com/in/trevorwhall"}, "LinkedIn"))
              )
            )
          )
        )
      )
    );
  }
});

React.render(
  React.createElement(Header, null),
  document.getElementById('header')
);