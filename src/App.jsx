import React from "react";
import PreLoader from "./component/PreLoader";
import Hero from "./component/Hero";
import RightLeft from "./component/RightLeft";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="h-[100vh]">
      {/* <PreLoader/> */}

      <Navbar />
    
      {/*
      <RightLeft /> */}

      <Hero />
    </div>
  );
};

export default App;
