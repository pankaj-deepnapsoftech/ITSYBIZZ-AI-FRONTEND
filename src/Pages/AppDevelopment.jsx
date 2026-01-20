import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaRocket,
  FaCode,
  FaShieldAlt,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";

import {
  FaShoppingCart,
  FaBuilding,
  FaHeartbeat,
  FaMoneyCheckAlt,
  FaTruck,
  FaMicrochip,
} from "react-icons/fa";

// 👉 Replace with your actual assets
import appHero from "../assets/appdevelopment.gif";
import appUi from "../assets/appdev.gif";
import { useNavigate } from "react-router-dom";
// import appProcess from "../../assets/app-process.gif"; 


const AppDevelopment = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              <FaMobileAlt /> App Development Services
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Build Powerful Mobile Apps for
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Android & iOS
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              We design and develop high-performance mobile applications that
              deliver seamless user experiences, strong security, and scalable
              architecture for long-term growth.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-full font-bold shadow-xl"
              onClick={() => navigate("/contact-us")}
            >
              Start App Development →
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 rounded-full"></div>
            <img
              src={appHero}
              alt="App Development"
              className="relative w-[320px] md:w-[480px] rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PLATFORMS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Mobile Platforms We Build For
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaAndroid />,
                title: "Android App Development",
                text: "Native and custom Android apps built for performance and scalability.",
              },
              {
                icon: <FaApple />,
                title: "iOS App Development",
                text: "Premium iOS applications with smooth UI and secure architecture.",
              },
              {
                icon: <FaCogs />,
                title: "Cross-Platform Apps",
                text: "Single codebase apps using modern frameworks for faster delivery.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-3xl shadow-lg"
              >
                <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UI / UX SECTION ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <img src={appUi} alt="App UI UX" className="rounded-3xl shadow-2xl" />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stunning UI & Smooth User Experience
            </h2>
            <p className="text-gray-600 mb-6">
              We focus on intuitive design, fast performance, and engaging user
              journeys to ensure your app users keep coming back.
            </p>

            <ul className="space-y-4">
              {[
                "User-centric UI/UX design",
                "High performance & fast loading",
                "Secure authentication & APIs",
                "Scalable backend integration",
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
            Our App Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: <FaCode />, title: "Planning & Design" },
              { icon: <FaCogs />, title: "App Development" },
              { icon: <FaShieldAlt />, title: "Testing & Security" },
              { icon: <FaRocket />, title: "Launch & Support" },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 shadow-md">
                <div className="text-3xl text-purple-600 mb-4">{step.icon}</div>
                <h3 className="font-bold text-lg">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Apps We Develop
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "E-Commerce & Shopping Apps",
                icon: <FaShoppingCart />,
              },
              {
                title: "Enterprise & Business Apps",
                icon: <FaBuilding />,
              },
              {
                title: "Healthcare & Fitness Apps",
                icon: <FaHeartbeat />,
              },
              {
                title: "Fintech & Payment Apps",
                icon: <FaMoneyCheckAlt />,
              },
              {
                title: "Logistics & Delivery Apps",
                icon: <FaTruck />,
              },
              {
                title: "IoT & Smart Device Apps",
                icon: <FaMicrochip />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Build Your Mobile App?
        </h2>
        <p className="text-purple-100 max-w-2xl mx-auto mb-8">
          Turn your idea into a high-quality mobile application with our expert
          app development team.
        </p>

        <button
          className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition"
          onClick={() => navigate("/portfolio")}
        >
          Start App Development →
        </button>
      </section>
    </div>
  );
};

export default AppDevelopment;
