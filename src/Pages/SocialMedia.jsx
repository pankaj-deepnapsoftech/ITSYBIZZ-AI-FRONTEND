import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaChartLine,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Replace with your social media gif/image
import socialGif from "../assets/social-media-final.gif";

function SocialMedia() {
  const navigate = useNavigate();
  const services = [
    {
      icon: <FaInstagram />,
      title: "Instagram Growth",
      desc: "High-engagement reels, stories & posts that boost followers and brand visibility.",
    },
    {
      icon: <FaFacebookF />,
      title: "Facebook Management",
      desc: "Content, ads & community management for consistent engagement.",
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn Branding",
      desc: "Professional brand positioning for B2B growth and lead generation.",
    },
    {
      icon: <FaTwitter />,
      title: "Twitter/X Presence",
      desc: "Real-time brand voice, trend-based content & reputation building.",
    },
    {
      icon: <FaYoutube />,
      title: "YouTube Strategy",
      desc: "Video content planning, optimization & subscriber growth.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Reporting",
      desc: "Track performance, reach, engagement & ROI with detailed insights.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28">
        {/* Background Effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-20 -right-40 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <FaInstagram /> Social Media Excellence
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Build Powerful
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Social Media Presence
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              We help brands grow, engage, and convert audiences across all
              major social media platforms with data-driven strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                Grow My Social Media
              </button> */}
              <button
                className="border border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition"
                onClick={() => navigate("/contact-us")}
              >
                Free Consultation
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={socialGif}
                alt="Social Media Marketing"
                className="relative w-[90%] max-w-lg rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Platforms We Manage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we manage your brand across all major
              social platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group border border-gray-100"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-2xl mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let us turn your social channels into powerful growth engines.
          </p>

          <button
            className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            onClick={() => navigate("/contact-us")}
          >
            Start Social Growth
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default SocialMedia;
