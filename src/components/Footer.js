import React from 'react';
import '../components/Footer.css'

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <h1>LOGO</h1>
              </a>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Get Started</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item">
                  <a href="#">Start</a>
                </li>
                <li className="menu-item">
                  <a href="#">Documentation</a>
                </li>
                <li className="menu-item">
                  <a href="#">Installation</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Company</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item">
                  <a href="#">Contact</a>
                </li>
                <li className="menu-item">
                  <a href="#">News</a>
                </li>
                <li className="menu-item">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item">
                  <a href="#">Privacy Notice</a>
                </li>
                <li className="menu-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item">
                  <a href="#">Support Center</a>
                </li>
                <li className="menu-item">
                  <a href="#">Service Status</a>
                </li>
                <li className="menu-item">
                  <a href="#">Security</a>
                </li>
                <li className="menu-item">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item">
                  <a href="#">Customers</a>
                </li>
                <li className="menu-item">
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">Let's Chat</h2>
              <p className="footer-call-to-action-description">Have a support question?</p>
              <a className="footer-call-to-action-button button" href="#">Get in Touch</a>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">You Call Us</h2>
              <p className="footer-call-to-action-link-wrapper">
                <a className="footer-call-to-action-link" href="tel:0124-64XXXX">0124-64XXXX</a>
              </p>
            </div>
          </div>
          <div className="footer-social-links">
            <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
              <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
            </svg>
            <a className="footer-social-link linkedin" href="#" target="_blank">
              <span className="hidden-link-text">Linkedin</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path className="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
              </svg>
            </a>
            <a className="footer-social-link twitter" href="#" target="_blank">
              <span className="hidden-link-text">Twitter</span>
              <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                <path className="footer-social-icon-path" d="M23.89,6.1c-0.72,0.32-1.5,0.54-2.31,0.64c0.83-0.5,1.46-1.29,1.76-2.23c-0.77,0.46-1.63,0.8-2.54,0.98 C20.06,4.7,19.03,4.25,17.88,4.25c-2.2,0-3.99,1.79-3.99,3.99c0,0.31,0.04,0.61,0.1,0.9c-3.32-0.17-6.26-1.75-8.23-4.16 c-0.34,0.58-0.53,1.25-0.53,1.97c0,1.36,0.69,2.55,1.74,3.25c-0.64-0.02-1.25-0.2-1.78-0.49c0,0.02,0,0.04,0,0.06 c0,1.89,1.34,3.46,3.11,3.82c-0.33,0.09-0.67,0.14-1.03,0.14c-0.25,0-0.5-0.02-0.74-0.07c0.5,1.56,1.95,2.7,3.66,2.73 c-1.35,1.06-3.06,1.69-4.91,1.69c-0.32,0-0.63-0.02-0.94-0.06c1.75,1.12,3.82,1.77,6.05,1.77c7.26,0,11.23-6.02,11.23-11.23 c0-0.17,0-0.35-0.01-0.52C22.55,7.61,23.29,6.9,23.89,6.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
