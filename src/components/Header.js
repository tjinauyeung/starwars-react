import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
      	<nav className="navbar">
      		<li className="navbar__link">
            <Link to={"/"}>Home</Link>
          </li>
      		<li>
            <Link to={"/"}>
              <img  className="navbar__logo" src={require("../assets/images/logo-starwars.png")} role="presentation" />
            </Link>
          </li>
      		<li className="navbar__link">About</li>
      	</nav>
			</header>
    );
  }
}

export default Header;
