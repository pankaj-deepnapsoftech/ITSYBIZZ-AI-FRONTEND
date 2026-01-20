import React from "react";
import {
  MousePointerClick,
  Target,
  TrendingUp,
  BarChart3,
  DollarSign,
  Rocket,
  CheckCircle,
  MonitorSmartphone,
  Search,
} from "lucide-react";

import heroGif from "../assets/ppcs.gif"
import ppcGif from "../assets/ppc.gif";
import { useNavigate } from "react-router-dom";


// Replace with your own assets if needed
// const heroGif = "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif";
// const ppcGif = "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif";

function Ppc() {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-24 -right-24 w-96 h-96 bg-green-400/30 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              PAY PER CLICK (PPC)
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Instant Traffic. <br />
              Measurable Results. <br />
              <span className="text-blue-600">Maximum ROI.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We create data-driven PPC campaigns that bring qualified leads,
              boost conversions, and scale your business fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                Get Free PPC Audit
              </button> */}
              <button
                className="px-8 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition"
                onClick={() => {
                  navigate("/contact-us");
                }}
              >
                Talk to PPC Expert
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 blur-3xl opacity-30 rounded-full"></div>
            <img
              src={heroGif}
              alt="PPC Growth"
              className="relative w-[80%] max-w-md rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY PPC ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Pay-Per-Click Advertising?
          </h2>
          <p className="mt-4 text-gray-600">
            PPC delivers instant visibility, fast leads, and complete control
            over your marketing spend.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <MousePointerClick />,
              title: "Instant Traffic",
              desc: "Appear on top of search results immediately.",
            },
            {
              icon: <Target />,
              title: "Laser Targeting",
              desc: "Reach the right audience at the right time.",
            },
            {
              icon: <DollarSign />,
              title: "Budget Control",
              desc: "Pay only for clicks that matter.",
            },
            {
              icon: <BarChart3 />,
              title: "Measurable ROI",
              desc: "Track every click, lead, and conversion.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PPC SERVICES ================= */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Our PPC Services</h2>
            <p className="mt-4 text-gray-600">
              Complete PPC management designed to scale profitably.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search />,
                title: "Google Search Ads",
                desc: "High-intent keyword targeting for fast conversions.",
              },
              {
                icon: <MonitorSmartphone />,
                title: "Display & YouTube Ads",
                desc: "Visual ads to increase brand awareness.",
              },
              {
                icon: <Target />,
                title: "Remarketing Ads",
                desc: "Reconnect with visitors who didn’t convert.",
              },
              {
                icon: <TrendingUp />,
                title: "Conversion Optimization",
                desc: "Improve landing pages for higher ROI.",
              },
              {
                icon: <BarChart3 />,
                title: "Analytics & Tracking",
                desc: "Conversion tracking, GA4 & performance reports.",
              },
              {
                icon: <DollarSign />,
                title: "Budget Optimization",
                desc: "Maximize results while minimizing cost per lead.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PPC PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={ppcGif}
            alt="PPC Process"
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our PPC Management Process
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Business & Competitor Analysis",
                "Keyword & Audience Research",
                "Ad Copy & Creative Creation",
                "Campaign Launch & Optimization",
                "Tracking, Reporting & Scaling",
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Rocket className="mx-auto mb-6 w-12 h-12" />
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Scale with PPC?
          </h2>
          <p className="mt-4 text-white/90">
            Launch high-converting PPC campaigns that deliver real business
            growth.
          </p>
          <button
            className="mt-8 px-10 py-4 rounded-xl bg-white text-blue-700 font-bold shadow-lg hover:scale-105 transition"
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            Start PPC Campaign
          </button>
        </div>
      </section>
    </div>
  );
}

export default Ppc;
