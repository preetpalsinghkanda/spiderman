import React, { useRef } from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PreLoader = () => {
  const loaderRef = useRef(null);
  const progresRef = useRef(null);
  const counterRef = useRef(null);

  useGSAP(() => {
    const count = { value: 0 };
    const tl = gsap.timeline();

    gsap.to(count, {
      value: 100,
      duration: 0.8,
      ease: "none",

      onUpdate: () => {
        progresRef.current.style.width = `${count.value}%`;
        counterRef.current.innerHTML = Math.floor(count.value);
      },

      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
        });
      },
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      style={{ fontFamily: "Bricolage Grotesque" }}
      className="fixed  inset-0 z-50 flex bg-[#EE3335] flex-col justify-center items-center"
    >
      <div className="w-40 h-[20px] -rotate-16 overflow-hidden">
        <div ref={progresRef} className="h-full bg-black w-0"></div>
      </div>

      <div className="absolute bottom-55 flex gap-25 items-center">
        <p className="text-sm">LOADING...</p>
        <p ref={counterRef} className="text-sm">
          0
        </p>
      </div>
      <h1 className="absolute  bottom-35 text-4xl text-center leading-none">
        Spiderman: The
        <br />
        Brand New Day
      </h1>
    </div>
  );
};

export default PreLoader;
