import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h2>LikeCoffee</h2>
          <p>Enjoy the best coffee experience with us.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
      <div>
        <p>&copy; 2025 LikeCoffee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
