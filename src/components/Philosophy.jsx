import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);
  const headingRefs = useRef([]);
  const videoRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.set(headingRefs.current, { opacity: 0, y: 100 });
    gsap.set(videoRef.current, { opacity: 0, scale: 0.7 });
    textRefs.current.forEach((el) => gsap.set(el, { opacity: 0, y: 30 }));

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        gsap.to(headingRefs.current, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.3,
        });

        gsap.to(videoRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
        });

        gsap.to(textRefs.current, {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power3.out",
          delay: 0.2,
          stagger: 0.3,
        });
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white rounded-t-[8vw] md:rounded-t-[6vw] text-black py-20 sm:py-32 md:py-40 px-4 md:px-20"
    >
      {/* Heading Section */}
      <div className="max-w-[1200px] mx-auto pt-24 sm:pt-36 text-center md:text-left">
        <h1
          ref={(el) => (headingRefs.current[0] = el)}
          className="text-[10vw] sm:text-[7vw] md:text-[6vw] font-medium leading-[10vw] sm:leading-[7vw] md:leading-[5vw]"
        >
          Our
        </h1>
        <h2
          ref={(el) => (headingRefs.current[1] = el)}
          className="text-[10vw] sm:text-[7vw] md:text-[6vw] italic font-light"
        >
          philosophy
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px] pb-24 sm:pb-36 mx-auto mt-12 sm:mt-16 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
        {/* Video Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            ref={videoRef}
            className="w-full sm:w-[80%] md:w-[60%] object-cover aspect-video rounded-lg md:rounded-xl"
            src="https://cuberto.com/assets/home/summary/2.mp4?3"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <p
            ref={(el) => (textRefs.current[0] = el)}
            className="text-base sm:text-lg md:text-xl font-medium"
          >
            In our team, developers work alongside designers, strategists, and analysts.
            Cuberto doesn’t do cookie-cutter solutions, and we build products exactly as they
            were during the design phase, with no shortcuts or simplifications.
          </p>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium"
          >
            We’re driven by user-centered design that drives productivity and increases revenue.
            Our expertise and ingenuity are remarkable, yet we always strive to outdo and
            outperform our previous achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
