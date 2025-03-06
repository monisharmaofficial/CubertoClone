import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FollowUs = () => {
  const [scrollDirection, setScrollDirection] = useState(1);
  const [speed, setSpeed] = useState(10);
  const [hovered, setHovered] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection(1); // Move Left on Scroll Down
      } else {
        setScrollDirection(-1); // Move Right on Scroll Up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white py-20 w-full md:px-20 overflow-hidden">
      {/* Heading Section with Scroll Effect */}
      <div className="w-full mx-auto relative overflow-hidden">
        <motion.div
          className="flex items-center whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={{ x: scrollDirection === 1 ? ["0%", "-100%"] : ["0%", "100%"] }}
          transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        >
          <video
            className="w-[12vw] h-[9vw] rounded-full object-cover"
            src="https://cuberto.com/assets/smfeed/header.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h1 className="text-[10vw] md:text-[9vw] font-medium leading-[6vw] ml-5">
            Follow Us
          </h1>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <div className="max-w-[1200px] mx-auto mt-28 relative">
        <p className="text-sm uppercase opacity-70 ml-2">Social Media and Contacts</p>
        <div className="mt-6 relative">
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute bg-white text-black flex justify-around items-center py-6 text-2xl px-4 rounded-md"
                style={{
                  top: Math.min(hoverPosition.top, window.innerHeight - 100),
                  left: Math.min(hoverPosition.left, window.innerWidth - 100),
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                {Array(5)
                  .fill(hovered)
                  .map((name, index) => (
                    <span key={index} className="flex items-center gap-2">
                      {name} <span className="text-xl">↗</span>
                    </span>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
          {[
            "Instagram",
            "LinkedIn",
            "Dribbble",
            "GitHub",
            "YouTube",
            "Behance",
            "Twitter",
          ].map((name, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-t border-opacity-[30%] border-white py-10 text-lg md:text-2xl relative"
              onMouseEnter={(e) => {
                setHovered(name);
                setHoverPosition({ top: e.clientY, left: e.clientX });
              }}
              onMouseLeave={() => setHovered(null)}
            >
              <a href="#" className="hover:underline ml-2">{name}</a>
              <span className="text-2xl">↗</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
        <div>
          <p className="uppercase text-sm opacity-70">Main Office</p>
          <p className="mt-2">901 N Pitt Street Alexandria VA, 22314</p>
          <button className="mt-4 px-6 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all">
            INFO@CUBERTO.COM
          </button>
        </div>
        <div>
          <p className="uppercase text-sm opacity-70">Second Office</p>
          <p className="mt-2">Na Perstyne 342/1, 11000 Prague</p>
          <button className="mt-4 px-6 py-3 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all">
            +1 301 549 9309
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
