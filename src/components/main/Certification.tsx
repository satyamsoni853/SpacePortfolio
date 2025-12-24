"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// If @motionone/utils is not installed, we can define wrap locally
// const wrap = (min: number, max: number, v: number) => {
//   const rangeSize = max - min;
//   return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
// };
// But usually framer-motion users might have it or we can just use the local definition below to be safe.

function wrapNumber(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

const certificationImages = [
  "/certification/Codsoftt.png",
  "/certification/Jspiders.png",
  "/certification/img10.jpg",
  "/certification/img11.png",
  "/certification/img3.jpg",
  "/certification/img4.jpg",
  "/certification/img6.jpg",
  "/certification/img7.jpg",
  "/certification/img8.jpg",
  "/certification/img9.jpg",
];

interface ParallaxProps {
  images: string[];
  baseVelocity: number;
}

function ParallaxText({ images, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrapNumber(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * that we have four children (100% / 4). This would also want creating dynamically.
   */
  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap w-full">
      <motion.div className="flex flex-nowrap gap-10" style={{ x }}>
        {/* Render images multiple times to cover the screen and allow looping */}
        {[...images, ...images, ...images, ...images].map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[300px] h-[200px] relative rounded-xl overflow-hidden shadow-lg border border-[#7042f88b] bg-[#0300145e] backdrop-blur-sm hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={src}
              alt="Certification"
              fill
              className="object-contain p-2"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const Certification = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden py-20 z-20"
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 pb-10 uppercase tracking-widest">
          Certifications
        </h1>
        <p className="text-gray-300 text-[20px] max-w-[600px] text-center px-4">
          Driving innovation with proven skills and recognized expertise.
        </p>
      </div>

      <div className="w-full flex flex-col gap-16">
        <ParallaxText
          baseVelocity={-1}
          images={certificationImages.slice(0, 5)}
        />
        <ParallaxText baseVelocity={1} images={certificationImages.slice(5)} />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#030014] to-transparent opacity-50 z-[-1] pointer-events-none" />
    </section>
  );
};

export default Certification;
