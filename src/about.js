var About = React.createClass({
  render: function() {
    return(
      <div id="about" className="about">
        <div className="container">
          <div className="row">
    
            <div id='bio' className="col-sm-10 col-sm-offset-1 text-center text-vcenter">
              <div className='col-sm-4'>
                <img src='img/Headshot.jpg' alt='' />
              </div>
              <div className='col-sm-8'>           
                <p className="lead">I hail from the Bay Area, and have been interested in technology my whole life. During my time as an Electrician, I was able to incorporate cutting edge technology into homes in the form of Lighting Control systems and Home Theaters. It was this experience that made me want to shift gears and create the technology that people use and love. </p>
              </div>
              <p className='lead'>I graduated from CodingDojo, an immersive web development bootcamp in San Jose, CA. I learned to build web apps from the ground up in LAMP and MEAN stacks and create iOS apps in Swift.  I am a full-stack web developer seeking opportunities to create tech that makes a difference.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Services = React.createClass({
  render: function() {
    return(
      <div id="services" className="services">
        <div className="container">
          <h2 className="text-center">Technologies</h2> <hr />
          <div className="row text-center">
            <div className="col-sm-3 col-xs-6">
              <h4>Languages</h4>
              <p>HTML5, CSS3, JavaScript, PHP5, Swift, Python, OOP, REST, AJAX, Git, GitHub</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <h4>Frameworks</h4>
              <p>Express, CodeIgniter, AngularJS, Bootstrap, JQuery, SocketIO, Materialize, ReactJS, Flask</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <h4>Databases</h4>
              <p>MongoDB, MySQL, PostgresQL, Mongoose.js, AnyDB</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <h4>Servers</h4>
              <p>Node.js, Apache, Ubuntu, Amazon EC2, Heroku, Nginex</p>
            </div>
          </div>
          <p className='text-center'><a href="#projects" className="btn btn-default btn-lg">Projects</a></p>
        </div>
      </div>
    );
  }
});