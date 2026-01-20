import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaBullseye,
  FaChartLine,
  FaUsers,
  FaAd,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// // Replace with your assets
import metaHero from "../assets/meta-ads.gif";
import dashboard from "../assets/meta-dashboard.gif";

function Ads() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-indigo-400/20 blur-3xl rounded-full" />

        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaFacebook /> Meta Ads Experts
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Scale Your Business with
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                High-Performance Meta Ads
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              We create, manage & optimize Facebook and Instagram ad campaigns
              that generate qualified leads, sales, and massive ROI.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition"
                onClick={() => navigate("/contact-us")}
              >
                Launch Campaign
              </button>

              {/* <button className="px-8 py-4 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition">
                Free Strategy Call
              </button> */}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src={metaHero}
              alt="Meta Ads"
              className="w-[90%] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= PLATFORMS ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Platforms We Advertise On
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <FaFacebook />, title: "Facebook Ads" },
              { icon: <FaInstagram />, title: "Instagram Ads" },
              { icon: <FaAd />, title: "Meta Audience Network" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our Meta Ads Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaBullseye />,
                title: "Audience Targeting",
                desc: "Laser-focused targeting using interests, behaviors, lookalikes & retargeting.",
              },
              {
                icon: <FaChartLine />,
                title: "Performance Optimization",
                desc: "Daily monitoring, A/B testing & budget scaling for maximum ROI.",
              },
              {
                icon: <FaUsers />,
                title: "Lead & Sales Funnels",
                desc: "High-converting funnels designed to turn clicks into customers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-4xl text-indigo-600 mb-4">{item.icon}</div>
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
            Our Winning Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Strategy & Research",
              "Creative Development",
              "Campaign Launch",
              "Scaling & Optimization",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DASHBOARD ================= */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={dashboard}
            alt="Meta Ads Dashboard"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Data-Driven Decisions
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We track every click, conversion, and rupee spent so you always
              know exactly how your ads are performing.
            </p>

            <ul className="space-y-3">
              {[
                "Real-time performance tracking",
                "Detailed reporting & insights",
                "ROI-focused optimization",
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <FaRocket className="text-5xl mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Scale with Meta Ads?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-white/90">
          Let our Meta Ads experts turn your ad spend into predictable growth.
        </p>
        <button
          className="px-10 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          onClick={() => navigate("/contact-us")}
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
}

export default Ads;
