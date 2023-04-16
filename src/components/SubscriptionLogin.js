import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSession, signIn } from "next-auth/react";

const SubscriptionLogin = () => {
  const { data: session } = useSession();

  return (
    <section className="">
      <div className="text-xs font-bold flex gap-2 items-center">
        <p className="text-purpleLura">Account</p>
        <AiFillCheckCircle />
        <p>Payment</p>
      </div>
      <h4 className="my-4">Account Details</h4>
      <form className="grid gap-3">
        <div className="relative">
          <label className="text-xs mb-2">Email address</label>
          <input
            type="email"
            className="w-full py-1.5 px-3 bg-gray-200 rounded-md placeholder:text-black placeholder:text-xs"
            placeholder="email@myemail.com"
          />
          <AiFillCheckCircle className="absolute right-[2%] top-[55%]" />
        </div>
        <div className="relative">
          <label className="text-xs mb-2">Password</label>
          <input
            type="password"
            className="w-full py-1.5 px-3 bg-gray-200 rounded-md placeholder:text-black placeholder:text-xs"
            placeholder="*******"
          />
          <AiFillCheckCircle className="absolute right-[2%] top-[55%]" />
        </div>
        <div className="flex items-center justify-end gap-8 text-xs mt-4">
          <p className="font-bold">Create Account</p>
          <button
            className=" bg-purpleLura py-1.5 px-8 text-white rounded-md"
            onClick={() => signIn()}
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubscriptionLogin;
