import React from "react";

function About() {
  return (
    <div className="container">
      <div>
        <h3>About</h3>
        <p className="about">
          Hello, I'm Michael van Eerd,
          <br />A full-stack web developer currently programming websites and
          applications using <b>React</b>, <b>PHP</b>, <b>Go</b>, <b>HTML</b>,{" "}
          <b>CSS</b>, <b>ES6</b> and <b>Node.js</b>
          <br />
          I've got experience with <b>WebRTC video/audio streams</b>,{" "}
          <b>Magento</b>, <b>e-commerce</b>, <b>Google Adwords</b>,{" "}
          <b>Analytics</b>
          <br />I also support and configure Linux servers with <b>
            NGINX
          </b> / <b>Apache</b>, <b>MySQL</b>, <b>InspIRCd</b>, <b>memcache</b>,{" "}
          <b>Redis</b>, <b>WebRTC SFU</b> and <b>TURN/STUN</b>
          <br />
          <br />
          If I can help with a project you can reach me by emailing{" "}
          <a
            className="ahref"
            href="mailto:michael@cache.works"
            target="_blank"
            rel="noopener noreferrer"
          >
            michael@cache.works
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
