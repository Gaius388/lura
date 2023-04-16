import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="my-16 text-center overflow-hidden">
      <h2 className="text-2xl font-medium">Creating a Safer Digital World.</h2>
      <p className="text-xs py-4">
        See what our customers are saying about Lura VPN.
      </p>
      <Slider {...settings} className="my-4 px-6">
        <article className="border-2 border-gray-200 rounded-md p-5 text-xs min-h-[18em] sm:min-h-[14em]">
          <div className="flex items-center justify-between pb-3">
            <main className="flex items-center gap-3">
              <div className="h-[2.5em] w-[2.5em] rounded-full bg-gray-400"></div>
              <div className="text-left">
                <p className="font-bold">John E. Lavelle</p>
                <small>Lagos, Nigeria</small>
              </div>
            </main>
            <main className="flex items-center gap-3 sm:block">
              <p className="font-semibold">4.9</p>
              <AiOutlineStar />
            </main>
          </div>
          <p className="text-left leading-relaxed">
            I`ve been using LuraVPN for the past year and haven`t had any major
            issues. Their service is always fast, reliable and professional.
          </p>
        </article>
        <article className="border-2 border-gray-200 rounded-md p-5 text-xs min-h-[18em] sm:min-h-[14em]">
          <div className="flex items-center justify-between pb-3">
            <main className="flex items-center gap-3">
              <div className="h-[2.5em] w-[2.5em] rounded-full bg-gray-400"></div>
              <div className="text-left">
                <p className="font-bold">Daniel Olayiwola</p>
                <small>Lagos, Nigeria</small>
              </div>
            </main>
            <main className="flex items-center gap-3 sm:block">
              <p className="font-semibold">5.0</p>
              <AiOutlineStar />
            </main>
          </div>
          <p className="text-left leading-relaxed">
            Awesome! First VPN I`ve tried that doesn`t cut out randomly while
            I`m gaming.
          </p>
        </article>
        <article className="border-2 border-gray-200 rounded-md p-5 text-xs min-h-[18em] sm:min-h-[14em]">
          <div className="flex items-center justify-between pb-3">
            <main className="flex items-center gap-3">
              <div className="h-[2.5em] w-[2.5em] rounded-full bg-gray-400"></div>
              <div className="text-left">
                <p className="font-bold">Elizabeth Hayes</p>
                <small>Lagos, Nigeria</small>
              </div>
            </main>
            <main className="flex items-center gap-3 sm:block">
              <p className="font-semibold">4.9</p>
              <AiOutlineStar />
            </main>
          </div>
          <p className="text-left leading-relaxed">
            Super helpful and professional support team!
          </p>
        </article>
        <article className="border-2 border-gray-200 rounded-md p-5 text-xs min-h-[18em] sm:min-h-[14em]">
          <div className="flex items-center justify-between pb-3">
            <main className="flex items-center gap-3">
              <div className="h-[2.5em] w-[2.5em] rounded-full bg-gray-400"></div>
              <div className="text-left">
                <p className="font-bold">John E. Lavelle</p>
                <small>Lagos, Nigeria</small>
              </div>
            </main>
            <main className="flex items-center gap-3 sm:block">
              <p className="font-semibold">4.9</p>
              <AiOutlineStar />
            </main>
          </div>
          <p className="text-left leading-relaxed">
            I`ve been using LuraVPN for the past year and haven`t had any major
            issues. Their service is always fast, reliable and professional.
          </p>
        </article>
        <article className="border-2 border-gray-200 rounded-md p-5 text-xs min-h-[18em] sm:min-h-[14em]">
          <div className="flex items-center justify-between pb-3">
            <main className="flex items-center gap-3">
              <div className="h-[2.5em] w-[2.5em] rounded-full bg-gray-400"></div>
              <div className="text-left">
                <p className="font-bold">Daniel Olayiwola</p>
                <small>Lagos, Nigeria</small>
              </div>
            </main>
            <main className="flex items-center gap-3 sm:block">
              <p className="font-semibold">5.0</p>
              <AiOutlineStar />
            </main>
          </div>
          <p className="text-left leading-relaxed">
            Awesome! First VPN I`ve tried that doesn`t cut out randomly while
            I`m gaming.
          </p>
        </article>
        <article className="border-2 border-gray-200 rounded-md p-5 text-xs min-h-[18em] sm:min-h-[14em]">
          <div className="flex items-center justify-between pb-3">
            <main className="flex items-center gap-3">
              <div className="h-[2.5em] w-[2.5em] rounded-full bg-gray-400"></div>
              <div className="text-left">
                <p className="font-bold">Elizabeth Hayes</p>
                <small>Lagos, Nigeria</small>
              </div>
            </main>
            <main className="flex items-center gap-3 sm:block">
              <p className="font-semibold">4.9</p>
              <AiOutlineStar />
            </main>
          </div>
          <p className="text-left leading-relaxed">
            Super helpful and professional support team!
          </p>
        </article>
      </Slider>
    </section>
  );
};

export default Testimonials;
