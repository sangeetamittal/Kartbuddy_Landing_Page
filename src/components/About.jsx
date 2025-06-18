import React from "react";
import team from '../assets/compressed_team.mp4'
import tracking from '../assets/compressed_tracking.mp4'
import affordable from '../assets/compressed_affordable.mp4'
import modernFleet from '../assets/compressed_modernFleet.mp4'
import about_bg from '../assets/compressed_about_bg.mp4'

const features = [
  {
    title: "Experienced Team",
    video: team,
  },
  {
    title: "Modern Fleet",
    video: modernFleet,
  },
  {
    title: "Real-Time Tracking",
    video: tracking,
  },
  {
    title: "Affordable Rates",
    video: affordable,
  },
];

const AboutSection = () => {
   return (
    <section className="relative w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={about_bg} 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 py-24 text-white">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          About KartBuddy
        </h2>

        {/* Text */}
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-200 space-y-4 mb-16">
          <p>
            KartBuddy is a leading logistics and transportation company in India,
            committed to providing reliable, efficient, and cost-effective solutions.
          </p>
          <p>
            With modern infrastructure and a passionate team, we deliver innovation
            and speed across a wide range of client needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
            >
              <video
                src={feature.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
