import React from "react";
import {
  FaEnvelopeOpenText,
  FaPaperPlane,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaCheckCircle,
  FaRocket,
  FaClock,
} from "react-icons/fa";

// Replace with your real assets
import emailHero from "../assets/emails.gif";
import emailDashboard from "../assets/email-dashboard.gif";
import { useNavigate } from "react-router-dom";

function EmailMarkiting() {
    const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-400/20 blur-3xl rounded-full" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-purple-400/20 blur-3xl rounded-full" />

        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaEnvelopeOpenText /> Email Marketing Experts
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Convert Subscribers into
              <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Loyal Customers
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              We build data-driven email marketing campaigns that boost
              engagement, increase conversions, and nurture long-term customer
              relationships.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition"
                onClick={() => navigate("/contact-us")}
              >
                Start Email Campaign
              </button>

              {/* <button className="px-8 py-4 rounded-full border border-indigo-500 text-indigo-500 font-semibold hover:bg-indigo-500 hover:text-white transition">
                Free Consultation
              </button> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={emailHero}
              alt="Email Marketing"
              className="w-[50%] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY EMAIL MARKETING ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Why Email Marketing Still Wins
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FaUsers />,
                title: "Direct Audience Reach",
                desc: "Reach customers directly in their inbox",
              },
              {
                icon: <FaChartLine />,
                title: "High ROI Channel",
                desc: "Email delivers the highest ROI in digital marketing",
              },
              {
                icon: <FaClock />,
                title: "Automation at Scale",
                desc: "Send the right message at the perfect time",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="text-4xl text-indigo-500 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our Email Marketing Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaPaperPlane />,
                title: "Campaign Strategy",
                desc: "High-converting campaigns aligned with your goals.",
              },
              {
                icon: <FaCogs />,
                title: "Automation & Drip Flows",
                desc: "Welcome, nurturing & retention sequences.",
              },
              {
                icon: <FaEnvelopeOpenText />,
                title: "Creative Email Design",
                desc: "Mobile-friendly, eye-catching email designs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-4xl text-purple-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our Email Marketing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Audience Segmentation",
              "Content Creation",
              "Automation Setup",
              "Optimize & Scale",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition"
              >
                <div className="text-3xl font-bold text-indigo-500 mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ANALYTICS ================= */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={emailDashboard}
            alt="Email Analytics"
            className="rounded-3xl w-[80%] shadow-2xl"
          />

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Data-Driven Email Performance
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We monitor open rates, click-through rates, and conversions to
              continuously improve performance.
            </p>

            <ul className="space-y-3">
              {[
                "Advanced audience segmentation",
                "Real-time performance tracking",
                "Continuous optimization",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center">
        <FaRocket className="text-5xl mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Scale with Email Marketing?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-white/90">
          Build stronger relationships, drive repeat sales, and grow your brand
          with powerful email campaigns.
        </p>
        <button
          className="px-10 py-4 bg-white text-indigo-500 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          onClick={() => navigate("/contact-us")}
        >
          Launch Email Campaign
        </button>
      </section>
    </div>
  );
}

export default EmailMarkiting;
