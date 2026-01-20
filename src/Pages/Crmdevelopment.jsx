import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaChartLine,
  FaTasks,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

import crmHero from "../assets/crmgif.gif"; 
import dashboard from "../assets/crmji.gif"; // optional
import crmSmartDashboard from "../assets/crmSmartDashboard.gif";

function Crmdevelopment() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Decorative Blurs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-20 -right-32 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm mb-6 font-medium">
              <FaRocket /> 7 Days Free Trial Available
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Powerful CRM Software to
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Manage, Track & Grow Customers
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              SOPAS CRM helps businesses automate sales, manage leads, track
              customer interactions, and increase revenue — all in one secure,
              cloud-based platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://subscriptiontest.rtpas.in/"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
              >
                Start Free Trial
              </a>

              {/* Optional Secondary Button */}
              {/* 
        <a
          href="https://subscriptiontest.rtpas.in/"
          target="_blank"
          rel="noreferrer"
          className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition"
        >
          View Demo
        </a> 
        */}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex justify-center"
          >
            <img
              src={crmSmartDashboard}
              alt="CRM Software"
              className="w-[80%] rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            CRM Features That Drive Growth
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Lead & Customer Management",
                icon: <FaUsers />,
              },
              {
                title: "Sales Tracking & Analytics",
                icon: <FaChartLine />,
              },
              {
                title: "Task & Workflow Automation",
                icon: <FaTasks />,
              },
              {
                title: "Cloud-Based SaaS Platform",
                icon: <FaCloud />,
              },
              {
                title: "Enterprise-Grade Security",
                icon: <FaShieldAlt />,
              },
              {
                title: "Scalable for Any Business",
                icon: <FaRocket />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2"
              >
                <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center rounded-xl text-2xl group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DASHBOARD PREVIEW ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={crmHero}
            alt="CRM Dashboard"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart Dashboard & Real-Time Insights
            </h2>

            <p className="text-gray-600 mb-6">
              Monitor sales pipelines, customer interactions, team performance,
              and revenue insights in real-time with our intuitive CRM
              dashboard.
            </p>

            <ul className="space-y-3">
              {[
                "Real-time reports & analytics",
                "Custom pipelines & stages",
                "User role & permission control",
                "Email & activity tracking",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PRICING CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Try SOPAS CRM Free for 7 Days
        </h2>

        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          No credit card required. Upgrade anytime to unlock premium features
          and scale your business effortlessly.
        </p>

        <a
          href="https://subscriptiontest.rtpas.in/"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Start Free Trial
        </a>
      </section>
    </div>
  );
}

export default Crmdevelopment;
