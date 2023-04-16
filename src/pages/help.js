import React from "react";
import { BsSearch } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";
import { TbServerCog } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const helpGuide = [
  {
    img: <TbServerCog />,
    colour: "bg-help1",
    title: "What is a VPN",
    questions: [
      "What is web hosting?",
      "Types of web hosting",
      "How to choose a hosting provider",
      "Common hosting features to look for",
      "Pros and cons of different hosting types",
    ],
  },
  {
    img: <TbServerCog />,
    colour: "bg-help2",
    title: "Setting up a website",
    questions: [
      "How to register a domain name",
      "How to set up a hosting account",
      "How to install and configure a CMS",
      "How to upload and manage website ...",
      "Tips for optimizing website performa ...",
    ],
  },
  {
    img: <BsShieldCheck />,
    colour: "bg-help3",
    title: "Security and privacy",
    questions: [
      "How hosting providers protect web ...",
      "What is SSL and why is it important?",
      "How to secure a website with a firewall",
      "How to protect sensitive information ...",
      "Tips for avoiding common security ...",
    ],
  },
  {
    img: <MdAlternateEmail />,
    colour: "bg-help4",
    title: "Email hosting",
    questions: [
      "What is email hosting and why do ...",
      "How to set up and configure email ...",
      "Tips for managing and organizing email",
      "How to troubleshoot common email ...",
      "Pros and cons of different email ...",
    ],
  },
  {
    img: <FiShoppingCart />,
    colour: "bg-help5",
    title: "E-commerce hosting",
    questions: [
      "What is e-commerce hosting and why ...",
      "How to choose an e-commerce hosting",
      "Tips for setting up and managing",
      "How to secure an e-commerce website",
      "Common e-commerce hosting features",
    ],
  },
  {
    img: <TbServerCog />,
    colour: "bg-help6",
    title: "Advanced hosting concepts",
    questions: [
      "What is a server and how does it work?",
      "What is a DNS and how does it work?",
      "What is a CDN and how does it work?",
      "What is a load balancer?",
      "What is a reverse proxy?",
    ],
  },
];


const Help = () => {
  return (
    <main className="px-[1.5em] sm:px-[3.5em] pt-16">
      <section className="my-[3em] sm:w-3/6 ">
        <h2 className="text-3xl font-semibold">Support Centre</h2>
        <p className="text-sm py-5 w-5/6 leading-relaxed">
          Browse through our frequently asked questions and find the answers you
          need.
        </p>
        <div className="flex relative">
          <input
            type="text"
            placeholder="Search"
            className="border w-[75%] py-1.5 pl-6 sm:pl-10 placeholder:text-sm placeholder:text-black"
          />
          <BsSearch className="absolute text-gray-400 top-[30%] left-[2%]" />
          <div className="bg-purpleLura text-white text-xs font-semibold sm:px-8 px-2 leading-10">
            Search
          </div>
        </div>
      </section>
      <section className="grid sm:grid-cols-3 sm:grid-rows-2 gap-6 mb-20 ">
        {helpGuide.map((help, index) => {
          return (
            <article
              className="border p-3 shadow-lg shadow-indigo-200 rounded-md"
              key={index}
            >
              <div className="flex gap-2 items-center mb-2">
                <div className={`${help.colour} p-1.5 text-lg rounded-full`}>
                  {help.img}
                </div>
                <h3 className="text-xs font-bold">{help.title}</h3>
              </div>
              <ul className="grid gap-1">
                {help.questions.map((question, index2) => {
                  return (
                    <li
                      className="flex items-center text-xs gap-2 font-semibold"
                      key={index2}
                    >
                      <TbFileDescription />
                      <p className="cursor-pointer">{question}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </section>
      <section className="min-h-[9em] rounded-lg sm:mx-[4.5em] sm:px-8 px-4 border shadow-md grid justify-center sm:flex sm:justify-between items-center bg-white relative mb-[-4.5em] z-10 ">
        <div>
          <h2 className="text-lg sm:text-2xl font-medium">
            Still have questions? We’re here to help.
          </h2>
          <small>
            Chat with our support team by clicking the chat button in the right. We’re here to assist you!
          </small>
        </div>
        <button className="bg-purpleLura px-10 py-2.5 rounded-lg text-white text-xs font-bold my-4 sm:my-0">
          Contact support
        </button>
      </section>
    </main>
  );
};

export default Help;
