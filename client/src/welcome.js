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
    onClick: function(target, e){
    e.preventDefault();
    var element_to_scroll_to = document.getElementById(target);
    element_to_scroll_to.scrollIntoView({behavior: 'smooth'});
   },
  render: function() {
    return(
      <div id="home" className="home">
        <div className="text-vcenter">
          <h1><b>Trevor Hall</b></h1>
          <h3>Full-Stack Web Developer</h3>
          <h3><a className='btn btn-primary btn-lg' onClick={this.onClick.bind(null, 'about')}>LEARN MORE ABOUT ME</a></h3>
        </div>
      </div>
    );
  }
});

React.render(
  <Contents />,
  document.getElementById('contents')
);
