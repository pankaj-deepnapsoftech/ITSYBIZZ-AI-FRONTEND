import React from "react";
import { motion } from "framer-motion";
import {
  FaNewspaper,
  FaBullhorn,
  FaHandshake,
  FaMicrophoneAlt,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

// 👉 Replace with your own gif/image
import prGif from "../assets/Public-Relation.gif";
import { useNavigate } from "react-router-dom";

function PublicRelation() {
 const navigate = useNavigate();
  const services = [
    {
      icon: <FaNewspaper />,
      title: "Media Coverage",
      desc: "Strategic press coverage across top digital and print publications to build credibility.",
    },
    {
      icon: <FaBullhorn />,
      title: "Press Releases",
      desc: "Professionally crafted press releases that get noticed and published.",
    },
    {
      icon: <FaHandshake />,
      title: "Stakeholder Relations",
      desc: "Strong relationships with media houses, journalists, and industry leaders.",
    },
    {
      icon: <FaMicrophoneAlt />,
      title: "Crisis Management",
      desc: "Protect your brand reputation with fast, effective crisis response strategies.",
    },
    {
      icon: <FaGlobe />,
      title: "Brand Positioning",
      desc: "Position your brand as a trusted authority in your industry.",
    },
    {
      icon: <FaChartLine />,
      title: "PR Analytics",
      desc: "Track media reach, brand sentiment, and PR campaign performance.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
              <FaBullhorn /> Public Relations Excellence
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Build Trust, Influence &
              <span className="block text-blue-600">Powerful Public Image</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Our Public Relations strategies help brands gain media visibility,
              build authority, manage reputation, and create lasting public
              trust through impactful communication.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                Get PR Strategy
              </button> */}
              <button
                className="border border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition"
                onClick={() => navigate("/contact-us")}
              >
                Talk to Expert
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={prGif}
              alt="Public Relations"
              className="w-[90%] max-w-lg rounded-3xl shadow-2xl"
            />
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
              Our Public Relations Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive PR solutions designed to strengthen brand image,
              manage perception, and drive positive media attention.
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group"
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
            Ready to Shape Your Public Image?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to build trust, credibility, and positive visibility
            for your brand across all media platforms.
          </p>

          <button
            className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            onClick={() => navigate("/contact-us")}
          >
            Start PR Campaign
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default PublicRelation;
