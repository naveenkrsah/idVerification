import React, {useState} from "react";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/UserContextProvider";

const Pan = () => {

  const [panNo, setPanNo] = useState("");
  const [panResult, setpanResult] = useState({});
  
  const {panVerification} = useUserContext();

  const resetStates = () => {
    setPanNo("");
    setpanResult("");
  };

  const callPanOnSubmit = async(event)=>{
    event.preventDefault();
    const resultFromApi = await panVerification(panNo);
    setpanResult(resultFromApi);
    resetStates()
  }

  return (
    <div className="bg-gradient-to-b from-cyan-300 to-pink-300;">
      <div className="w-screen h-screen flex flex-col">
        <div className="container mx-auto w-screen h-screen py-4 flex flex-col justify-between">
          <Navbar />
          <div className="bg-[url(../src/images/panbg3.webp)] bg-cover bg-center h-[75vh] w-full flex flex-col justify-center items-center rounded-2xl">
            <div className="bg-slate-900 text-white bg-opacity-90 p-8 rounded-lg drop-shadow-2xl">
              <h1 className="py-10 text-2xl md:text-4xl">Pan Verification</h1>
              <form
                onSubmit={callPanOnSubmit}
                className="flex flex-col justify-center"
              >
                <label className="text-xl md:text-2xl" htmlFor="panNo">Enter Your Pan no. : </label>
                <input
                  className="my-input-field"
                  type="text"
                  id="panNo"
                  placeholder="Enter your Pan no."
                  onChange={(event) => setPanNo(event.target.value)}
                  value={panNo}
                />
                <input
                  className="bg-black text-white rounded-xl my-2 py-2 px-4"
                  type="submit"
                  value="verify"
                />
              </form>
              <div className="flex flex-col justify-center items-center w-full p-4">
                <h1>{panResult?.status}</h1>
                {panResult?.status === "completed" && (<p className="flex flex-row">
                  Status : {panResult?.source_output?.status}
                </p>)}
                {panResult?.status === "completed" && (<p className="flex flex-row">
                  Name on card : {panResult?.source_output?.name_on_card}
                </p>)}
                {panResult?.status === "completed" && (<p className="flex flex-row">
                  Last name : {panResult?.source_output?.last_name}
                </p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pan;
