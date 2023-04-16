import React from "react";
import { TbShieldCheck, TbServerCog } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";

import {
  IoWarningOutline,
  IoRocketOutline,
  IoFunnelOutline,
} from "react-icons/io5";
import { BsLightning, BsBookmarks } from "react-icons/bs";
import { MdOutlineCancel, MdSecurity } from "react-icons/md";
import { SiFsecure } from "react-icons/si";
import { VscUnlock } from "react-icons/vsc";
import { ImConnection } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import serverAbout from "../../public/serverFeatures.svg";
import WorldMapConnect from "../components/WorldMapConnect";
import Image from "next/image";
import CreateAccountFeatures from "@/components/CreateAccountFeatures";

const Features = () => {
  return (
    <div className="px-[1.5em] sm:px-[3.5em] pb-4 pt-16">
      <section className="my-[3em]">
        <article className="sm:w-3/6">
          <h2 className="text-3xl font-semibold">Ultimate Protection.</h2>
          <h2 className="text-3xl font-semibold">Unlimited Content.</h2>
          <p className="text-sm py-5">
            Lura VPN uses military-grade encryption technology, trusted and used
            by banks and military forces worldwide, with up to AES-256-GCM
            encryption and 4096-bit keys.
          </p>
          <p className="text-sm">
            In addition to first-class protection, users enjoy unrestricted
            access to previously restricted content with LuraDNS Proxy Server.
          </p>
        </article>
      </section>
      <section className="py-8 pb-20">
        <div className="grid justify-center grid-cols-2 grid-rows-2 sm:w-[60%] gap-5 relative">
          <div className="grid justify-items-center gap-6 p-2 sm:p-6 border shadow-xl rounded-md">
            <TbShieldCheck className="text-3xl" />
            <p className="text-sm text-center">
              Maximum Security with secure end-to-end encryption.
            </p>
          </div>
          <div className="grid justify-items-center gap-6 p-2 sm:p-6 border shadow-xl rounded-md">
            <FaNetworkWired className="text-3xl" />
            <p className="text-sm text-center">Use Lura VPN on any device.</p>
          </div>
          <div className="grid justify-items-center gap-6 p-2 sm:p-6 border shadow-xl rounded-md">
            <IoRocketOutline className="text-3xl" />
            <p className="text-sm text-center">
              High Speed connection all the time - every time.
            </p>
          </div>
          <div className="grid justify-items-center gap-6 p-2 sm:p-6 border shadow-xl rounded-md">
            <VscUnlock className="text-3xl" />
            <p className="text-sm text-center font-semibold">
              Browse the web without boarders.
            </p>
          </div>
          <div className="absolute right-[-19em] hidden sm:block">
            <Image src={serverAbout} alt="server_about" className="w-4/6" />
          </div>
        </div>
      </section>
      <section className="text-center my-8">
        <h2 className="text-purpleLura font-semibold text-3xl">Features</h2>
        <p className="text-sm py-6">
          Unlock every feature on multiple devices.
        </p>
        <p className="text-sm sm:w-4/6 mx-auto">
          Keep your digital footprint private, browse the web without
          restrictions, turbo-charge your network connection and more with Lura.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-3 my-6 gap-6">
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <IoWarningOutline className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Malware Protection</b>
            <p className="font-thin text-xs">Block virus infested site</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <BsLightning className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Lightning-fast</b>
            <p className="font-thin text-xs">Network connection</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <IoFunnelOutline className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Phishing Protection</b>
            <p className="font-thin text-xs">Filter out hazardous emails</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <BsBookmarks className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Quick and Easy</b>
            <p className="font-thin text-xs">
              Save preferred servers & connect later
            </p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <MdOutlineCancel className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Kill Switch</b>
            <p className="font-thin text-xs">Protection at all times</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <ImConnection className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Uninterrupted</b>
            <p className="font-thin text-xs">Stable connection, always</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <TbWorld className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Worldwide</b>
            <p className="font-thin text-xs">Data security world-wide</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <IoWarningOutline className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Breached Data Scanner</b>
            <p className="font-thin text-xs">Scan for leaked data</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <TbServerCog className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">LuraDNS Server</b>
            <p className="font-thin text-xs">Access even more content</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <SiFsecure className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Hotspot protection</b>
            <p className="font-thin text-xs">Security whenever you connect</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <MdSecurity className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Military-Grade Protection</b>
            <p className="font-thin text-xs">High-grade security</p>
          </div>
          <div className="grid justify-items-center border shadow-lg py-5 rounded-xl">
            <IoWarningOutline className="text-purpleLura text-6xl font-thin mb-2" />
            <b className="text-sm">Easy to use</b>
            <p className="font-thin text-xs">Online & in-app</p>
          </div>
        </div>
      </section>
      <section className="my-4">
        <h3 className="text-2xl font-medium text-center">
          View our <span className="text-purpleLura">servers</span> and{" "}
          <span className="text-purpleLura">locations</span>
        </h3>
      </section>
      <WorldMapConnect />
      <CreateAccountFeatures/>
    </div>
  );
};

export default Features;
