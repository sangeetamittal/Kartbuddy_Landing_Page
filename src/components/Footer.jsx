import React from "react";
import { Link } from 'react-scroll';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-10 md:px-20 md:py-14 shadow-inner">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 flex-wrap">

                {/* Logo & Tagline */}
                <div className="md:w-1/4">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-2">🚚</span>
                        <span className="text-2xl font-semibold tracking-wide">KartBuddy</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Connecting Parcels, Connecting People.
                        <br />
                        KartBuddy is your reliable partner for all logistics and
                        transportation needs across India.
                    </p>
                    <div className="flex space-x-3 mt-5">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                            (Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition"
                                >
                                    <Icon className="text-white text-sm" />
                                </a>
                            )
                        )}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:w-1/5">
                    <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {[
                            { label: "Home", to: "home" },
                            { label: "Services", to: "services" },
                            { label: "About Us", to: "about" },
                            { label: "Contact Us", to: "contact" },
                            { label: "Track Shipment", to: "track" },
                        ].map(({ label, to }, idx) => (
                            <li key={idx}>
                                <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="hover:text-white transition cursor-pointer"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Services */}
                <div className="md:w-1/5">
                    <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Our Services</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {[
                            "Full Load Transport",
                            "Warehousing Solutions",
                            "Express Delivery",
                            "Last-Mile Delivery",
                            "Corporate Transport",
                        ].map((service, idx) => (
                            <li key={idx}>
                                <a href="#" className="hover:text-white transition cursor-pointer">
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:w-1/4">
                    <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Contact Us</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start space-x-2 hover:text-white transition">
                            <FiMapPin className="mt-1 text-yellow-400" />
                            <span className="cursor-pointer">123 KartBuddy Road, Mumbai, India</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-white transition">
                            <FiPhone className="text-yellow-400" />
                            <span className="cursor-pointer">+91 9876543210</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-white transition">
                            <FiMail className="text-yellow-400" />
                            <span className="cursor-pointer">info@kartbuddy.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} KartBuddy. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
