import React from "react";
import logo from "../img/logo.png";
import logobbc from "../img/logo-bbc.png";
import logoforbes from "../img/logo-forbes.png";
import logotechcrunch from "../img/logo-techcrunch.png";
import logobi from "../img/logo-bi.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <a href="#homes" className="btn header__btn">
        View our properties
      </a>
      <div className="header__seenon-text">As seen on</div>
      <div className="header__seenon-logos">
        <img src={logobbc} alt="Seen on logo 1" />
        <img src={logoforbes} alt="Seen on logo 2" />
        <img src={logotechcrunch} alt="Seen on logo 3" />
        <img src={logobi} alt="Seen on logo 4" />
      </div>
    </div>
  );
};

export default Header;
