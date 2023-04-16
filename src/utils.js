import { TbServerCog } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

export const helpGuide = [
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
