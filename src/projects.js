var Projects = React.createClass({
  render: function() {
    return(
      <div id="projects" className="projects">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 project">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="panel-title">Kinector</h2>
                </div>
                <div className="panel-body lead">
                  <div className='col-sm-3'>
                    <a href='http://ec2-54-68-172-39.us-west-2.compute.amazonaws.com' target='_blank'><img src='img/kinector.jpg' alt='' className='screenshot'/></a>
                  </div>
                  <div className='col-sm-9'>
                  <p>Increased team coordination and effectiveness through improved communication and administrative control. This app was pair programmed using GIT and GitHub for version control. Deployed on Amazon EC2.</p>
                  <p>Technologies: HTML5, CSS3, Bootstrap, CodeIgniter, MySQL, AJAX, PHP5, REST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 project">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="panel-title">Useless Trivia</h2>
                </div>
                <div className="panel-body lead">
                  <div className='col-sm-3'>
                    <a href='http://uselesstrivia.info' target='_blank'><img src='img/uselesstrivia.jpg' alt='' className='screenshot'/></a>
                  </div>
                  <div className='col-sm-9'>
                  <p>Increased team coordination and effectiveness through improved communication and administrative control. This app was pair programmed using GIT and GitHub for version control. Deployed on Amazon EC2.</p>
                  <p>Technologies: HTML5, CSS3, Bootstrap, CodeIgniter, MySQL, AJAX, PHP5, REST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div className='row footer' id='footer'>
        
          <div className="container">
            <p className="text-right">Copyright &copy; Trevor Hall 2015</p>
          </div>
          
      </div>
        </div>
      </div>
    );
  }
});