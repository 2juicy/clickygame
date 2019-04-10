import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <div>
      <div className="phantom" />
      <div className="footer">{props.children}</div>
    </div>
  );
};

export default Footer;
