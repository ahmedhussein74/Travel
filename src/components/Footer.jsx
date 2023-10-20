import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-[60px]">
        <h1 className="font-bold text-[28px] text-center">
          Explore the world with My Dream place
        </h1>
        <p className="text-center text-[#2F80ED] mt-[16px]">
          Explore the world with My Dream place
        </p>
      </div>
      <footer className="w-[90%] py-3 mx-auto flex flex-wrap justify-between gap-[20px]">
        <ul className="text-[#4F4F4F] grow w-full md:w-[200px] text-center lg:text-start">
          <li className="font-bold text-black mb-[15px]">Company</li>
          <li>About</li>
          <li>Jobs</li>
          <li>Newsroom</li>
          <li>Advertising</li>
          <li>Contact us</li>
        </ul>
        <ul className="text-[#4F4F4F] grow w-full md:w-[200px] text-center lg:text-start">
          <li className="font-bold text-black mb-[15px]">Explore</li>
          <li>Australia</li>
          <li>New Zealand</li>
          <li>United States America</li>
          <li>Greece</li>
          <li>Maldives</li>
          <li>Singapore </li>
        </ul>
        <ul className="text-[#4F4F4F] grow w-full md:w-[200px] text-center lg:text-start">
          <li className="font-bold text-black mb-[15px]">Terms and Policies</li>
          <li>Privacy Policy</li>
          <li>Terms of use</li>
          <li>Acessibility</li>
          <li>Reward system policy</li>
        </ul>
        <ul className="text-[#4F4F4F] grow w-full md:w-[200px] text-center lg:text-start">
          <li className="font-bold text-black mb-[15px]">Help</li>
          <li>Support</li>
          <li>Cancel your bookings</li>
          <li>Use Coupon</li>
          <li>Refund Policies</li>
          <li>International Travel Documents</li>
        </ul>
      </footer>
      <p className="bg-[#EBEBEB] text-center py-[10px]">
        Copyright 2023 &#169;{" "}
        <i className="fa-solid fa-plane text-[#2F80ED] rotate-[-45deg]"></i> my
        Dream Place
      </p>
    </>
  );
};

export default Footer;
