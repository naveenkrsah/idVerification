import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/UserContextProvider";

const DrivingLicense = () => {
  const [licenseNo, setLicenseNo] = useState("");
  const [dob,setDob] = useState("");
  const [drivingvLicenseResult, setdrivingLicenseResult] = useState("");
  const { drivingLicenseVerification } = useUserContext();

  const resetStates = () => {
    setLicenseNo("");
    setDob("");
    setdrivingLicenseResult("");
  };

  const callDrvLicOnSubmit = async (event) => {
    event.preventDefault();
    const resultFromApi = await drivingLicenseVerification(licenseNo, dob);
    setdrivingLicenseResult(resultFromApi);
    resetStates()
  };

  return (
    <div className="bg-gradient-to-b from-slate-500 to-white-300;">
      <div className="container mx-auto w-screen h-screen py-4 flex flex-col justify-between rounded-2xl">
        <Navbar />
        <div className="bg-[url(../src/images/drbg1.jpg)] bg-cover bg-center w-full h-[75vh] text-white flex flex-col justify-center items-center rounded-2xl">
          <div className="container mx-auto py-4 flex flex-col justify-center items-center">
            <div className="bg-slate-900 bg-opacity-90 p-8 rounded-lg drop-shadow-2xl">
              <h1 className="text-white text-2xl md:text-4xl text-center">
                Driving License Verification
              </h1>
              <form
                onSubmit={callDrvLicOnSubmit}
                className="mt-6 flex flex-col gap-3"
              >
                <label
                  htmlFor="drivingLicenseNo"
                  className="text-xl md:text-2xl"
                >
                  Driving License No.
                </label>
                <input
                  className="h-5 md:h-7 px-4 focus:outline-none text-black"
                  type="text"
                  id="drivingLicenseNo"
                  placeholder="Enter driving license number"
                  onChange={(event) => setLicenseNo(event.target.value)}
                  value={licenseNo}
                />
                <label htmlFor="dob" className="text-xl md:text-2xl">
                  Date of Birth
                </label>
                <input
                  className="h-5 md:h-7 px-4 focus:outline-none text-black"
                  type="date"
                  id="dob"
                  placeholder="Enter your date of birth"
                  onChange={(event) => setDob(event.target.value)}
                  value={dob}
                />
                {drivingvLicenseResult}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivingLicense;
