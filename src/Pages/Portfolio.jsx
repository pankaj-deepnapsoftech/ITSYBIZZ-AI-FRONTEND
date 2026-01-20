import React, { useEffect, useState } from "react";
import WavyScrollText from "../Components/WavyScroll";
// import RevealWrapper from "../Components/RevealWrapper";
import ScrollReveal from "scrollreveal";

// Import all images from assets
import jhevImage from "../assets/JEHV.png";
import shivsaktiImage from "../assets/SHIVSAKTI.png";
import micnImage from "../assets/MICN.png";
import shivArtImage from "../assets/SHIV-ART.jpeg";
import aggarwalImage from "../assets/AGGARWAL.png";
import esquareImage from "../assets/ESQUAREEDUWING.png";
import kfsImage from "../assets/KFS.png";
import hotelImage from "../assets/HOTEL.jpeg";
import krishnaLabelsImage from "../assets/KRISHNA-LABELS.jpeg";
import grFinanceImage from "../assets/GR-FINANCE.jpeg";
import financeImage from "../assets/GR-FINANCE.jpeg";
import doctrisImage from "../assets/DOCTRIS.jpeg";
import medicareImage from "../assets/MEDICARER.jpeg";
import clinicImage from "../assets/CLINIC.jpeg";
import drPattersonImage from "../assets/DE.PATTERSON.jpeg";
import crmImage from "../assets/CRM.png";
import hrmImage from "../assets/HRM.png";
import rtpasImage from "../assets/RTPAS.png";
import sopasImage from "../assets/SOPAS.png";
import hero from "../assets/portfolio.gif";
import Kontrolix from "../assets/kontrolix.png";
import Minda from "../assets/Minda.png";
import supremeRubber from "../assets/supremeRubber.png";


// Add custom styles for animations
const customStyles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("B2B");

  const products = {
    B2B: [
      {
        title: "JHEV Motors",
        img: jhevImage,
        link: "https://jhevmotors.com/",
      },
      {
        title: "Shivshakti Aluminium",
        img: shivsaktiImage,
        link: "https://shivshaktialuminium.com/",
      },
      {
        title: "Mic N Melon",
        img: micnImage,
        link: "https://micnmelons.com/",
      },
      {
        title: "Shiv Art",
        img: shivArtImage,
        link: "https://shivaarts.com/",
      },
      {
        title: "Aggarwal Caterer",
        img: aggarwalImage,
        link: "https://shivshaktialuminium.com/",
      },
      // {
      //   title: "Rtpas",
      //   img: rtpasImage,
      //   link: "https://rtpas.deepmart.shop/",
      // },
      {
        title: "Esquareeduwing Pvt. Ltd.",
        img: esquareImage,
        link: "https://esquareduwings.com/",
      },
      {
        title: "KFS Fitness",
        img: kfsImage,
        link: "https://kfsfitness.com/",
      },
      {
        title: "Hotel Booking",
        img: hotelImage,
        link: "https://himaratheme.com/",
      },
    ],
    B2C: [
      {
        title: "Krishna Labels",
        img: krishnaLabelsImage,
      },
    ],
    Finance: [
      {
        title: "GR-Finance",
        img: grFinanceImage,
      },
      {
        title: "Finance",
        img: financeImage,
      },
    ],
    Ecommerce: [
      // {
      //   title: "AFS Deals",
      //   img: "https://itsybizz.com/assets/port2-DcxdaKXH.png",
      // },
      // {
      //   title: "Kripa Creations",
      //   img: "https://itsybizz.com/assets/kripa-AMYKLt7o.jpeg",
      // },
      {
        title: "KFS Fitness",
        img: kfsImage,
        link: "https://kfsfitness.com/",
      },
    ],
    Hospital: [
      {
        title: "Doctris",
        img: doctrisImage,
      },
      {
        title: "Medicare",
        img: medicareImage,
      },
      {
        title: "Clinic",
        img: clinicImage,
      },
      {
        title: "Dr.Patterson",
        img: drPattersonImage,
      },
    ],
    Hotel: [
      {
        title: "Hotel Booking",
        img: hotelImage,
      },
    ],
    Industries: [
      {
        title: "Shiv Art",
        img: shivArtImage,
      },
    ],
    Education: [
      {
        title: "Esquareeduwing Pvt. Ltd.",
        img: esquareImage,
      },
    ],
    SocialMedia: [
      // {
      //   title: "Vinod Bhati",
      //   img: "https://itsybizz.com/assets/vbf-8c4BGq_S.jpeg",
      // },
      {
        title: "Aggarwal Caterer",
        img: aggarwalImage,
      },
    ],
    Software: [
      {
        title: "CRM",
        img: crmImage,
        link: "https://shivaarts.com/",
      },
      {
        title: "RTPAS",
        img: rtpasImage,
        link: "https://inventory.deepmart.shop/login",
      },
      {
        title: "HRM ",
        img: hrmImage,
        link: "https://hr.deepmart.shop/",
      },
      {
        title: "SOPAS",
        img: sopasImage,
        link: "https://subscriptiontest.rtpas.in/",
      },
      {
        title: "Kontrolix",
        img: Kontrolix,
        link: "https://kontrolixtest.rtpas.in/",
      },
      {
        title: "Checklist Minda",
        img: Minda,
        link: "https://digitization.jpmgroup.co.in/login",
      },
      {
        title: "Supreme Rubber",
        img: supremeRubber,
        link: "https://supremerubber.itsybizz.com/",
      },
    ],
  };
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 900,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
      interval: 300,
      reset: false, // <-- This is key for re-triggering when in view
    });

    sr.reveal(".card");

    // Inject custom styles
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="w-full h-auto min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 max-w-[2480px] mx-auto">
      {/* Header Section */}
      <div className="relative w-full min-h-[340px] md:min-h-[520px] 2xl:min-h-[680px] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Soft grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

        {/* Floating gradient blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 2xl:px-10 py-16 md:py-28 2xl:py-36 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/70 backdrop-blur border border-gray-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">
                Enterprise Products & Digital Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-600">
                Our Products
              </span>
              <br />
              <span className="text-gray-900">& Smart Digital Solutions</span>
            </h1>

            {/* Animated underline */}
            <div className="mt-4 w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto md:mx-0" />

            {/* Description */}
            <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
              At
              <span className="mx-2 font-semibold text-green-500">
                ITSYBIZZ
              </span>
              we design and develop scalable, high-performance products that
              help businesses automate workflows, enhance customer experience,
              and accelerate digital growth.
            </p>

            {/* CTA buttons */}
            {/* <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="px-7 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
                Explore Solutions
              </button>
              <button className="px-7 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur font-semibold text-gray-700 hover:bg-white hover:shadow-md transition">
                View Portfolio
              </button>
            </div> */}
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center">
            {/* Glow ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 blur-3xl opacity-30 animate-pulse" />

            {/* Glass card */}
            <div className="relative p-4 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl">
              <img
                src={hero}
                alt="Products & Solutions"
                className="w-[240px] sm:w-[300px] md:w-[420px] lg:w-[520px] object-contain rounded-2xl"
              />
            </div>

            {/* Floating mini badges */}
            <div className="absolute -bottom-6 -left-6 bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium text-gray-700">
              🚀 SaaS Platforms
            </div>
            <div className="absolute top-10 -right-6 bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium text-gray-700">
              ⚙️ Automation
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white">
        {/* Tabs Section */}
        <div className="w-full mb-8 px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 border-b border-gray-200 overflow-x-auto pb-2">
            {Object.keys(products).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-2 mt-5 text-sm sm:text-base md:text-lg font-semibold transition-all whitespace-nowrap px-3 py-1 rounded-lg ${
                  activeTab === tab
                    ? "text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-green-500 hover:bg-green-50"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="w-full px-4 sm:px-6 2xl:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
            {products[activeTab].map((product, index) => (
              <a
                key={index}
                href={product.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group card bg-white shadow-lg hover:shadow-2xl rounded-2xl p-4 sm:p-6 w-full max-w-[300px] text-center transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-green-200 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 leading-tight group-hover:text-green-700 transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Hover indicator */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-xs text-green-600 font-medium">
                        View Project
                      </span>
                      <svg
                        className="w-4 h-4 text-green-600 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;