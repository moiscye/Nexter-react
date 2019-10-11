import React from "react";

export default () => {
  return (
    <div className="sidebar">
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
        <li className="navigation__item">
          <a href="/auth/google" className="navigation__link">
            Sign In With Google
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};
