import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaStar,
  FaSearch,
  FaTrashAlt,
  FaReply,
  FaChartLine,
  FaSmile,
  FaRocket,
} from "react-icons/fa";

 import monitor from "../assets/ORM_vb_cons-8.gif";
import reviews from "../assets/Audit-data-analytics.png";
 import analytics from "../assets/strategies.jpg";



function ORM() {
  return (
    <div className="w-full">
      {/* ================= WHAT IS ORM ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What is Online Reputation Management?
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Online Reputation Management (ORM) helps businesses monitor,
              protect, and enhance their digital reputation across search
              engines, social media, review platforms, and online communities.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We ensure your brand appears trustworthy, credible, and positive
              wherever customers search for you.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={monitor}
              alt="ORM Monitoring"
              className="rounded-3xl shadow-2xl w-[90%]"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ORM SERVICES ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Our ORM Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaSearch />,
                title: "Online Monitoring",
                desc: "Track brand mentions, reviews, keywords, and conversations across platforms.",
              },
              {
                icon: <FaReply />,
                title: "Review & Response Management",
                desc: "Professional handling of positive and negative reviews to build trust.",
              },
              {
                icon: <FaTrashAlt />,
                title: "Negative Content Suppression",
                desc: "Reduce visibility of harmful or misleading content from search results.",
              },
              {
                icon: <FaStar />,
                title: "Review Generation",
                desc: "Increase authentic positive reviews to strengthen brand credibility.",
              },
              {
                icon: <FaChartLine />,
                title: "Reputation Analytics",
                desc: "Detailed insights, sentiment analysis, and reputation performance tracking.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Crisis Management",
                desc: "Protect your brand during PR crises with rapid response strategies.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg text-left"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            How Our ORM Process Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: reviews,
                title: "Audit & Analysis",
                text: "We analyze your current online presence, reviews, and brand sentiment.",
              },
              {
                img: analytics,
                title: "Strategy & Action",
                text: "Custom ORM strategies to address risks and boost positive visibility.",
              },
              {
                img: monitor,
                title: "Monitor & Improve",
                text: "Continuous monitoring and optimization for long-term reputation growth.",
              },
            ].map((step, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl shadow-md">
                <img
                  src={step.img}
                  alt={step.title}
                  className="rounded-2xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ORM ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Why Online Reputation Matters
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <FaSmile />, text: "Build Customer Trust" },
              { icon: <FaStar />, text: "Increase Conversion Rates" },
              { icon: <FaShieldAlt />, text: "Protect Brand Image" },
              { icon: <FaRocket />, text: "Drive Long-Term Growth" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-green-600 text-3xl mb-4">{item.icon}</div>
                <p className="font-semibold text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Protect Your Brand Reputation Today
        </h2>

        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Don’t let negative reviews or misinformation harm your brand. Our ORM
          experts help you stay trusted, credible, and respected online.
        </p>

        <a
          href="/contact"
          className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Start ORM Strategy
        </a>
      </section>
    </div>
  );
}

export default ORM;
