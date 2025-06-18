import React, { useState } from 'react'
import { Link } from 'react-scroll';
import hero_bg from '../assets/compressed_hero_bg.mp4';
import logo from '../assets/logo.png'

const Hero = () => {

    const [trackingId, setTrackingId] = useState('');

    const handleTrack = () => {
        if (trackingId.trim()) {
            alert(`Tracking ID ${trackingId} submitted! This is a demo.`);
            setTrackingId('');
        } else {
            alert('Please enter a tracking ID.');
        }
    };

    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={hero_bg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Opaque Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

                <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 text-white px-6 py-4 flex justify-between items-center">
                    <div className="w-full max-w-[1100px] px-4 md:px-6 mx-auto py-4 flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
                            <span className="text-2xl font-bold">KartBuddy</span>
                        </div>

                        {/* Navigation Links */}
                        <ul className="hidden md:flex space-x-6 text-lg">
                            <ul className="hidden md:flex space-x-6 text-lg">
                                <li>
                                    <Link
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="hover:text-gray-300 cursor-pointer"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="services"
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="hover:text-gray-300 cursor-pointer"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="about"
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="hover:text-gray-300 cursor-pointer"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="contact"
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="hover:text-gray-300 cursor-pointer"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>

                        </ul>

                        {/* CTA Button */}
                        <div>
                            <Link
                                to="home" 
                                smooth={true}
                                duration={500}
                                offset={-80} 
                            >
                                <button className="bg-white text-blue-600 text-base font-medium px-6 py-1.5 rounded-lg border border-blue-500 shadow-sm hover:bg-blue-50 hover:shadow-md transition duration-200 ease-in-out">
                                    Track
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className="relative min-h-screen flex items-center justify-center text-center px-4">
                    {/* Centered Content */}
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Connecting Parcels,<br />Connecting People.
                        </h1>
                        <p className="text-lg text-white mb-8">
                            KartBuddy provides reliable and efficient logistics solutions for businesses and individuals across India.
                            Track your shipments in real-time and enjoy hassle-free deliveries.
                        </p>

                        {/* Transparent Tracking Box */}
                        <div className="bg-transparent p-6 rounded-lg">
                            <h2 className="text-xl font-semibold text-white mb-4">Track Your Shipment</h2>
                            <input
                                type="text"
                                placeholder="Enter your tracking ID..."
                                value={trackingId}
                                onChange={(e) => setTrackingId(e.target.value)}
                                className="w-full border border-white rounded px-4 py-2 mb-4 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                onClick={handleTrack}
                                className="w-full bg-white text-blue-900 py-2 rounded hover:bg-gray-200 transition-all duration-300 font-semibold"
                            >
                                Track
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
