import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-900 bg-opacity-900 text-white h-[15vh] w-full flex items-center justify-between rounded-2xl px-4">
      <Link
        to="/"
        className="w-full h-full"
      >
        <button className="my-nav-link-hover w-full h-full flex-1 text-2xl">Home</button>
      </Link>
      <Link to="/aadhar" className="w-full h-full">
        <button className="my-nav-link-hover w-full h-full flex-1 text-2xl">
          Aadhar
        </button>
      </Link>
      <Link to="/pan" className="w-full h-full">
        <button className=" my-nav-link-hover w-full h-full flex-1 text-2xl">
          PAN
        </button>
      </Link>
      <Link to="/drivingLicense" className="w-full h-full">
        <button className=" my-nav-link-hover w-full h-full flex-1 text-2xl">
          Driving License
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
