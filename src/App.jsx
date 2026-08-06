import React, { useEffect } from "react";
import Lenis from "lenis";
import PreLoader from "./component/PreLoader";
import Hero from "./component/Hero";
import RightLeft from "./component/RightLeft";
import Navbar from "./component/Navbar";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="h-[100vh]">
      {/* <PreLoader/> */}

      <Navbar />

      {/* <RightLeft />  */}

      <Hero />
    </div>
  );
};

export default App;
