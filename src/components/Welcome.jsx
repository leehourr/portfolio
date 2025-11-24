import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const FONT_WEIGHTS = {
  subtitle: { min: 500, max: 900, default: 500 },
  title: { min: 400, max: 900, default: 400 },
};

const setupTextHover = (container, type) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetters = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      fontVariationSettings: `'wght' ${weight}`,
      duration: duration,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: letterLeft, width: letterWidth } =
        letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (letterLeft - left + letterWidth / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);

      animateLetters(letter, min + (max - min) * intensity);
    });
  };
  const handleMousteLeave = () => {
    letters.forEach((letter) => {
      animateLetters(letter, base, 0.3);
    });
  };
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMousteLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMousteLeave);
  };
};

export default function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");
    const titleCCleanup = setupTextHover(titleRef.current, "title");
    return () => {
      subtitleCleanup && subtitleCleanup();
      titleCCleanup && titleCCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef} className="flex flex-wrap justify-center">
        {renderText(
          "I'm Lee Hour. Welcome to my",
          "text-3xl font-georama max-sm:text-xl",
          400
        )}
      </p>
      <h1 ref={titleRef} className="mt-7 flex flex-wrap justify-center">
        {renderText(
          "portfolio.",
          "text-9xl italic font-georama max-sm:text-6xl"
        )}
      </h1>

      <div className="small-screen">
        <p>best viewed on a desktop or tablet.</p>
      </div>
    </section>
  );
}
