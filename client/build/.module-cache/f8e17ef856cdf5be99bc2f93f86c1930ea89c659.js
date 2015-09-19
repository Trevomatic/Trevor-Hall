    React.render(
      React.createElement("div", {className: "header"}, 
                React.createElement("h1", null, "Hello"), 

                 React.createElement("nav", {className: "navbar navbar-default"}
               
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
