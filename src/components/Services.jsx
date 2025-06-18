import React, { useState, useEffect } from 'react'
import srv_bg from '../assets/compressed_services_bg.mp4'
import trolleyIcon from '../assets/trolley.svg';
import warehouseIcon from '../assets/warehouse.svg';
import truckIcon from '../assets/truck.svg';
import clockIcon from '../assets/clock.svg';
import factoryIcon from '../assets/factory.svg';
import secureIcon from '../assets/secure.svg';
import mapIcon from '../assets/map.svg';
import supportIcon from '../assets/support.svg';

const Services = () => {

    const services = [
        { title: 'Full & part Load Transport', description: 'Efficient transportation for all your shipping needs, whether full or partial loads.', icon: trolleyIcon },
        { title: 'Warehousing Solutions', description: 'Secure storage facilities with advanced inventory management systems.', icon: warehouseIcon },
        { title: 'Express Delivery', description: 'Fast and reliable delivery options for time-sensitive shipments.', icon: clockIcon },
        { title: 'Last-Mile Delivery', description: 'Efficient final-stage delivery ensuring packages reach their destination safely.', icon: truckIcon },
        { title: 'Corporate & Industrial Transport', description: 'Specialized logistics solutions for businesses and industrial clients.', icon: factoryIcon },
        { title: 'Secure Transport', description: 'Enhanced security measures for valuable and sensitive shipments.', icon: secureIcon },
        { title: '24/7 Support', description: 'Round-the-clock customer service for all your logistics needs.', icon: supportIcon },
        { title: 'Pan India Reach', description: 'Extensive network covering all major cities and towns across India.', icon: mapIcon },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === services.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [services.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className="relative min-h-screen text-white px-4 md:px-16 py-12 overflow-hidden">

                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                >
                    <source src={srv_bg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay for readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

                {/* Main Content */}
                <div className="relative z-20 flex flex-col items-center">
                    {/* Title */}
                    <h2 className="text-4xl font-bold text-center w-full mb-24">Our Services</h2>

                    <div className="w-full max-w-7xl relative flex items-center justify-center">
                        <div className="flex justify-center gap-6 transition-all duration-500 ease-in-out">

                            {[
                                services[(currentIndex - 1 + services.length) % services.length],
                                services[currentIndex],
                                services[(currentIndex + 1) % services.length],
                            ].map((service, index) => {
                                const isCenter = index === 1;

                                return (
                                    <div
                                        key={service.title}
                                        className={`flex flex-col items-center justify-center text-center rounded-2xl shadow-xl transition-all duration-700 ease-in-out transform
            ${isCenter ? 'scale-110 z-20 bg-gray-900 text-white' : 'scale-90 opacity-80 bg-gray-800'}
            p-8 w-[300px] h-[360px] border border-transparent hover:border-yellow-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] cursor-pointer group`}
                                    >
                                        <img
                                            src={service.icon}
                                            alt="Service Icon"
                                            className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                                        <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{service.description}</p>
                                    </div>
                                );
                            })}

                            {/* Nav Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-full shadow-md z-30"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-full shadow-md z-30"
                            >
                                ›
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );

};

export default Services;
