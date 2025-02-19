import React from 'react';
import './Footer.css';
import acunetixLogo from '../assets/acunetix-logo.png';

export default function Footer() {
    return (
        <footer className="footer ">
            {/* Background Video */}


            {/* Overlay to darken the video for better text visibility */}
            <div className="overlay"></div>

            <div className="footer-content flex max-sm:flex-col">
                {/* Logos Section */}
                

                {/* Site Information */}
                <div className="footer-section">
                    <h3>Acunetix 12.0</h3>
                    <p>Securing the web, one step at a time.</p>
                </div>

                <div className="logos">
                    <img src={acunetixLogo} alt="Acunetix Logo" className="logo" />
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                {/* <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="Instagram">📸</a>
                        <a href="#" aria-label="LinkedIn">🔗</a>
                    </div>
                </div> */}
            </div>

            <div className="footer-bottom">
                <p>© 2025 Acunetix 12.0 All rights reserved.</p>
            </div>
        </footer>
    );
}
