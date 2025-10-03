import React from "react";

const Banner = ({ inprogress }) => {
  return (
    <div className="mt-5 max-w-[1200px] mx-auto flex justify-between gap-5">
      <div className="w-[780px] h-[250px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-lg flex items-center justify-center">
        <div>
          <h1 className="text-center text-xl mb-2 text-white">Resolved</h1>
          <h1 className="text-white text-center  font-bold text-4xl">{inprogress}</h1>
        </div>
      </div>

      <div className="w-[780px] h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-lg flex items-center justify-center">
        <div>
          <h1 className="text-center text-xl mb-2 text-white">Resolved</h1>
          <h1 className="text-white text-center  font-bold text-4xl">0</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
