import React from "react";

const Tips = () => {
  return (
    <section className="w-[90%] md:w-[80%] mt-[-37px] mx-auto p-[15px] flex-col md:flex-row flex flex-wrap justify-center gap-[15px] rounded-lg shadow-lg bg-white">
      <div className="min-w-fit grow bg-[#F2F2F2] text-[#828282] p-[10px] rounded shadow cursor-pointer">
        <i className="fa-solid fa-location-dot text-[#4F4F4F] pr-[10px]"></i>
        Where are you going?
      </div>
      <div className="min-w-fit grow bg-[#F2F2F2] text-[#828282] p-[10px] rounded shadow cursor-pointer">
        <i className="fa-solid fa-calendar-days text-[#4F4F4F] pr-[10px]"></i>
        Check in date
      </div>
      <div className="min-w-fit grow bg-[#F2F2F2] text-[#828282] p-[10px] rounded shadow cursor-pointer">
        <i className="fa-solid fa-calendar-days text-[#4F4F4F] pr-[10px]"></i>
        Check out date
      </div>
      <div className="min-w-fit grow bg-[#2F80ED] text-white text-center p-[10px] rounded shadow cursor-pointer">
        Search
      </div>
    </section>
  );
};

export default Tips;
