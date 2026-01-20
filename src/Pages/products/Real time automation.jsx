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
      title: "Live Production & Quantity Tracking",
      description:
        "Monitor production in real time with crystal-clear accuracy. Instantly track completed, pending, and total quantities so you always know your factory’s exact status.",
      icon: <FaGlobe className="w-7 h-7" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
    {
      title: "Real-Time Machine ON / OFF Status",
      description:
        "No dependency on supervisors. Get live machine status directly on your dashboard and maintain complete operational visibility at all times.",
      icon: <FaLaptopCode className="w-7 h-7" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: 0.2,
    },
    {
      title: "Instant Error & Downtime Alerts",
      description:
        "Stay proactive with instant alerts for machine errors or downtime. Take action immediately to reduce losses and improve productivity.",
      icon: <FaShoppingCart className="w-7 h-7" />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      delay: 0.3,
    },
    {
      title: "Date-Wise Detailed Reports",
      description:
        "Access clean, structured reports for any date range. Analyze daily performance or long-term trends effortlessly.",
      icon: <FaFileAlt className="w-7 h-7" />,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      delay: 0.4,
    },
    {
      title: "Actionable Insights for Faster Decisions",
      description:
        "Turn factory data into smart decisions. Improve efficiency, reduce errors, and scale productivity with confidence.",
      icon: <FaShieldAlt className="w-7 h-7" />,
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
      delay: 0.5,
    },
    {
      title: "Employee Productivity Tracking",
      description:
        "Track operator-wise performance in real time. Identify top performers, spot bottlenecks, and maximize workforce efficiency.",
      icon: <FaTools className="w-7 h-7" />,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      delay: 0.6,
    },
  ];

  const features = [
    { icon: <FaRocket className="w-5 h-5" />, text: "Complete Automation" },
    { icon: <FaCode className="w-5 h-5" />, text: "High ROI" },
    { icon: <FaMobile className="w-5 h-5" />, text: "Secure & Reliable" },
    { icon: <MdSpeed className="w-5 h-5" />, text: "Scalable & Customizable" },
  ];

  const stats = [
    { number: "10K+", label: "Machines Connected" },
    { number: "99.9%", label: "System Uptime" },
    { number: "30%+", label: "Downtime Reduced" },
    { number: "24/7", label: "Monitoring & Support" },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".card", {
      duration: 1000,
      origin: "bottom",
      distance: "60px",
      interval: 150,
      reset: false,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* HEADER */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold tracking-wide shadow-lg mb-6">
            <FaCode className="w-4 h-4" />
            Automation Development Excellence
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Real-Time Production
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Automation Software
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            <strong>RTPAS – Real-Time Production Automation Suite</strong>{" "}
            empowers manufacturers with smart data, seamless automation, and
            complete factory visibility to boost efficiency and profitability.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-md border border-white/30 text-sm font-semibold text-gray-700"
              >
                <span className="text-blue-600">{feature.icon}</span>
                {feature.text}
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/30 text-center"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 max-w-7xl mx-auto">
          {cardsContent.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition`}
              />

              <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/30">
                <div
                  className={`w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg`}
                >
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {card.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${card.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-10 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to Transform Your Factory?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Build smarter, faster, and more profitable manufacturing
              operations.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl">
              Start Automation Development
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
