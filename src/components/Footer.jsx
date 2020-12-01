import React, { useState } from "react";
import ContactModal from "../components/ContactModal";

const Footer = () => {
  const [showM, setShowM] = useState(false);
  const handleShow = e => {
    e.preventDefault();
    setShowM(true);
  };
  const handleClose = () => setShowM(false);

  return (
    <div className="footer" id="footer">
      <ContactModal show={showM} handleClose={handleClose} />
      <ul className="nav">
        <li className="nav__item">
          <a href="/" className="nav__link">
            Find your dream home
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Request proposal
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Download home planner
          </a>
        </li>
        <li className="nav__item" onClick={handleShow}>
          <span className="nav__link" onClick={handleShow}>
            Contact us
          </span>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Submit your property
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Come work with us!
          </a>
        </li>
      </ul>
      <p className="copyright">
        &copy; Copyright 2019 by Moises Cruz. Feel free to use this project for your own purposes.
        This does NOT apply if you plan to produce your own course or tutorials based on this
        project.
      </p>
    </div>
  );
};
export default Footer;
