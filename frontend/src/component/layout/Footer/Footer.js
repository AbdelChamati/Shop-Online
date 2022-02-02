import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import { FaFacebookSquare, FaYoutube, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>IOS & Android</p>
        <img src={appStore} alt="Appstore" />
        <img src={playStore} alt="playstore" />
      </div>

      <div className="midFooter">
        <h1>DABA.COM</h1>
        <p>Quality and Service combined are our priority</p>

        <p>Copyrights 2021 &copy; AbChamati</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/"><FaInstagram /></a>
        <a href="http://youtube.com/r"><FaYoutube /></a>
        <a href="http://instagram.com/"><FaFacebookSquare /></a>
      </div>
    </footer>
  );
};

export default Footer;
