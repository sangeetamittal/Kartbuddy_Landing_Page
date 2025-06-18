import React from 'react'
import { Link } from "react-scroll";
import cta_bg from '../assets/compressed_cta_bg.mp4'

const CTA = () => {
    return (
        <>
            <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden text-white">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={cta_bg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

                {/* Content */}
                <div className="relative z-20 text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Ship with KartBuddy?</h2>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust us with their logistics needs.
                        Our dedicated team is ready to assist you with personalized solutions.
                    </p>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-80} 
                    >
                        <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>

        </>
    )
}

export default CTA
