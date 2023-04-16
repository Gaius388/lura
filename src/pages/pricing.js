import React from "react";
import PaymentPlan from "../components/PaymentPlan";
import FeaturesHighlight from "../components/FeaturesHighlight";
import Testimonials from "../components/Testimonials";
import WorldMapConnect from "../components/WorldMapConnect";

const Pricing = () => {
  return (
    <main className="pt-16">
      <section className="mt-[3em] mx-[1.5em] sm:mx-[3.5em] sm:w-3/6 sm:text-left text-center">
        <h2 className="text-3xl font-semibold">Create your Lura Account.</h2>
        <p className="text-sm py-5 sm:w-5/6  leading-relaxed">
          Test out Lura with a 3-day free trial. Get access to some of our
          favourite features, stream, game and download with fast and secure
          network connection.
        </p>
      </section>
      <PaymentPlan />
      <WorldMapConnect />
      <FeaturesHighlight />
        <Testimonials />
      <div className="w-5/6 sm:w-2/6 mx-auto py-5">
        <p className="text-2xl leading-relaxed text-center font-light">
          Military-Grade Date Protection Unrestricted Access to Content. Fast
          and Reliable Connection.{" "}
        </p>
      </div>
    </main>
  );
};

export default Pricing;
