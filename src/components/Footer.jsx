import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const digitalMarketingLinks = [
    { title: "Meta Ads", link: "/meta-ads" },
    { title: "Google Ads", link: "/google-ads" },
    {
      title: "Email Marketing",
      link: "/email-marketing",
    },
    {
      title: "Content Marketing",
      link: "/content-marketing",
    },
    { title: "SEO Service", link: "/seo-service" },
    { title: "PPC", link: "/ppc" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#112166] to-[#0f172a] text-white">
      {/* Glow Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10  ">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand & Social */}
          <div className="space-y-6">
            <motion.div
              className="flex items-center space-x-4 2xl:flex-1 2xl:justify-s"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/" className="relative group">
                <motion.div
                  className="relative"
                  whileHover={{
                    filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))",
                  }}
                >
                  <img
                    src="/itsybizz.png"
                    alt="Logo"
                    className="h-12 w-auto object-contain"
                  />
                  {/* Logo glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </Link>
            </motion.div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Smart digital solutions empowering businesses with technology,
              innovation, and automation.
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: FaFacebookF,
                  link: "https://www.facebook.com/officialitsybizz",
                  color: "hover:bg-[#1877F2]",
                },
                {
                  icon: FaXTwitter,
                  link: "https://x.com/itsybizz",
                  color: "hover:bg-black",
                },
                {
                  icon: FaYoutube,
                  link: "https://www.youtube.com/@deepnap_softech",
                  color: "hover:bg-[#FF0000]",
                },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/itsy.bizz/",
                  color: "hover:bg-gradient-to-tr from-[#BD08B2] to-[#FCC425]",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 
                  transition-all duration-300 hover:scale-110 ${item.color}`}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact-us" },
                { name: "Blogs", path: "/blogs" },
                { name: "FAQ", path: "/faq" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-green-400 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Digital Marketing</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {digitalMarketingLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className="hover:text-green-400 transition-all duration-300"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { name: "Career", path: "/career" },
                { name: "Privacy Policy", path: "/policy" },
                { name: "Terms & Conditions", path: "/terms" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-green-400 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            ITSYBIZZ AI Private Limited
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
