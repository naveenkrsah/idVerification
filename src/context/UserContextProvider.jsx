import React, { createContext, useContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const panVerification = async (panNo) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "9e5f1c292fmsh7b212821f4472a9p13b05fjsn1e15b1638358",
        "X-RapidAPI-Host": "pan-card-verification1.p.rapidapi.com",
      },

      body: JSON.stringify({
        task_id: "74f4c926-250c-43ca-9c53-453e87ceacd1",
        group_id: "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
        data: { id_number: panNo },
      }),
    };

    const url =
      "https://pan-card-verification1.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_pan";
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  };

  async function aadharVerification(aadharNo) {
    const encodedParams ={
      "txn_id" : "17c6fa41-778f-49c1-a80a-cfaf7fae2fb8",
      "consent": "Y",
      "uidnumber": aadharNo,
      "clientid" : "222",
      "method" : "uidvalidatev2"
    }
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "9e5f1c292fmsh7b212821f4472a9p13b05fjsn1e15b1638358",
        "X-RapidAPI-Host": "verifyaadhaarnumber.p.rapidapi.com",
      },
      body: JSON.stringify(encodedParams),
    };
    const url =
      "https://verifyaadhaarnumber.p.rapidapi.com/Uidverifywebsvcv1/VerifyAadhaarNumber";

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  };

  const drivingLicenseVerification = async(licenseNo,dob) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "9e5f1c292fmsh7b212821f4472a9p13b05fjsn1e15b1638358",
        "X-RapidAPI-Host": "driving-license-verification.p.rapidapi.com",
      },
      body: JSON.stringify({
        task_id: "74f4c926-250c-43ca-9c53-453e87ceacd1",
        group_id: "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
        data: { id_number: { licenseNo }, date_of_birth: { dob } },
      }),
    };

    const url = 'https://driving-license-verification.p.rapidapi.com/v3/tasks/async/verify_with_source/ind_driving_license';
    const response = await fetch(url,options);
    const data = await response.json();
    console.log(data);
    return data ;
  };

  return (
    <UserContext.Provider
      value={{
        panVerification,
        aadharVerification,
        drivingLicenseVerification
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
