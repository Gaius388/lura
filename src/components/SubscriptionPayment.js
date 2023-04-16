import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";


const SubscriptionPayment = () => {
  return (
    <section className="">
      <div className="text-xs font-bold flex gap-2 items-center">
        <p>Account</p>
        <AiFillCheckCircle />
        <p className="text-purpleLura">Payment</p>
      </div>
      <h4 className="my-4">Payment Details</h4>
      <div className="flex items-center text-[0.6em] sm:text-xs justify-between">
        <p>Use saved card</p>
        <select>
          <option>Mastercard ending 234</option>
        </select>
      </div>
      <form className="grid gap-3">
        <div className="relative">
          <label className="text-xs mb-2">Name on card</label>
          <input
            type="text"
            className="w-full py-1.5 px-3 bg-gray-200 rounded-md placeholder:text-black placeholder:text-xs"
            placeholder="John Smith"
          />
          <AiFillCheckCircle className="absolute right-[2%] top-[55%]" />
        </div>
        <div>
          <label className="text-xs mb-2">Card number</label>
          <input
            type="number"
            className="w-full py-1.5 px-3 bg-gray-200 rounded-md placeholder:text-black placeholder:text-xs"
            placeholder="123 - 456 -"
          />
        </div>
        <article className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs mb-2">Expiration</label>
            <div className="flex items-center">
              <input
                type="number"
                className="w-[25%] text-center py-1.5 px-3 bg-gray-200 rounded-md placeholder:text-black placeholder:text-xs"
                placeholder="01"
              />
              <p className="px-2">/</p>
              <input
                type="number"
                className="w-[25%] text-center py-1.5 px-3 bg-gray-200 rounded-md placeholder:text-black placeholder:text-xs"
                placeholder="12"
              />
            </div>
          </div>
          <div>
            <label className="text-xs mb-2">CVV</label>
            <input
              type="number"
              className="w-full py-1.5 px-3 bg-gray-200 rounded-md placeholder:text-black placeholder:text-xs"
              placeholder="123"
            />
          </div>
        </article>
        <div className="flex items-center justify-end gap-3 sm:gap-8 text-xs mt-4">
          <Link href={'/pricing'} className="font-bold">Cancel order</Link>
          <button className=" bg-purpleLura py-2 px-4 sm:px-8 text-white rounded-md font-semibold shadow-md">
            Complete Order
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubscriptionPayment;
