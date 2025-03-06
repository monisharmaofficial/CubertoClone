import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const videoRefs = useRef([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.set(headingRef.current, { opacity: 0, y: 100 });
    videoRefs.current.forEach((el) => gsap.set(el, { opacity: 0, y: 60 }));
    titleRefs.current.forEach((el) => gsap.set(el, { opacity: 0, y: 30 }));

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
        });

        gsap.to(videoRefs.current, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.4,
        });

        gsap.to(titleRefs.current, {
          opacity: 1,
          y: 0,
          duration: 1.3,
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
      className="bg-black rounded-t-[8vw] md:rounded-t-[6vw] text-white py-20 sm:py-32 md:py-40 px-4 md:px-20"
    >
      {/* Heading Section */}
      <div
        ref={headingRef}
        className="max-w-[1200px] mx-auto text-center md:text-left"
      >
        <h1 className="text-[10vw] sm:text-[8vw] md:text-[10vw] font-medium leading-[10vw] sm:leading-[8vw] md:leading-[8vw]">
          Featured
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <video
            className="w-[20vw] sm:w-[12vw] h-auto rounded-full object-cover"
            src="https://cuberto.com/assets/featured/header.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h2 className="text-[10vw] sm:text-[7vw] md:text-[10vw] italic font-light ml-0 md:ml-4 mt-2 md:mt-0">
            projects
          </h2>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-[1200px] mx-auto mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {[
          {
            title: "Punto Pago - The First Super-App in Latin America",
            video: "https://cuberto.com/assets/projects/puntopago/cover.mp4",
          },
          {
            title:
              "Kelvin Zero - A digital product for passwordless authentication",
            video: "https://cuberto.com/assets/projects/kzero/cover.mp4?2",
          },
          {
            title: "DaoWay - Astrology planner app: plan, achieve, thrive",
            video: "https://cuberto.com/assets/projects/daoway/cover.mp4",
          },
          {
            title: "Punto Pago - The First Super-App in Latin America",
            video: "https://cuberto.com/assets/projects/puntopago/cover.mp4",
          },
          {
            title:
              "Kelvin Zero - A digital product for passwordless authentication",
            video: "https://cuberto.com/assets/projects/kzero/cover.mp4?2",
          },
          {
            title: "DaoWay - Astrology planner app: plan, achieve, thrive",
            video: "https://cuberto.com/assets/projects/daoway/cover.mp4",
          },
        ].map((project, index) => {
          return (
            <div
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              className={`rounded-xl overflow-hidden ${
                index % 2 === 1 ? "md:mt-[100px]" : ""
              }`}
            >
              <video
                className="w-auto h-auto aspect-[9/16] object-cover rounded-[20px] md:rounded-[40px]"
                src={project.video}
                loop
                muted
                playsInline
              />

              <div
                ref={(el) => (titleRefs.current[index] = el)}
                className="text-white text-base sm:text-lg font-medium bg-black bg-opacity-60 px-4 py-2 rounded-lg mt-2"
              >
                {project.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
