import React from "react";

function DevLabel({ text }) {
  return <div className={`devlabel ${text.toLowerCase()}`}>{text}</div>;
}

export default DevLabel;
