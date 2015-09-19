var Contents = React.createClass({
  render: function() {
    return (
      <div className="contents">

        <Home />
        <About />
        <Services />
        <Projects />

      </div>
    )
  }
});   

var Home = React.createClass({
  render: function() {
    return(
      <div id="home" className="home">
        <div className="text-vcenter">
          <h1><b>Trevor Hall</b></h1>
          <h3>Full-Stack Web Developer</h3>
          <a href="#about" className="btn btn-default btn-lg">About Me</a>
        </div>

      </div>
    );
  }
});

React.render(
  <Contents />,
  document.getElementById('contents')
);


