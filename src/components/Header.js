import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
      	<nav className="navbar">
      		<li className="navbar__link">Home</li>
      		<li><img  className="navbar__logo" src={require("../assets/images/logo-starwars.png")} role="presentation" /></li>
      		<li className="navbar__link">About</li>
      	</nav>
			</header>
    );
  }
}

export default Header;
