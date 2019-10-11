import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { ReactComponent as Logo } from "../img/SVG/profile-male.svg";

class Sidebar extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="navigation__item">
            <a href="/auth/google" className="navigation__link">
              Sign In With Google
            </a>{" "}
          </li>
        );
      default:
        return (
          <>
            <li className="navigation__item">
              <a href="/api/logout" className="navigation__link">
                Log Out
              </a>{" "}
            </li>
          </>
        );
    }
  };

  render() {
    const user = this.props.auth ? (
      <div className="user">
        <Logo className="user__logo" />
        <div className="user__name">{this.props.auth.name}</div>
      </div>
    ) : (
      <div></div>
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
          {this.renderContent()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  actions
)(Sidebar);
