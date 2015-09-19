var Header = React.createClass({
  onClick: function(e){
    e.preventDefault();
     console.log('Location' + e.target.value);
      $div = $(this.getDOMNode());
      console.log($div);
      var value = $(this).attr('ref');
      console.log(value);
   },
  render: function() {
    return(
      <div className="header nav-header">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"  aria-expanded="false" href='#links'>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#contents">
                <img alt="TH" src='img/headshot.jpg' className='headshot img-circle' />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="links">
              <ul className="nav navbar-nav">
                <li><a href="#" data-url='hello' onClick={this.onClick} value='hello' ref='target'>About</a></li>
                <li><a href="#"  onClick={this.onClick} >Projects</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="mailto:TrevorWHall@gmail.com?Subject=from TrevorHall.us">Email Me</a></li>
                <li><a target='_blank' href="https://github.com/Trevomatic">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/trevorwhall">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

React.render(
  <Header />,
  document.getElementById('header')
);








