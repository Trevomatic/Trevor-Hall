    React.render(
        React.createElement("div", {id: "contents"}, 
        React.createElement("p", null, "hello"), 
        React.createElement("h1", null, "Hello, world!")
        ),
        document.getElementById('example')
      );
      React.render(
        React.createElement("h1", null, "Hello, world!"),
        document.getElementById('navbar')
      );