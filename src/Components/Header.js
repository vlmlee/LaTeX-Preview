import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={'texpreview.svg'} className="logo"></img>
          <a href="https://github.com/vlmlee/LaTeX-Preview" className="project-link">
        <img src={'github.svg'} className="github"></img>&nbsp;  View Source</a>
      </div>
    );
  }
}

export default Header;