import React from 'react';
import "./Nav.css";

function Nav() {
   

    return (
        <div className="nav">
          <img
        className="nav__logo"
        src="https://cpmn.s3.amazonaws.com/wp-content/uploads/2020/01/netflix-logo.png"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
      />
        </div>
    );
};

export default Nav;