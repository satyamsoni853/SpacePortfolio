import React from "react";

const WhoIAm = () => {
  return (
    <section
      id="who-i-am"
      className="flex flex-col items-center justify-center w-full py-20 relative z-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-10">
        Who I Am
      </h1>

      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-[900px] px-6 p-8 md:p-12 rounded-3xl bg-[#0300145e] border border-[#7042f88b] backdrop-blur-md shadow-2xl shadow-[#2A0E61]/50 relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-[#7042f8] hover:shadow-[#2A0E61] cursor-default">
        {/* Background Gradient for Card */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-purple-500/10 to-cyan-500/10 z-[-1]" />

        {/* Text Content */}
        <div className="w-full flex flex-col gap-6 text-gray-300 text-lg leading-relaxed text-center relative z-10">
          <p>
            I am a passionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
              Java Full Stack Developer
            </span>{" "}
            currently pursuing my B.Tech in Computer Science, with hands-on
            experience in building responsive, scalable, and user-focused web
            applications.
          </p>
          <p>
            I have a strong foundation in{" "}
            <span className="text-purple-400">
              Core Java, SQL, J2EE, Servlets
            </span>
            , and modern frontend technologies like HTML, CSS, JavaScript,
            React.js, and Next.js, allowing me to seamlessly connect robust
            backend logic with clean and interactive user interfaces.
          </p>
          <p>
            I have gained practical industry exposure through internships and
            roles at{" "}
            <span className="text-cyan-400">
              Cloudfire IT Services, Apex Planet Software Pvt Ltd, Uniisphere
              Unified Pvt Ltd, and CodSoft
            </span>
            , where I worked on real-world projects, frontend optimization, and
            modern UI development.
          </p>
          <p>
            Alongside my academic journey at{" "}
            <span className="text-purple-400">KNIPSS (2025)</span>, I have
            completed professional training in Java Full Stack Development from{" "}
            <span className="text-cyan-400">JSpider, Bengaluru</span>. I am a
            continuous learner who believes in writing clean, maintainable code
            and building products that solve real problems while delivering
            meaningful user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
