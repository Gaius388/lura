import React from "react";
import luraFooter from "../../public/lura_footer.svg";
import { SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="min-h-[55vh] bg-purpleLura px-[1.5em] sm:px-[3em] text-white grid sm:grid-cols-2 z-0 pt-[7.5em] pb-8">
      <div className="grid content-between mb-4 sm:mb-0">
        <Image src={luraFooter} alt="footer-logo" className="w-[6em]" />
        <p className="text-xs sm:w-[42%] leading-relaxed">
          LuraVPN is a private virtual network that has unique features and has
          high security.
        </p>
        <div className="flex gap-3 text-purpleLura my-4">
          <FaFacebookF className="p-1 bg-white text-xl rounded-full" />
          <SiTwitter className="p-1 bg-white text-xl rounded-full" />
          <ImInstagram className="p-1 bg-white text-xl rounded-full" />
        </div>
        <p className="text-xs">&#169;2023LuraVPN</p>
      </div>
      <div className="flex justify-evenly text-xs pb-10 sm:pb-0">
        <ul className="grid content-between gap-2">
          <h3 className="font-bold text-sm">Product</h3>
          <li>Download</li>
          <li>Pricing</li>
          <li>Locations</li>
          <li>Server</li>
        </ul>
        <ul className="grid content-between">
          <h3 className="font-bold text-sm">Engage</h3>
          <li>LuraVPN</li>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
