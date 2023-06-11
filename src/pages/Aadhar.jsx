import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/UserContextProvider";

const Aadhar = () => {
  const [aadharNo, setaadharNo] = useState("");
  const [aadharResult, setAadharResult] = useState({});

  const { aadharVerification } = useUserContext();

  const handleonchange = (event) => {
    setaadharNo(event.target.value);
  };

  const resetStates = () => {
    setaadharNo("");
    setAadharResult("");
  };

  const callAadharApiOnSubmit = async (event) => {
    event.preventDefault();
    const regex = /^\d{12}$/;
    if (regex.test(aadharNo)) {
      const resultFromApi = await aadharVerification(aadharNo);
      setAadharResult(resultFromApi);
    }

    resetStates();
  };

  return (
    <div className="bg-gradient-to-b from-cyan-300 to-pink-300;">
      <div className="container mx-auto ">
        <div className="container mx-auto w-screen h-screen py-4 flex flex-col justify-between">
          <Navbar />
          <div className="bg-[url(../src/images/aadharbg.jpg)] bg-cover bg-center text-white container mx-auto w-screen h-[75vh] rounded-2xl flex flex-col justify-center items-center">
            <div className="bg-slate-900 bg-opacity-90 p-8 rounded-lg drop-shadow-2xl">
              <h1 className="text-2xl md:text-4xl text-center">
                Aadhar Verification
              </h1>
              <form
                onSubmit={callAadharApiOnSubmit}
                className="mt-6 flex flex-col gap-3"
              >
                <label className="text-xl md:text-2xl" htmlFor="aadharNo">
                  Aadhar No.
                </label>
                <input
                  className="my-input-field"
                  type="text"
                  name="enrollno"
                  required
                  onChange={handleonchange}
                  placeholder="Enter Aadhar Number"
                  value={aadharNo}
                  id="aadharNo"
                />
                <div className="pt-4 flex justify-between">
                  <input
                    className="bg-sky-500/100 border-solid border-2 border-indigo-600 rounded-lg px-6"
                    type="submit"
                    value="Verify"
                  />
                  <input
                    className="bg-sky-500/100 border-solid border-2 border-indigo-600 rounded-lg px-6"
                    type="reset"
                    value="Reset"
                    onClick={resetStates}
                  />
                </div>
                {/* {aadharResult?.errorMessage ? (
                  <p>{aadharResult?.ErrorMessage}</p>
                ) : (
                  <>
                    <p>{aadharResult?.Verify_status}</p>
                    <p>{aadharResult?.ErrorMessage}</p>
                  </>
                )} */}
                <p>{aadharResult?.Succeeded?.Verify_status}</p>
                <p>{aadharResult?.Succeeded?.ErrorMessage}</p>
                {aadharResult?.Succeeded?.Verify_status === "Uid is Valid" && (
                  <div>
                    <h1>
                      status :{aadharResult?.Succeeded?.Uid_Details?.status}
                    </h1>
                    <h1>
                      address :{aadharResult?.Succeeded?.Uid_Details?.address}
                    </h1>
                    <h1>
                      ageBand :{aadharResult?.Succeeded?.Uid_Details?.ageBand}
                    </h1>
                    <h1>
                      gender :{aadharResult?.Succeeded?.Uid_Details?.gender}
                    </h1>
                    <h1>
                      maskedMobileNumbe :
                      {aadharResult?.Succeeded?.Uid_Details?.maskedMobileNumbe}
                    </h1>
                    <h1>
                      statusMessage :
                      {aadharResult?.Succeeded?.Uid_Details?.statusMessage}
                    </h1>
                    <h1>
                      aadhaarStatusCode :
                      {aadharResult?.Succeeded?.Uid_Details?.aadhaarStatusCode}
                    </h1>
                    {aadharResult?.Succeeded?.Uid_Details?.dob !== "null" && (
                      <h1>
                        Date of Birth :{" "}
                        {aadharResult?.Succeeded?.Uid_Details?.dob}
                      </h1>
                    )}
                    {aadharResult?.Succeeded?.Uid_Details?.mobileNumber !==
                      "null" && (
                      <h1>
                        Mobile Number:{" "}
                        {aadharResult?.Succeeded?.Uid_Details?.mobileNumber}
                      </h1>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aadhar;
