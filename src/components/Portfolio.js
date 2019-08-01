import React, { useState, useEffect } from "react";
import "./css/Portfolio.scss";
import Header from "./Header";
import About from "./About";

function Portfolio() {
  let [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  const scrollHandler = e => {
    const scrolleddown = window.scrollY > 0;
    if (scrolled !== scrolleddown) setScrolled(scrolleddown);
  };

  return (
    <div className={`Portfolio ${scrolled ? "fixed" : ""}`}>
      <Header />
      <About />
      <div className="divider" />
    </div>
  );
}

export default Portfolio;
