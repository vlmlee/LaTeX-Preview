import React from 'react';

const Header = () => (
  <header>
    <img src={'texpreview.svg'} className="logo" alt="logo"></img>
    	<a href="https://github.com/vlmlee/LaTeX-Preview" className="project-link">
    		<img src={'github.svg'} className="github" alt="Link to Github project"></img> 
    		<span>View Source</span>
    	</a>
  </header>
);

export default Header;