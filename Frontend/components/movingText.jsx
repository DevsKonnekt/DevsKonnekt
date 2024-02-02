"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { FaStar } from "react-icons/fa";

export default function MovingTextSection() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;

  useEffect(() => {
    gsap.set(firstText.current, { xPercent: "0%" });
    gsap.set(secondText.current, { xPercent: "50%" });

    const animate = () => {
      xPercent -= 0.5; // Adjust the speed as per your preference

      if (xPercent < -50) {
        xPercent = 50; // Reset to initial position
      }

      gsap.set(firstText.current, { xPercent: `${xPercent}%` });
      gsap.set(secondText.current, { xPercent: `${xPercent + 50}%` });

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <section className="moving-text-section bg-blue-950 w-full relative overflow-hidden">
      <div className="text-white text-2xl font-bold flex gap-4 w-full absolute top-0 left-0">
        <p ref={firstText} className="flex gap-4 items-center w-full">
          <FaStar className="star" /> Engage. Inspire. Innovate.{" "}
          <FaStar className="star" />
        </p>
        <p ref={secondText} className="flex gap-4 items-center w-full">
          <FaStar className="star" /> Unleash Your Connectivity{" "}
          <FaStar className="star" />
        </p>
      </div>
    </section>
  );
}
