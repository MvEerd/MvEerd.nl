import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./css/Portfolio.scss";

function Header() {
  return (
    <>
      <header className="header">
        <div className="accentbar" />
        <div className="header-container">
          <div className="header-info">
            <h2>Michael van Eerd</h2>
            <div className="header-social">
              <div className="github">
                <span className="icon">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                @MvEerd
              </div>
              <div className="linkedin">
                <span className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </div>
            </div>
            <div className="jobtitle">Full-stack web developer</div>
          </div>

          <div className="navmenu">
            <span>About</span>
            <span>Work</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="info-border" />
      </header>
      <div className="header-placeholder" />
    </>
  );
}

export default Header;
