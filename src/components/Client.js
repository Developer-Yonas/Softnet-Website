import React from "react";
import ClientSlider from "./ClientSlider"; // Adjust the path based on your project structure

const Client = () => {
  return (
    <div className="container  my-9">
      <h2 className="text-4xl  mx-10 text-violet-900 font-semibold mb-4">Our Clients</h2>
      <ClientSlider />
    </div>
  );
};

export default Client;
