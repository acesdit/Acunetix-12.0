import React from 'react';
import './Footer.css';
import acunetixLogo from '../assets/acunetix-logo.png';

export default function Footer() {
    return (
        <footer className="footer ">
            {/* Background Video */}

            {/* Overlay to darken the video for better text visibility */}
            <div className="overlay"></div>
            <div className="footer-content gap-4 flex max-sm:flex-col" style={{ gap: "4rem" }}>
                {/* Logos Section */}


                {/* Site Information */}
                <div className="footer-section">
                    <h1 className='text-4xl max-sm:text-2xl'>Acunetix 12.0</h1>
                    <p>Dive into world of illusions</p>
                </div>

                <div className="logos">
                    <img src={acunetixLogo} alt="Acunetix Logo" className="logo" />
                </div>

                <div className="footer-section ">
                    <h4 className='text-xl'>Socials</h4>
                    <ul className='flex justify-center items-center gap-3'>
                        <li><a href="https://www.instagram.com/acunetix.dit/"><img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="insta logo" height={35} width={35} /></a></li>
                        <li><a href="https://www.linkedin.com/company/acunetix-dit/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg></a></li>
                        <li><a href="https://www.youtube.com/@AcunetixDIT"><img src="https://www.svgrepo.com/show/13671/youtube.svg" alt="insta logo" height={35} width={35} /></a></li>
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
                <p className='text-[12px] sm:text-[15px]'>© 2025 Acunetix 12.0 All rights reserved.</p>
            </div>
        </footer>
    );
}

