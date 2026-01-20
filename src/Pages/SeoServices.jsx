import React from "react";
import {
  Search,
  TrendingUp,
  BarChart3,
  Link2,
  FileText,
  Globe,
  Rocket,
  CheckCircle,
} from "lucide-react";

// You can replace these with your own images / gifs
import heroGif from "../assets/seos.gif";
import seoGif from "../assets/seo-animation.gif";
import { useNavigate } from "react-router-dom";
// const heroGif = ""
// const seoGif = "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif";

function SeoServices() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 -right-24 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
              SEO SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Rank Higher. <br />
              Get More Traffic. <br />
              <span className="text-green-600">Grow Your Business.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We deliver data-driven SEO strategies that increase visibility,
              drive qualified traffic, and convert visitors into customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                Get Free SEO Audit
              </button> */}
              <button className="px-8 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition" onClick={()=>{navigate("/contact-us")}}>
                Talk to Expert
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 blur-3xl opacity-30 rounded-full"></div>
            <img
              src={heroGif}
              alt="SEO Growth"
              className="relative w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY SEO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why SEO Is Important for Your Business
          </h2>
          <p className="mt-4 text-gray-600">
            SEO isn’t just about rankings — it’s about long-term, sustainable
            growth.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Search />,
              title: "Higher Visibility",
              desc: "Appear on top when customers search for your services.",
            },
            {
              icon: <TrendingUp />,
              title: "Organic Traffic",
              desc: "Get consistent traffic without paying for every click.",
            },
            {
              icon: <BarChart3 />,
              title: "Better ROI",
              desc: "SEO delivers the highest ROI among digital channels.",
            },
            {
              icon: <Globe />,
              title: "Brand Authority",
              desc: "Build trust and credibility in your industry.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SEO SERVICES ================= */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Our SEO Services</h2>
            <p className="mt-4 text-gray-600">
              Complete SEO solutions tailored to your business goals.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText />,
                title: "On-Page SEO",
                desc: "Keyword optimization, content structuring, and technical fixes.",
              },
              {
                icon: <Link2 />,
                title: "Off-Page SEO",
                desc: "High-quality backlinks and authority building.",
              },
              {
                icon: <BarChart3 />,
                title: "Technical SEO",
                desc: "Site speed, indexing, schema, and performance optimization.",
              },
              {
                icon: <Search />,
                title: "Keyword Research",
                desc: "High-intent keywords that convert traffic into leads.",
              },
              {
                icon: <Globe />,
                title: "Local SEO",
                desc: "Rank higher in Google Maps & local search results.",
              },
              {
                icon: <TrendingUp />,
                title: "SEO Analytics",
                desc: "Track rankings, traffic, and conversions with clear reports.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-4">
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

      {/* ================= SEO PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={seoGif}
            alt="SEO Process"
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Proven SEO Process
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "SEO Audit & Competitor Analysis",
                "Keyword & Content Strategy",
                "On-Page & Technical Optimization",
                "Link Building & Authority Growth",
                "Tracking, Reporting & Optimization",
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Rocket className="mx-auto mb-6 w-12 h-12" />
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Dominate Search Results?
          </h2>
          <p className="mt-4 text-white/90">
            Let our SEO experts help you outrank competitors and grow faster.
          </p>
          <button className="mt-8 px-10 py-4 rounded-xl bg-white text-green-700 font-bold shadow-lg hover:scale-105 transition" onClick={()=>{navigate("/contact-us")}} >
            Start Your SEO Journey
          </button>
        </div>
      </section>
    </div>
  );
}

export default SeoServices;
