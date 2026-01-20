import React from "react";
import {
  FaGoogle,
  FaSearch,
  FaShoppingCart,
  FaChartLine,
  FaBullseye,
  FaRocket,
  FaCheckCircle,
  FaLaptopCode,
} from "react-icons/fa";

// Replace with your real assets
import googleHero from "../assets/google-aads.gif";
import googleDashboard from "../assets/google-ads.gif";
import { useNavigate } from "react-router-dom";

function GoogleAds() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 text-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-400/20 blur-3xl rounded-full" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-yellow-400/20 blur-3xl rounded-full" />

        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaGoogle /> Google Ads Specialists
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Dominate Search Results with
              <span className="block bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                High-ROI Google Ads
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              We design and manage Google Ads campaigns that bring high-intent
              customers, maximize conversions, and scale your revenue faster.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 transition"
                onClick={() => navigate("/contact-us")}
              >
                Start Google Ads
              </button>

              {/* <button className="px-8 py-4 rounded-full border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition">
                Free Audit
              </button> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={googleHero}
              alt="Google Ads"
              className="w-[90%] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= PLATFORMS ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Google Ads Platforms We Manage
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FaSearch />,
                title: "Search Ads",
                desc: "Appear instantly on top of Google search results",
              },
              {
                icon: <FaShoppingCart />,
                title: "Shopping Ads",
                desc: "Drive high-intent ecommerce purchases",
              },
              {
                icon: <FaLaptopCode />,
                title: "Display & YouTube Ads",
                desc: "Mass brand visibility with smart targeting",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="text-4xl text-red-500 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our Google Ads Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaBullseye />,
                title: "Keyword Research",
                desc: "Target high-intent keywords that actually convert.",
              },
              {
                icon: <FaChartLine />,
                title: "Campaign Optimization",
                desc: "Continuous A/B testing, bid optimization & scaling.",
              },
              {
                icon: <FaRocket />,
                title: "Conversion Tracking",
                desc: "Track every lead, call & purchase accurately.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-4xl text-yellow-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our Proven Google Ads Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Market & Keyword Research",
              "Campaign Setup",
              "Launch & Monitor",
              "Scale & Optimize",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition"
              >
                <div className="text-3xl font-bold text-red-500 mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ANALYTICS ================= */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={googleDashboard}
            alt="Google Ads Analytics"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Data-Driven Google Ads Strategy
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We track performance at every level to make sure your budget
              delivers maximum returns.
            </p>

            <ul className="space-y-3">
              {[
                "Precise conversion tracking",
                "Transparent reporting",
                "ROI-focused scaling",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-center">
        <FaRocket className="text-5xl mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Grow with Google Ads?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-white/90">
          Stop wasting ad spend. Start running profitable Google Ads today.
        </p>
        <button
          className="px-10 py-4 bg-white text-red-500 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          onClick={() => navigate("/contact-us")}
        >
          Get Free Google Ads Audit
        </button>
      </section>
    </div>
  );
}

export default GoogleAds;
