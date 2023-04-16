import React from "react";
import SubscriptionLogin from "../components/SubscriptionLogin";
import SubscriptionPayment from "../components/SubscriptionPayment";
import { useProductsContext } from "../context/product_context";
import { useSession } from "next-auth/react";

const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

const Subscription = () => {
  const { data: session } = useSession();

  const {
    product: { name, subtotal,amount, quantity, tax, total },
    counterIncrease,
    counterDecrease,
  } = useProductsContext();
  return (
    <main className="px-[1.5em] sm:px-[3.5em] pt-20">
      <h2 className="text-2xl font-medium">Purchase Your Subscription</h2>
      <div className="grid sm:grid-cols-2 gap-8 py-10">
        {session && session ? (
          <SubscriptionPayment />
        ) : (
          <SubscriptionLogin />
        )}
        <section>
          <h2 className="mb-8 font-semibold">Order Summary</h2>
          <div className="h-[9rem] bg-gray-300 rounded-md mb-2 mt-[-1.2em]"></div>
          <div className="flex content-center font-bold text-sm justify-between">
            <h2>Lura VPN {name}</h2>
            {quantity === 0 ? null : (
              <div className="flex gap-1 text-gray-500 items-center">
                <p
                  className="bg-gray-300 py-0.5 px-2 rounded-sm cursor-pointer"
                  onClick={counterDecrease}
                >
                  -
                </p>
                <p>{quantity}</p>
                <p
                  className="bg-gray-300 py-0.5 px-2 rounded-sm cursor-pointer"
                  onClick={counterIncrease}
                >
                  +
                </p>
              </div>
            )}
          </div>
          <p className="mb-2 font-bold text-sm">
            {amount === 0 ? "Free" : `${formatPrice(subtotal)}`}
          </p>
          <p className="text-[0.6em]">Gift Card / Discount code</p>
          <form className="flex justify-between my-2">
            <input type="text" className="bg-gray-300 w-[80%] rounded-md" />
            <button className="border-2 border-purpleLura text-purpleLura px-4 py-2 text-xs font-medium rounded-md">
              Apply
            </button>
          </form>
          <div className="flex justify-between font-semibold text-sm my-4">
            <p>Sub total</p>
            <p>{amount === 0 ? "Free" : `${formatPrice(subtotal)}`}</p>
          </div>
          <div className="flex justify-between font-semibold text-sm mb-4">
            <p>Tax</p>
            <p>{amount === 0 ? "0" : `${tax * 100}`}%</p>
          </div>
          <div className="flex justify-between font-bold text-sm">
            <p>Total</p>
            <p>{formatPrice(total)}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Subscription;
