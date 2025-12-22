import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center w-full py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-20">
        Experience
      </h1>
      <div className="w-full flex flex-col items-center gap-10">
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] max-w-[800px] w-[90%] mx-auto hover:shadow-lg hover:shadow-[#2A0E61] transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-white">
            Cloudfire IT Services
          </h1>
          <h2 className="text-xl text-gray-300">Next.Js Developer</h2>
          <span className="text-gray-400 text-sm">
            Gurugram, India | Nov 2025 - Present
          </span>
          <p className="text-gray-200 mt-4 leading-relaxed">
            Freelance Next.js Developer working on a travel booking website.
            Responsible for frontend development, API integration, dynamic data
            rendering, and building responsive, user-friendly UI components
            using Next.js while ensuring smooth performance and cross-device
            compatibility.
          </p>
        </div>
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] max-w-[800px] w-[90%] mx-auto hover:shadow-lg hover:shadow-[#2A0E61] transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-white">
            Uniisphere Unified Pvt Ltd
          </h1>
          <h2 className="text-xl text-gray-300">Front-End Developer</h2>
          <span className="text-gray-400 text-sm">
            Gurugram, India | Nov 2024 - Nov 2025
          </span>
          <p className="text-gray-200 mt-4 leading-relaxed">
            Worked as a Frontend Developer on a unified job-portal and
            social-media platform. Created responsive, animated UIs with
            Next.js/React, integrating APIs, and adding real-time features like
            chat using WebSockets.
          </p>
        </div>
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] max-w-[800px] w-[90%] mx-auto hover:shadow-lg hover:shadow-[#2A0E61] transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-white">
            JSpider-Training Institute
          </h1>
          <h2 className="text-xl text-gray-300">Java Full Stack Developer</h2>
          <span className="text-gray-400 text-sm">
            Bengaluru, India | Apr 2024 - Apr 2025
          </span>
          <p className="text-gray-200 mt-4 leading-relaxed">
            Completed Java Full Stack Development training. Gained hands-on
            experience in building end-to-end web applications. The training
            focused on practical implementation of Java, SQL, Servlets, and
            modern frontend technologies through real-world assignments and
            projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
