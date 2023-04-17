import React from "react";
import threeDayHome from "../../public/threeday_home.svg";
import monthlyHome from "../../public/monthly_home.svg";
import yearlyHome from "../../public/yearly_home.svg";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import Image from "next/image";
import { useProductsContext } from "../context/product_context";
import { useRouter } from "next/router";

const PaymentPlan = () => {
  const { addToCart } = useProductsContext();
  const router = useRouter()
  return (
    <section className="text-center my-8 mx-[2em] sm:mx-[3.5em]">
      <h3 className="text-2xl font-medium">
        Choose Your <span>Plan</span>
      </h3>
      <p className="text-xs my-5">
        Keep your data secure and browse online without boarders or
        restrictions.
      </p>
      <div className="grid sm:grid-cols-3 gap-16">
        <article className="px-4 py-6 flex flex-col items-center border rounded-md shadow-md">
          <Image
            src={threeDayHome}
            alt="3 day"
            className="w-[6.5em] mx-auto mb-5"
          />
          <h2 className="font-semibold mb-3">3-Day Trial</h2>
          <ul className="grid gap-2 mb-16">
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Unlimited Bandwith</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Encrypted Connection</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <MdOutlineClear className="text-red-500" />
              <span>No Traffic Logs</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Works on all Devices</span>
            </li>
          </ul>
          <div className="mt-auto">
            <p className="text-center font-medium mb-3">Free</p>
            <button
              className="border-2 border-purpleLura text-purpleLura px-8 rounded-3xl text-xs py-1 font-bold"
              onClick={() => {
                addToCart("3-Day Trial", 0, 0);
                router.push("./subscription");
              }}
            >
              Select
            </button>
          </div>
        </article>
        <article className="px-4 py-6  grid justify-center border rounded-md shadow-md">
          <Image
            src={monthlyHome}
            alt="3 day"
            className="w-[6.5em] mx-auto mb-5"
          />
          <h2 className="font-semibold mb-3">Monthly Subscription</h2>
          <ul className="grid gap-2 mb-16">
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Unlimited Bandwith</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Encrypted Connection</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>No Traffic Logs</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Works on all Devices</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Connect Anywhere</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Access to all Features</span>
            </li>
          </ul>
          <div>
            <p className="text-center font-medium mb-3">$3.99 / mo</p>
            <button
              className="border-2 border-purpleLura text-purpleLura px-8 rounded-3xl text-xs py-1 font-bold"
              onClick={() => {
                addToCart("Monthly Subscription", 3.99, 1);
                router.push("./subscription");
              }}
            >
              Select
            </button>
          </div>
        </article>
        <article className="px-4 py-6  grid justify-center border rounded-md shadow-md">
          <Image
            src={yearlyHome}
            alt="3 day"
            className="w-[6.5em] mx-auto mb-5"
          />
          <h2 className="font-semibold mb-3">Yearly Subscription</h2>
          <ul className="grid gap-2 mb-16">
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Unlimited Bandwith</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Encrypted Connection</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>No Traffic Logs</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Works on all Devices</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Connect Anywhere</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <AiOutlineCheck className="text-[#2FAB73]" />
              <span>Access to all Features</span>
            </li>
          </ul>
          <div>
            <p className="text-center font-medium mb-3">$39.99 / yr</p>
            <button
              className="border-2 border-purpleLura text-purpleLura px-8 rounded-3xl text-xs py-1 font-bold"
              onClick={() => {
                addToCart("Yearly Subscription", 39.99, 1);
                router.push("./subscription");
              }}
            >
              Select
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PaymentPlan;
