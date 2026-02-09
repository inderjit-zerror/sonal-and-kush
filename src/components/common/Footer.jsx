import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-1">

        {/* Heading */}
        <p className="uppercase  text-gray-600">
          Email us for more information
        </p>

        {/* Email */}
        <div
          className="text-sm text-gray-500 text-[13px] hover:text-black transition-colors"
        >
         sonalandkush@gmail.com
        </div>

        {/* Copyright */}
        <div className=" text-gray-400 text-[13px]">
          © 2026 by  <a href="https://www.zerrorstudios.com/"><span> Zerror Studios</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
