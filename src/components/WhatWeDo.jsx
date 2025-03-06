import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Set initial animation states
    gsap.set(videoRef.current, { opacity: 0, scale: 0.7 }); // Video starts smaller (depth effect)
    gsap.set([textRef.current, buttonRef.current], { opacity: 0, y: 100 });

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%", // Animation starts when the section enters viewport
      onEnter: () => {
        gsap.to(videoRef.current, {
          opacity: 1,
          scale: 1, // Expands from depth to normal size
          duration: 1.5,
          ease: "power3.out",
        });

        gsap.to([textRef.current, buttonRef.current], {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
          stagger: 0.3,
        });
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white flex flex-col md:flex-row items-center justify-center px-5 md:px-16 lg:px-20 py-16 lg:py-20 gap-10 overflow-hidden"
    >
      {/* Video Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <video
          ref={videoRef}
          className="w-[90%] md:w-full h-auto object-cover rounded-lg"
          src="https://cuberto.com/assets/home/summary/1.mp4?3"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Text & Button Section */}
      <div className="w-full md:w-1/2 text-center md:text-left px-2">
        <p ref={textRef} className="text-md sm:text-lg md:text-2xl font-medium text-black">
          Cuberto is a leading digital product agency focused on branding, UI/UX
          design, mobile, and web development.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <button
            ref={buttonRef}
            className="mt-6 px-10 py-4 md:px-20 md:py-6 border-2 border-black rounded-full text-sm md:text-lg font-medium hover:bg-black hover:text-white transition-all"
          >
            What we do
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
