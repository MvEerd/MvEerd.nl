import React, { useState, useEffect } from "react";
import ScrollableSection, {
  configureAnchors
} from "react-update-url-on-scroll";
import "./css/Portfolio.scss";
import Header from "./Header";
import About from "./About";
import DevLabel from "./DevLabel";

function Portfolio() {
  let [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    configureAnchors({ offset: 140, affectHistory: true });
  });

  const scrollHandler = e => {
    const scrolleddown = window.scrollY > 0;
    if (scrolled !== scrolleddown) setScrolled(scrolleddown);
  };

  return (
    <div className={`Portfolio ${scrolled ? "fixed" : ""}`}>
      <Header />
      <ScrollableSection hash={"about"}>
        <div>
          <About />
        </div>
      </ScrollableSection>
      <div className="divider" />
      <ScrollableSection hash={"work"}>
        <div className="container">
          <h2>Work</h2>
          <div className="devlabels">
            <DevLabel text="React" /> <DevLabel text="php" />{" "}
            <DevLabel text="HTML5" /> <DevLabel text="CSS3" />{" "}
            <DevLabel text="Javascript" /> <DevLabel text="Node.js" />{" "}
            <DevLabel text="Go" /> <DevLabel text="WebRTC" />{" "}
            <DevLabel text="Backend" /> <DevLabel text="Magento" />
          </div>
      </ScrollableSection>
      <ScrollableSection hash={"contact"}>
        <div className="container">
          <h2>Contact</h2>
        </div>
      </ScrollableSection>
    </div>
  );
}

export default Portfolio;
