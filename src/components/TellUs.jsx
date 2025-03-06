import React from "react";

const TellUs = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cuberto.com/assets/footer/ropes-sm.mp4?2"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-[10vw] md:text-[8vw] leading-[10vw] md:leading-[5vw]">Have</h1>
        <h2 className="text-[8vw] md:text-[8vw] italic font-light">an idea?</h2>
        <button className="mt-6 px-8 sm:px-12 py-2 sm:py-3 border-2 border-white rounded-full text-[6vw] sm:text-[3vw] md:text-[2vw] hover:bg-white hover:text-black transition-all">
          TELL US
        </button>
      </div>

      {/* Footer Buttons */}
      <div className="absolute bottom-5 left-0 w-full text-center md:text-left text-white text-xs sm:text-sm md:text-lg px-4 sm:px-10">
        <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-3 sm:gap-6">
          <button className="text-xs sm:text-sm md:text-[1vw] border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition-all">
            INFO@CUBERTO.COM
          </button>
          <button className="text-xs sm:text-sm md:text-[1vw] border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition-all">
            +1 301 549 9309
          </button>
          <button className="text-xs sm:text-sm md:text-[1vw] border-none">PRIVACY POLICY</button>
        </div>
      </div>
    </div>
  );
};

export default TellUs;
