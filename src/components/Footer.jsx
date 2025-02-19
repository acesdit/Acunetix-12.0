import React from "react";
import acunetix from "../assets/logo.png";

function Footer() {
    return (
        <div data-scroll-section className="bg-black text-white flex justify-center mt-12 py-8 w-full">
            <div className="h-24 w-full max-w-6xl flex justify-between items-center px-4">
                <div className="flex flex-col justify-between h-full">
                    <a href="#" className="hover:text-aqua hover:shadow-lg">HOME</a>
                    <a href="#" className="hover:text-aqua hover:shadow-lg">EVENT</a>
                    <a href="#" className="hover:text-aqua hover:shadow-lg">ABOUT US</a>
                </div>
                <img src={acunetix} alt="Acunetix Logo" className="h-24 w-24 mx-8" />
                <div className="flex flex-col justify-between h-full">
                    <a href="#" className="hover:text-aqua hover:shadow-lg">FAQ</a>
                    <a href="#" className="hover:text-aqua hover:shadow-lg">SPONSOR</a>
                    <a href="#" className="hover:text-aqua hover:shadow-lg">SOCIALS</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;