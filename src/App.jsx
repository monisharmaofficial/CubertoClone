import React, { useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import WhatWeDo from "./components/WhatWeDo";
import FeaturedProject from "./components/FeaturedProject";
import Philosophy from "./components/Philosophy";
import Resources from "./components/Resources";
import NewDay from "./components/NewDay";
import FollowUs from "./components/FollowUs";
import TellUs from "./components/TellUs";
import FollowingDot from "./components/FollowingDot";
import VideoSection from "./components/VideoSection";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [dotSize, setDotSize] = useState(12);

  return (
    <div className="relative w-full min-h-screen text-black bg-[#f1f1f1]">
      <FollowingDot dotSize={dotSize} />
      <Navbar/>
      <LandingPage />
      <VideoSection />
      <WhatWeDo />
      <FeaturedProject />
      <Philosophy />
      <Resources />
      <NewDay />
      <FollowUs />
      <TellUs />
    </div>
  );
};

export default App;