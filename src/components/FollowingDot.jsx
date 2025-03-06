import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FollowingDot = ({ dotSize = 12 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <motion.div
      className="hidden sm:block fixed top-0 left-0 rounded-full pointer-events-none z-[9999] bg-white"
      style={{
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        mixBlendMode: "difference", // 🔥 Enables blend mode effect
      }}
      animate={{ 
        x: position.x - dotSize / 2, 
        y: position.y - dotSize / 2 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};

export default FollowingDot;
