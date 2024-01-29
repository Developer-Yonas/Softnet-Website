import Hero from "../components/Hero";
import React from "react";
import Service from "./Service";
import Client from "../components/Client";
import Portfolio from "./Portfolio";
function Home() {
  return (
    <>
     <Hero/><br/>
     <Service/>
     <Portfolio/>
     <Client/>
    </>
  );
}

export default Home;
