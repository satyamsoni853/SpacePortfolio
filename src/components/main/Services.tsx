import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center w-full py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-20">
        Services I Provide
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 w-full max-w-[1200px]">
        {/* Service 1 */}
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] hover:bg-[#2A0E61]/20 hover:shadow-lg hover:shadow-[#2A0E61] transition-all duration-300 hover:scale-105 hover:border-[#7042f8] cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🌐</span>
            <h1 className="text-2xl font-bold text-white">Web Development</h1>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Responsive website development using HTML, CSS, JavaScript</li>
            <li>Modern UI development with React JS & Next.js</li>
            <li>Cross-browser and mobile-friendly designs</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] hover:bg-[#2A0E61]/20 hover:shadow-lg hover:shadow-[#2A0E61] transition-all duration-300 hover:scale-105 hover:border-[#7042f8] cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">⚙️</span>
            <h1 className="text-2xl font-bold text-white">
              Full Stack Development
            </h1>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>End-to-end web application development</li>
            <li>Backend development using Java, Servlets, J2EE</li>
            <li>Database design & integration with SQL</li>
            <li>REST API integration</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] hover:bg-[#2A0E61]/20 hover:shadow-lg hover:shadow-[#2A0E61] transition-all duration-300 hover:scale-105 hover:border-[#7042f8] cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎨</span>
            <h1 className="text-2xl font-bold text-white">UI / UX Design</h1>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Clean, user-friendly interface design</li>
            <li>Conversion-focused layouts</li>
            <li>Pixel-perfect implementation from designs</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] hover:bg-[#2A0E61]/20 hover:shadow-lg hover:shadow-[#2A0E61] transition-all duration-300 hover:scale-105 hover:border-[#7042f8] cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📱</span>
            <h1 className="text-2xl font-bold text-white">
              Frontend Development
            </h1>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Single Page Applications (SPA)</li>
            <li>Reusable components & optimized performance</li>
            <li>State management and API consumption</li>
          </ul>
        </div>

        {/* Service 5 */}
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] hover:bg-[#2A0E61]/20 hover:shadow-lg hover:shadow-[#2A0E61] transition-all duration-300 hover:scale-105 hover:border-[#7042f8] cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🗄️</span>
            <h1 className="text-2xl font-bold text-white">
              Database & Backend Services
            </h1>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>CRUD operations and relational database management</li>
            <li>Secure form handling & validations</li>
            <li>Authentication & authorization basics</li>
          </ul>
        </div>

        {/* Service 6 */}
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] hover:bg-[#2A0E61]/20 hover:shadow-lg hover:shadow-[#2A0E61] transition-all duration-300 hover:scale-105 hover:border-[#7042f8] cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚀</span>
            <h1 className="text-2xl font-bold text-white">
              Website Optimization & Maintenance
            </h1>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Performance optimization</li>
            <li>Bug fixing and feature enhancements</li>
            <li>Website updates & maintenance support</li>
          </ul>
        </div>

        {/* Service 7 */}
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] hover:bg-[#2A0E61]/20 hover:shadow-lg hover:shadow-[#2A0E61] transition-all duration-300 hover:scale-105 hover:border-[#7042f8] cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💼</span>
            <h1 className="text-2xl font-bold text-white">
              Portfolio & Business Websites
            </h1>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Personal portfolio websites</li>
            <li>Business & startup websites</li>
            <li>Landing pages</li>
          </ul>
        </div>

        {/* Service 8 */}
        <div className="border border-[#7042f88b] p-6 rounded-lg bg-[#0300145e] hover:bg-[#2A0E61]/20 hover:shadow-lg hover:shadow-[#2A0E61] transition-all duration-300 hover:scale-105 hover:border-[#7042f8] cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🧪</span>
            <h1 className="text-2xl font-bold text-white">
              Testing & Debugging
            </h1>
          </div>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Debugging JavaScript & Java-based applications</li>
            <li>Cross-device testing and fixes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
