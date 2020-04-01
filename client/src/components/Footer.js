import React from "react";
import Feedback from "./Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

const Footer = () => {
  return (
    <div style={{ marginTop: "1em" }}>
      <Feedback />
      <footer>
        <div className="container d-flex flex-column flex-sm-row align-items-center">
          <div className="social-media flex-grow-1 d-flex align-items-center">
            <span className="d-none d-sm-inline-block mr-2">Follow us</span>
            <a
              href="https://www.facebook.com/mockupmark/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-block mr-2"
            >
              <FontAwesomeIcon icon={faFacebook} title="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/mockupmark/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-block"
            >
              <FontAwesomeIcon icon={faInstagram} title="Instagram" />
            </a>
          </div>
          <div className="copyright text-center text-sm-right">
            &copy; 2020 <a href="https://www.mockupmark.com">Mockup Mark</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
