import React from "react";
import Image from "next/image";
import luraFooter from "../public/lura_footer.svg";
import logManImage from "../public/loginPage.svg";
const Layout = ({ children }) => {
  return (
    <main className="grid grid-cols-[1fr,2fr] min-h-screen">
      <div className="bg-purpleLura px-12 text-white py-8 flex flex-col items-start">
        <Image src={luraFooter} alt="header-logo" className="w-[5em]" />
        <h4 className="text-2xl font-semibold mt-4">Welcome to Lura VPN</h4>
        <p className="text-md font-light">Let’s get started.</p>

        <Image src={logManImage} alt="logImage" className="mt-auto" />
      </div>
      {children}
    </main>
  );
};

export default Layout;
