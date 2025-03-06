Cuberto Clone - README

Overview

This project is a fully responsive and animated clone of Cuberto's website, implemented using React, GSAP, Framer Motion, Tailwind CSS, and Locomotive Scroll. It includes all major sections with smooth animations, interactive elements, and a unique cursor-following effect.

Sections Implemented

✅ All Sections of the original Cuberto website have been implemented:

Navbar (Animated menu with social media links)

Landing Page (GSAP-based text animations with embedded video)

What We Do (Scroll-triggered animations for text and video)

Featured Projects (GSAP-powered stagger animations for videos and titles)

Philosophy (Animated headings and text)

Resources (Dynamic grid layout with scroll animations)

New Day (Auto-scrolling heading and vertical carousel for mobile screens)

Follow Us (Hover-based effects with interactive links)

Tell Us (Background video with animated buttons and text)

Custom Cursor (Following Dot) (Blend mode effect with dynamic transformations)

Challenges Faced & Solutions

1️⃣ GSAP Animations Not Triggering Properly

Issue: Initially, some GSAP animations were not working as expected due to incorrect element references.
Solution: Used useRef([]) to correctly assign refs to multiple elements and added gsap.context() for better scope management.

2️⃣ Smooth Cursor-Following Effect

Issue: The custom cursor (FollowingDot) was jittery and had inconsistent movement.
Solution: Implemented Framer Motion's spring animation with stiffness and damping values to smooth out the motion.

3️⃣ Cursor Not Showing in Some Sections

Issue: The cursor was disappearing when interacting with VideoSection.
Solution: Added a state-based transformation that changes the cursor's appearance when hovering over specific sections.

4️⃣ Responsive Design for All Screen Sizes

Issue: The layout was not adjusting well on smaller screens, especially the project carousel and video sections.
Solution: Used Tailwind's responsive classes (e.g., sm:block hidden, md:flex, aspect-[9/16]) and updated styles dynamically.

5️⃣ Vite Deployment Error (vite command not found)

Issue: While deploying, vite build was failing due to missing dependencies.
Solution: Reinstalled dependencies with npm install and ensured vite was available in the environment.

Technologies Used

📌 Frontend Technologies

React.js (Component-based structure)

Tailwind CSS (Utility-first styling for responsiveness)

GSAP (GreenSock Animation Platform) (Smooth entrance animations)

Framer Motion (Custom animations like the cursor-following effect)

Locomotive Scroll (Smooth scrolling effects and parallax animations)

Vite (Fast development & optimized build process)

🚀 Final Thoughts

This project successfully replicates Cuberto's UI/UX experience with smooth animations and responsiveness. The challenges were solved efficiently, and the final result provides a seamless interactive user experience.

🔗 Live Demo Link : https://cuberto-clone-three.vercel.app/
