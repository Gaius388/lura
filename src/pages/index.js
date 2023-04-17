import React from "react";
import { BsFillPersonFill, BsFillCheckCircleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiServerStack } from "react-icons/hi2";
import shieldHome from '../../public/shield_home.svg'
import desktopHome from '../../public/desktop_home.png'
import PaymentPlan from "../components/PaymentPlan";
import FeaturesHighlight from "../components/FeaturesHighlight";
import Testimonials from "../components/Testimonials";
import WorldMapConnect from "../components/WorldMapConnect";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="pt-16">
      <section className="px-[1em] sm:mx-[3.5em] my-8 grid sm:grid-cols-2">
        <div className="grid content-evenly justify-items-center sm:justify-items-start">
          <h3 className="font-semibold text-3xl sm:text-left text-center">
            Digital Bandits are Everywhere. Keep your Data{" "}
            <span className="text-purpleLura">Secure</span>.
          </h3>
          <p className="text-sm text-center sm:text-left my-8 sm:my-2">
            Over 60 million devices get hacked every year. Keep your online
            activity and data shielded from malicious cyber crimes.
          </p>
          <button className="bg-purpleLura px-10 py-2.5 rounded-lg text-white text-xs font-bold">
            Get started
          </button>
        </div>
        <div className="grid justify-center my-8 sm:my-0">
          <Image src={desktopHome} alt="desktop home" />
        </div>
      </section>
      <section className="py-4 bg-purpleLura grid items-center sm:grid-cols-3 sm:grid-rows-1 grid-rows-3 sm:gap-y-10 sm:min-h-[8.5em] text-white rounded-lg mx-[1.5em] sm:mx-[3.5em] my-4">
        <div className="border border-transparent sm:border-r-white border-b-white sm:border-b-transparent flex gap-5 items-center justify-center pb-10 sm:pb-0">
          <BsFillPersonFill className="p-2 rounded-full bg-white text-purpleLura text-4xl" />
          <div>
            <p className="font-bold text-md">90+</p>
            <p className="text-sm">Users</p>
          </div>
        </div>
        <div className="border border-transparent sm:border-r-white border-b-white sm:border-b-transparent flex gap-5 items-center justify-center pb-10 sm:pb-0 pt-4 sm:pt-0">
          <MdLocationOn className="p-2 rounded-full bg-white text-purpleLura text-4xl" />
          <div>
            <p className="font-bold text-md">16</p>
            <p className="text-sm">Locations</p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <HiServerStack className="p-2 rounded-full bg-white text-purpleLura text-4xl" />
          <div>
            <p className="font-bold text-md">700+</p>
            <p className="text-sm">Servers</p>
          </div>
        </div>
      </section>
      <section className="grid sm:grid-cols-2 items-center justify-center gap-6 px-[1.5em] sm:px-[3.5em] my-12">
        <div className="mx-auto">
          <Image src={shieldHome} alt="shield" className="w-5/6 mx-auto" />
        </div>
        <div className="sm:w-3/4 sm:text-left text-center">
          <h3 className="text-xl sm:text-3xl font-medium">
            Enhance your digital experience with{" "}
            <span className="text-purpleLura">Lura</span>.
          </h3>
          <p className="my-3 text-xs sm:text-sm">
            Discover everything Lura has to offer.
          </p>
          <ul className="grid gap-2 justify-center sm:justify-start">
            <li className="flex items-center gap-2 text-[0.62em] sm:text-xs">
              <BsFillCheckCircleFill className="text-[#2FAB73]" />
              <span>Military-Grade Protection</span>
            </li>
            <li className="flex items-center gap-2 text-[0.62em] sm:text-xs">
              <BsFillCheckCircleFill className="text-[#2FAB73]" />
              <span>Unrestricted Access to Online Content</span>
            </li>
            <li className="flex items-center gap-2 text-[0.62em] sm:text-xs">
              <BsFillCheckCircleFill className="text-[#2FAB73]" />
              <span>Supercharged VPN</span>
            </li>
            <li className="flex items-center gap-2 text-[0.62em] sm:text-xs">
              <BsFillCheckCircleFill className="text-[#2FAB73]" />
              <span>Malware Protection</span>
            </li>
          </ul>
          <button className="bg-purpleLura px-10 py-2.5 rounded-lg text-white text-xs font-bold my-4">
            Learn More
          </button>
        </div>
      </section>
      <PaymentPlan />
      <FeaturesHighlight />
      <div className="mx-[1.5em]">
        <WorldMapConnect />
      </div>
      <Testimonials />
      <section className="min-h-[9em] rounded-lg sm:px-[4.5em] px-4 mx-8 border shadow-md grid justify-center sm:flex sm:justify-between items-center bg-white relative mb-[-4.5em] z-10">
        <div>
          <h2 className="text-lg sm:text-2xl font-medium">
            Get <span className="text-purpleLura">More Access</span> and{" "}
            <span className="text-purpleLura">Browse Safely.</span>
          </h2>
          <small>Secure your data now.</small>
        </div>
        <Link
          href={"./register"}
          className="bg-purpleLura sm:px-10 py-2.5 rounded-lg text-white text-xs font-bold text-center"
        >
          Create Account
        </Link>
      </section>
    </main>
  );
};

export default Home
