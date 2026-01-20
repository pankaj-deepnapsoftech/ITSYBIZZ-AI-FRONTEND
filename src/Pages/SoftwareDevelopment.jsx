import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaCloud,
  FaShieldAlt,
  FaDatabase,
  FaRocket,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

import {
  FaUsersCog,
  FaIndustry,
  FaPlug,
} from "react-icons/fa";


// Replace with your real images / gifs
import heroGif from "../assets/softwareDevelopment.gif";
import cloudGif from "../assets/softwareCloud.gif";
import { useNavigate } from "react-router-dom";
// import systemGif from "../../assets/system.gif";

const SoftwareDevelopment = () => {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
              <FaCode /> Software Development Services
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Build Intelligent, Scalable &
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                Future-Ready Software
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              We design and develop secure, high-performance software solutions
              that automate operations, improve productivity, and drive growth.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-10 py-4 rounded-full font-bold shadow-xl"
              onClick={() => {
                navigate("/contact-us");
              }}
            >
              Discuss Your Software →
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
            <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full"></div>
            <img
              src={heroGif}
              alt="Software Development"
              className="relative w-[320px] md:w-[480px] rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Our Software Development Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaCogs />,
                title: "Custom Software",
                text: "Tailor-made solutions designed for your exact business needs.",
              },
              {
                icon: <FaCloud />,
                title: "Cloud Applications",
                text: "Scalable, secure and high-availability cloud-based software.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Enterprise Security",
                text: "Robust security architecture with compliance & data protection.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-3xl shadow-lg"
              >
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6">
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
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={cloudGif}
            alt="Cloud Software"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cloud-First, Performance-Driven Software
            </h2>
            <p className="text-gray-600 mb-6">
              Our software is designed with cloud scalability, security, and
              performance at its core — ensuring long-term success.
            </p>

            <ul className="space-y-4">
              {[
                "Microservices architecture",
                "High availability & load balancing",
                "Secure API & database design",
                "Continuous monitoring & optimization",
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
            Our Software Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: <FaDatabase />, title: "Requirement Analysis" },
              { icon: <FaCode />, title: "Architecture & Design" },
              { icon: <FaCogs />, title: "Development & Testing" },
              { icon: <FaRocket />, title: "Deployment & Scaling" },
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 shadow-md">
                <div className="text-3xl text-indigo-600 mb-4">{step.icon}</div>
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
            Software We Build
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "ERP & Business Management Systems",
                icon: <FaCogs />,
              },
              {
                title: "HRM, CRM & Workflow Automation",
                icon: <FaUsersCog />,
              },
              {
                title: "IoT & Industrial Software",
                icon: <FaIndustry />,
              },
              {
                title: "Cloud Dashboards & Analytics",
                icon: <FaCloud />,
              },
              {
                title: "Custom APIs & Integrations",
                icon: <FaPlug />,
              },
              {
                title: "SaaS Platforms",
                icon: <FaRocket />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-2xl group-hover:scale-110 transition">
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
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-500 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Let’s Build Your Software Solution
        </h2>
        <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
          From idea to enterprise-grade software — we deliver solutions that
          scale.
        </p>

        <button
          className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition"
          onClick={() => navigate("/portfolio")}
        >
          Start Your Software Project →
        </button>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
