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
      title: "Employee Database",
      description:
        "Keep all employee information organized, secure, and easily accessible — from personal details to job history — all in one central system.",
      icon: <FaGlobe className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
    {
      title: "Payroll Automation",
      description:
        "Run payroll effortlessly with automated salary calculations, tax deductions, and compliance — accurate, timely, and stress-free.",
      icon: <FaLaptopCode className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: 0.2,
    },
    {
      title: "Mobile HRM Access",
      description:
        "Empower employees and managers to access HR tools anytime, anywhere — approvals, updates, and insights right from their phones.",
      icon: <FaShoppingCart className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      delay: 0.3,
    },
    {
      title: "Integration Support",
      description:
        "Seamlessly connect your HRM with ERP, CRM, and accounting systems to keep data flowing smoothly across your organization.",
      icon: <FaFileAlt className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      delay: 0.4,
    },
    {
      title: "Analytics & Reports",
      description:
        "Make smarter HR decisions with clear insights into attendance, performance, payroll trends, and workforce productivity.",
      icon: <FaShieldAlt className="w-8 h-8" />,
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
      delay: 0.5,
    },
    {
      title: "Attendance & Leave Management",
      description:
        "Track working hours, shifts, overtime, and leave requests with complete transparency and real-time visibility.",
      icon: <FaTools className="w-8 h-8" />,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      delay: 0.6,
    },
  ];

  const features = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      text: "Secure Cloud-Based Platform",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      text: "Custom & Scalable Architecture",
    },
    {
      icon: <FaMobile className="w-6 h-6" />,
      text: "Employee Self-Service Portal",
    },
    { icon: <MdSpeed className="w-6 h-6" />, text: "Automated HR Workflows" },
  ];

  const stats = [
    { number: "100+", label: "Companies Using Our HRM" },
    { number: "1M+", label: "Payslips Processed Securely" },
    { number: "99.9%", label: "System Reliability" },
    { number: "24/7", label: "Dedicated Support" },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".card", {
      duration: 1000,
      origin: "bottom",
      distance: "60px",
      easing: "ease-out",
      interval: 150,
      reset: false,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <FaCode className="w-4 h-4 mr-2" />
            HRM Development
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Human Resource
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-5">
              Management System
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Our <strong>HRM solution</strong> is designed to simplify how you
            manage people. From payroll and attendance to performance and
            reporting, everything works together to save time, reduce errors,
            and help your teams focus on what truly matters — people.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full shadow-md"
              >
                <div className="text-blue-600">{feature.icon}</div>
                <span className="text-gray-700 font-medium text-sm">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {cardsContent.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl"
            >
              <div
                className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${card.gradient} shadow-lg`}
              >
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
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
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Let’s build a modern HRM system that grows with your team and
              supports your business at every stage.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
              Start HRM Development
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
