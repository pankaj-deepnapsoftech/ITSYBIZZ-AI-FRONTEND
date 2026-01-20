import React from "react";
import {
  FaPenNib,
  FaSearch,
  FaChartLine,
  FaBullhorn,
  FaCheckCircle,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";

// Replace with your own assets
import contentHero from "../assets/contentMarkiting.gif";
import { useNavigate } from "react-router-dom";
import contentStats from "../assets/ContentPerformance.gif";

function ContentMarkiting() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 text-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-400/20 blur-3xl rounded-full" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-pink-400/20 blur-3xl rounded-full" />

        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaPenNib /> Content Marketing Experts
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Turn Content Into
              <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Conversions & Authority
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              We create high-impact content that educates, engages, and converts
              — helping your brand dominate search, social, and customer trust.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
                onClick={() => navigate("/contact-us")}
              >
                Start Content Strategy
              </button>
              {/* <button className="px-8 py-4 rounded-full border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition">
                Free Audit
              </button> */}
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={contentHero}
              alt="Content Marketing"
              className="w-[90%] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CONTENT MARKETING ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Why Content Marketing Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FaSearch />,
                title: "SEO-Driven Growth",
                desc: "Rank higher and attract organic traffic",
              },
              {
                icon: <FaBullhorn />,
                title: "Brand Authority",
                desc: "Position your brand as an industry leader",
              },
              {
                icon: <FaChartLine />,
                title: "Long-Term ROI",
                desc: "Content keeps working long after publishing",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="text-4xl text-orange-500 mb-4 flex justify-center">
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
      <section className="py-24 bg-gradient-to-br from-white to-orange-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our Content Marketing Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaLayerGroup />,
                title: "Content Strategy",
                desc: "Audience research, topics & planning",
              },
              {
                icon: <FaPenNib />,
                title: "Content Creation",
                desc: "Blogs, landing pages, scripts & copy",
              },
              {
                icon: <FaChartLine />,
                title: "Optimization & Scaling",
                desc: "Performance tracking & content growth",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-4xl text-pink-500 mb-4">{item.icon}</div>
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
            Our Content Creation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {["Research", "Plan", "Create", "Distribute"].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition"
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE ================= */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={contentStats}
            alt="Content Performance"
            className="rounded-3xl shadow-2xl"
          />
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Performance That Speaks
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We track rankings, engagement, and conversions to continuously
              improve content impact.
            </p>
            <ul className="space-y-3">
              {[
                "SEO optimization",
                "Content analytics",
                "Conversion-focused writing",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
        <FaRocket className="text-5xl mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Grow With Content?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-white/90">
          Let’s build content that attracts, converts, and scales your brand.
        </p>
        <button
          className="px-10 py-4 bg-white text-orange-500 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          onClick={() => navigate("/contact-us")}
        >
          Launch Content Strategy
        </button>
      </section>
    </div>
  );
}

export default ContentMarkiting;
