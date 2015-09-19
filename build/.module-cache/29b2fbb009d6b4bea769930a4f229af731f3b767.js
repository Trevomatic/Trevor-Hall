    React.render(
      React.createElement("div", {className: "header"}, 
                React.createElement("h1", null, "Hello"), 

                 React.createElement("nav", {className: "navbar navbar-default"}, 
                React.createElement("div", {className: "container-fluid"}, 
                  
                  React.createElement("div", {className: "navbar-header"}, 
                    React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
                      React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                      React.createElement("span", {className: "icon-bar"}), 
                      React.createElement("span", {className: "icon-bar"}), 
                      React.createElement("span", {className: "icon-bar"})
                    ), 
                    React.createElement("a", {className: "navbar-brand", href: "#"}, "Brand")
                  )
               ), "//.container-fluid"
              )
              ),
      document.getElementById('navbar')
    );
    React.render(
        React.createElement("div", {id: "contents"}, 
        React.createElement("p", null, "hello"), 
        React.createElement("h1", null, "Hello, world!")
        ),
        document.getElementById('example')
      );
