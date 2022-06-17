import React from "react";

export default function OrderSummary() {
  return (
    <div>
      {" "}
      <h1 className="font-black font-RedHat text-2xl text-center pt-10 ">
        Order Summary
      </h1>
      <p className="p-5 text-base font-RedHat  opacity-50  text-center ">
        You can now listen to millions of songs,
      </p>
      <p className=" text-base font-RedHat font-light opacity-50  text-center -mt-5">
        {" "}
        audiobooks, and podcasts on any device
      </p>
      <p className="text-base font-RedHat font-light opacity-50  text-center ">
        anywhere you like!
      </p>
    </div>
  );
}
