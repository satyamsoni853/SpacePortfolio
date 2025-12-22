import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center w-full py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-20">
        My Education
      </h1>
      <div className="w-full flex flex-col items-center gap-10">
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] max-w-[800px] w-[90%] mx-auto hover:shadow-lg hover:shadow-[#2A0E61] transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-white">
            Bachelor of Technology (B.Tech) – Computer Science
          </h1>
          <h2 className="text-xl text-gray-300">
            Kamala Nehru Institute of Physical and Social Sciences
          </h2>
          <span className="text-gray-400 text-sm">2021 – 2025 (Expected)</span>
          <p className="text-gray-200 mt-4 leading-relaxed">
            Specialization: Java Full Stack Web Development
          </p>
        </div>
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] max-w-[800px] w-[90%] mx-auto hover:shadow-lg hover:shadow-[#2A0E61] transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-white">
            Intermediate (12th Grade)
          </h1>
          <h2 className="text-xl text-gray-300">
            Sangam Modern Inter College, Prayagraj
          </h2>
          <span className="text-gray-400 text-sm">2020</span>
        </div>
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] max-w-[800px] w-[90%] mx-auto hover:shadow-lg hover:shadow-[#2A0E61] transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-white">
            High School (10th Grade)
          </h1>
          <h2 className="text-xl text-gray-300">
            Sangam Modern Inter College, Prayagraj
          </h2>
          <span className="text-gray-400 text-sm">2018</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
