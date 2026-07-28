import React from "react";
import PreLoader from "./component/PreLoader";
import Hero from "./component/Hero";
import RightLeft from "./component/RightLeft";

const App = () => {
  return (
    <div className="">
      {/* <PreLoader/> */}

      <Hero />

      <RightLeft />

      <Hero />
    </div>
  );
};

export default App;
