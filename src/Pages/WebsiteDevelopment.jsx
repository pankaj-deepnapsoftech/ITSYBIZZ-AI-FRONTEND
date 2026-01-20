import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaPaintBrush,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";

// 👉 Replace these with your real images / gifs
// src\assets\webdev.gif
import heroGif from "../assets/webdev.gif"
import uiGif from "../assets/UserInterface.gif"
import { useNavigate } from "react-router-dom";
// import devGif from "../../assets/software1.gif";

const WebDevelopment = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <FaCode /> Web Development Services
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Build Powerful, Scalable &
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                High-Performance Websites
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              We design and develop fast, secure and conversion-focused websites
              using modern technologies to help your business grow online.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full font-bold shadow-xl"
              onClick={() => navigate("/contact-us")}
            >
              Get a Free Consultation →
            </motion.button>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
            <img
              src={heroGif}
              alt="Web Development"
              className="relative w-[320px] md:w-[480px] rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaPaintBrush />,
                title: "UI / UX Design",
                text: "Beautiful, user-friendly interfaces focused on conversion.",
              },
              {
                icon: <FaCode />,
                title: "Modern Development",
                text: "React, Next.js, Node, Laravel & scalable architecture.",
              },
              {
                icon: <FaServer />,
                title: "Secure Backend",
                text: "Fast APIs, authentication & cloud-ready systems.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-3xl shadow-lg"
              >
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE + CONTENT ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <img src={uiGif} alt="UI UX" className="rounded-3xl shadow-2xl" />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Design That Engages & Converts
            </h2>
            <p className="text-gray-600 mb-6">
              Our UI/UX design focuses on user psychology, performance,
              accessibility, and modern aesthetics to ensure high engagement.
            </p>

            <ul className="space-y-4">
              {[
                "Mobile-first responsive design",
                "Lightning-fast performance",
                "SEO-optimized structure",
                "Conversion-focused layouts",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-green-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-14">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: <FaRocket />, title: "Planning" },
              { icon: <FaPaintBrush />, title: "Design" },
              { icon: <FaCode />, title: "Development" },
              { icon: <FaMobileAlt />, title: "Launch" },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 shadow-md">
                <div className="text-3xl text-blue-600 mb-4">{step.icon}</div>
                <h3 className="font-bold text-lg">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Build Your Website?
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Let’s create a high-performance website that grows your business.
        </p>

        <button
          onClick={() => navigate("/portfolio")}
          className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition"
        >
          Start Your Project →
        </button>
      </section>
    </div>
  );
};

export default WebDevelopment;
