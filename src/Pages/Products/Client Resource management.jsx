import React, { useEffect } from "react";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaFileAlt,
  FaGlobe,
  FaTools,
  FaRocket,
  FaCode,
  FaMobile,
} from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";

const WebDevelopment = () => {
  const cardsContent = [
    {
      title: "Lead & Opportunity Management",
      description:
        "Capture, qualify, and nurture high-value leads with intelligent workflows.",
      icon: <FaGlobe className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      glow: "group-hover:shadow-cyan-500/30",
      delay: 0.1,
    },
    {
      title: "Sales Pipeline Tracking",
      description:
        "Track every deal stage visually and close faster with clarity.",
      icon: <FaLaptopCode className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      glow: "group-hover:shadow-green-500/30",
      delay: 0.2,
    },
    {
      title: "Customer Communication",
      description:
        "Email, SMS & WhatsApp integration for consistent engagement.",
      icon: <FaShoppingCart className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-500",
      glow: "group-hover:shadow-pink-500/30",
      delay: 0.3,
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and scale operations effortlessly.",
      icon: <FaFileAlt className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      glow: "group-hover:shadow-purple-500/30",
      delay: 0.4,
    },
    {
      title: "Reports & Analytics",
      description: "Actionable insights with real-time dashboards and reports.",
      icon: <FaShieldAlt className="w-8 h-8" />,
      gradient: "from-orange-500 to-yellow-500",
      glow: "group-hover:shadow-yellow-500/30",
      delay: 0.5,
    },
    {
      title: "Mobile CRM",
      description: "Work from anywhere with fully responsive mobile access.",
      icon: <FaTools className="w-8 h-8" />,
      gradient: "from-blue-600 to-indigo-600",
      glow: "group-hover:shadow-blue-500/30",
      delay: 0.6,
    },
  ];

  const features = [
    { icon: <FaRocket />, text: "Fast Onboarding" },
    { icon: <FaCode />, text: "Secure Cloud" },
    { icon: <FaMobile />, text: "Mobile Ready" },
    { icon: <MdSpeed />, text: "Highly Scalable" },
  ];

  const stats = [
    { number: "1M+", label: "Leads Managed" },
    { number: "99.9%", label: "System Uptime" },
    { number: "500+", label: "Happy Businesses" },
    { number: "24/7", label: "Expert Support" },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      duration: 1200,
      distance: "60px",
      origin: "bottom",
      interval: 150,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-32 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-4000" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg mb-6">
            <FaCode /> CRM Development
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Customer Relationship
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
              Management Platform
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            A powerful CRM that helps businesses manage leads, accelerate sales,
            and build long-term customer relationships.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-md text-gray-700 font-medium"
              >
                <span className="text-blue-600">{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-24 reveal">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-xl border border-white/30"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {s.number}
              </div>
              <p className="mt-2 text-gray-600 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto reveal">
          {cardsContent.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.04 }}
              transition={{ duration: 0.35 }}
              className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl ${card.glow} hover:shadow-2xl border border-white/30`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${card.gradient} shadow-lg mb-6`}
              >
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>

              <div
                className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${card.gradient} rounded-full`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your CRM?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Let’s create a scalable, secure, and powerful CRM tailored for
              your business.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
              Start Building CRM
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
