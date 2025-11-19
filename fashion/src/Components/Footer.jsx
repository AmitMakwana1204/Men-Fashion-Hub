import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Men Fashion Hub</h2>
          <p>Your trusted destination for premium men’s clothing.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shirt">Shirts</Link></li>
            <li><Link to="/pent">Pants</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-help">
          <h3>Customer Help</h3>
          <ul>
            <li>Order Status</li>
            <li>Shipping Policy</li>
            <li>Returns & Refund</li>
            <li>FAQs</li>
          </ul>
        </div>

       <div className="footer-social">
  <h3>Follow Us</h3>

  <div className="social-icons">
    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="instagram">
      <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23fff%22%3E%0A%20%20%3Cpath%20d%3D%22M7.75%202h8.5A5.75%205.75%200%200%201%2022%207.75v8.5A5.75%205.75%200%200%201%2016.25%2022h-8.5A5.75%205.75%200%200%201%202%2016.25v-8.5A5.75%205.75%200%200%201%207.75%202zm0%201.5A4.25%204.25%200%200%200%203.5%207.75v8.5A4.25%204.25%200%200%200%207.75%2020.5h8.5A4.25%204.25%200%200%200%2020.5%2016.25v-8.5A4.25%204.25%200%200%200%2016.25%203.5h-8.5zm8.75%202a1%201%200%201%201%200%202%201%201%200%200%201%200-2zM12%207a5%205%200%201%201%200%2010%205%205%200%200%201%200-10zm0%201.7a3.3%203.3%200%201%200%200%206.6%203.3%203.3%200%200%200%200-6.6z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A" alt="instagram" />
    </a>

    <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="facebook">
      <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2228%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cpath%20d%3D%22M22%2012a10%2010%200%201%200-11.5%209.9v-7h-2v-3h2v-2.3c0-2%201.2-3.1%203-3.1.9%200%201.8.1%202.8.2v2h-1.6c-1.3%200-1.7.8-1.7%201.6V12h2.9l-.5%203h-2.4v7A10%2010%200%200%200%2022%2012z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A" alt="facebook" />
    </a>

    <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="whatsapp">
      <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2228%22%20fill%3D%22%23fff%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cpath%20d%3D%22M20.5%203.5A11.8%2011.8%200%200%200%2012%200a11.8%2011.8%200%200%200-11.5%2013.8L0%2024l10.5-2.1A11.8%2011.8%200%200%200%2024%2011.8c0-3.1-1.3-6.1-3.5-8.3zM12%2021.4c-1.7%200-3.4-.4-4.9-1.2l-.4-.2-6%201.2%201.2-5.9-.2-.4A9.5%209.5%200%201%201%2012%2021.4zm5-7.5c-.3.8-1.7%201.6-2.3%201.7-.6.1-1.3.1-2.1-.1-.5-.1-1.2-.4-2-.8a11.2%2011.2%200%200%201-2.9-2.6c-.2-.3-.7-.9-.7-1.6s.4-1.2.5-1.4c.1-.2.2-.3.4-.4h.5c.2%200%20.4%200%20.6.4l.8%201.3c.2.4.1.5-.1.8l-.3.4-.1.2c-.1.1%200%20.3.1.4a7%207%200%200%200%202.2%201.8c.3.1.5.1.6%200l.8-.9c.2-.2.4-.2.6-.1l1.5.6c.4.2.8.3.8.5z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A" alt="whatsapp" />
    </a>

    <a href="https://youtube.com" target="_blank" rel="noreferrer">
      <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2228%22%20height%3D%2228%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22white%22%3E%0A%20%20%3Cpath%20d%3D%22M23.5%206.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.9%202.5%2012%202.5%2012%202.5h0s-4.9%200-8.6.4c-.4%200-1.3.1-2.1%201-.6.7-.8%202.3-.8%202.3S0%208%200%209.7v1.6c0%201.7.2%203.5.2%203.5s.2%201.6.8%202.3c.8.9%201.9.9%202.4%201%201.8.2%207.6.4%207.6.4s4.9%200%208.6-.4c.4%200%201.3-.1%202.1-1%20.6-.7.8-2.3.8-2.3s.2-1.7.2-3.5V9.7c0-1.7-.2-3.5-.2-3.5zM9.7%2014.6V7.9l6.3%203.4-6.3%203.3z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A" alt="YouTube" />
    </a>
  </div>
</div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Men Fashion Hub | Created by Amit Makwana</p>
      </div>
    </footer>
  );
};

export default Footer;
