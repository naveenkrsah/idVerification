import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-300 to-pink-300;">
      <div className="container mx-auto w-screen h-screen py-4 flex flex-col justify-between">
        <div className="bg-[url(../src/images/bg4.jpg)] bg-cover bg-center w-full h-[75vh] flex justify-center items-center rounded-2xl">
          <h1 className="text-[100px] text-white">Verification App</h1>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
