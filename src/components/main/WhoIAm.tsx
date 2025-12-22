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

      <div className="md:w-[800px] w-full px-6 flex flex-col gap-6 text-gray-300 text-lg leading-relaxed text-center">
        <p>
          I am a dedicated{" "}
          <span className="text-white font-bold">
            Java Full Stack Developer
          </span>
          with a strong foundation in building scalable and efficient web
          applications. Currently pursuing my B.Tech in Computer Science, I
          bridge the gap between complex backend logic and interactive frontend
          designs.
        </p>

        <p>
          My technical journey is fueled by a passion for solving real-world
          problems. Whether it's architecting a{" "}
          <span className="text-purple-400">RESTful API</span> with Spring Boot
          or crafting a smooth{" "}
          <span className="text-cyan-400">User Experience</span> with Next.js, I
          strive for excellence in every line of code.
        </p>

        <p>
          Beyond coding, I am a continuous learner, constantly exploring new
          technologies and best practices to stay ahead in the ever-evolving
          tech landscape. I believe in writing clean, maintainable code and
          delivering products that genuinely add value to users.
        </p>
      </div>
    </section>
  );
};

export default WhoIAm;
