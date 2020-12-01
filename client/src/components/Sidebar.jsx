import React, { Component } from "react";
import { ReactComponent as Logo } from "../img/SVG/profile-male.svg";

class Sidebar extends Component {
  render() {
    const user = (
      <div className="user">
        <Logo className="user__logo" />
        <div className="user__name">Guest</div>
      </div>
    );
    return (
      <div className="sidebar">
        {user}

        <ul className="navigation">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Home
            </a>{" "}
          </li>
          <li className="navigation__item">
            <a href="#story" className="navigation__link">
              Stories
            </a>{" "}
          </li>
          <li className="navigation__item">
            <a href="#homes" className="navigation__link">
              Homes
            </a>{" "}
          </li>
          <li className="navigation__item">
            <a href="#gallery" className="navigation__link">
              Gallery
            </a>{" "}
          </li>
          <li className="navigation__item">
            <a href="#footer" className="navigation__link">
              About us
            </a>{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
