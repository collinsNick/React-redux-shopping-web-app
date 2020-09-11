import React from "react";
import { NavLink } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="footer-contaner">
      <div>
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Company</NavLink>
          </li>
          <li>
            <NavLink to="/">Location</NavLink>
          </li>
          <li>
            <NavLink to="/">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/">Opening Hours</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Useful links</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Help</NavLink>
          </li>
          <li>
            <NavLink to="/">Privacy Ploicy</NavLink>
          </li>
          <li>
            <NavLink to="/">Terms and Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/">FAQ</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Customer Servie</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Payment Methods</NavLink>
          </li>
          <li>
            <NavLink to="/">Money-back</NavLink>
          </li>
          <li>
            <NavLink to="/">Returns</NavLink>
          </li>
          <li>
            <NavLink to="/">Shipping</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h5>Join Us</h5>
        <ul className="list-unstyled text-small">
          <li>
            <NavLink to="/">Twitter</NavLink>
          </li>
          <li>
            <NavLink to="/">Facebook</NavLink>
          </li>
          <li>
            <NavLink to="/">Instagram</NavLink>
          </li>
          <li>
            <NavLink to="/">Linkedin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
