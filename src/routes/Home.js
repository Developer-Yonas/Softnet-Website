import Hero from "../components/Hero";
import React from "react";
import Service from "./Service";
import Client from "../components/Client";
function Home() {
  return (
    <>
     <Hero/><br/>
     <Service/>
     <Client/>
    </>
  );
}

export default Home;
