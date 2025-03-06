import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VideoSection = () => {
  const videoRef = useRef(null); // Declare videoRef properly

  useEffect(() => {
    // Set initial state to prevent flickering
    gsap.set(videoRef.current, { opacity: 0, y: 100 });

    // Animate video smoothly
    gsap.to(videoRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "expo.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div>
      {/* Full-Width & Full-Height Video Section */}
      <div
        className="relative w-full min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden"
        ref={videoRef}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://cuberto.com/assets/showreel/short.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default VideoSection;
