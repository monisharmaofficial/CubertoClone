import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LandingPage = () => {
  const textRef = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current.length > 0 && videoRef.current) {
        gsap.set(textRef.current, { opacity: 0, y: 100 });
        gsap.set(videoRef.current, { opacity: 0, y: 100 });

        gsap.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.2,
        });

        gsap.to(videoRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.out",
          delay: 0.3,
        });
      }
    });

    return () => ctx.revert(); // Cleanup GSAP animations on component unmount
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative z-10 min-h-[70vh] md:min-h-screen w-full bg-[#f1f1f1] flex items-center overflow-hidden">

        {/* Text Section */}
        <div className="textStructure md:mt-20 px-5 md:px-20 w-full max-w-[1200px] mx-auto text-left">
          {["We are a digital", "design and", "motion agency"].map(
            (item, index) => (
              <div
                key={index}
                className="masker overflow-hidden"
                ref={(el) => (textRef.current[index] = el)} // Assign refs correctly
              >
                <div className="w-fit flex items-center">
                  {/* Video inside text */}
                  {index === 1 && (
                    <div
                      className="mr-[1vw] w-[20vw] h-[14vw] md:w-[10vw] md:h-[7vw] rounded-full relative top-[0.5vw] overflow-hidden"
                      ref={videoRef} // Assign ref properly
                    >
                      <video
                        className="w-full h-full object-cover"
                        src="https://cuberto.com/assets/home/hero/header.mp4"
                        autoPlay
                        loop
                        muted
                      />
                    </div>
                  )}
                  {/* Heading */}
                  <h1
                    className={`text-[12vw] md:text-[8vw] leading-[12vw] md:leading-[8.5vw] tracking-tight font-medium text-black ${
                      item === "design"
                        ? "font-['Roboto Flex']"
                        : "font-['Matter']"
                    }`}
                  >
                    {item}
                  </h1>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
