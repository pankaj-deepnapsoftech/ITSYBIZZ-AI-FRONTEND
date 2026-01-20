import React from "react";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaPaintBrush,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

 import brandHero from "../assets/brandBuilding.gif";
import strategy from "../assets/brandStatergy.jpg";
import design from "../assets/brandanalyse.jpg";
 import marketing from "../assets/digitalmarkiting.jpg";


export default function BrandBuilding() {
  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-pink-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm mb-6 font-semibold">
              <FaBullhorn /> Build a Brand People Love
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Strategic Brand Building for
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Long-Term Business Growth
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              We help startups and enterprises create powerful brand identities,
              memorable experiences, and emotional connections that drive trust,
              loyalty, and revenue.
            </p>

            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Build Your Brand
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={brandHero}
              alt="Brand Building"
              className="w-[90%] rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Our Brand Building Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Brand Strategy",
                desc: "Positioning, storytelling, tone of voice, and brand roadmap.",
                icon: <FaLightbulb />,
                 img: strategy,
              },
              {
                title: "Visual Identity Design",
                desc: "Logos, colors, typography, brand guidelines & UI systems.",
                icon: <FaPaintBrush />,
                 img: design,
              },
              {
                title: "Digital Marketing & Growth",
                desc: "Social media, paid campaigns, influencer & content marketing.",
                icon: <FaChartLine />,
                img: marketing,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-slate-50 rounded-3xl p-8 shadow-lg text-left"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-2xl mb-6"
                />

                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl flex items-center justify-center text-xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY BRANDING ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Why Brand Building Matters
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <FaUsers />, text: "Build Customer Trust" },
              { icon: <FaBullhorn />, text: "Increase Brand Awareness" },
              { icon: <FaChartLine />, text: "Drive Business Growth" },
              { icon: <FaRocket />, text: "Stand Out From Competition" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-pink-600 text-3xl mb-4">{item.icon}</div>
                <p className="font-semibold text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let’s Build a Powerful Brand Together
        </h2>

        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Whether you’re launching a startup or rebranding an enterprise, we’ll
          help you create a brand that customers remember and trust.
        </p>

        <a
          href="/contact"
          className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Start Branding Today
        </a>
      </section>
    </div>
  );
}
