import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Briefcase, UploadCloud, Send } from "lucide-react";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);

  const designations = [
    { text: "Select Position you are applying for", value: "" },
    { text: "Web Designer", value: "WD" },
    { text: "Web Developer", value: "WBD" },
    { text: "Software Developer", value: "SD" },
    { text: "App Developer", value: "AD" },
    { text: "Hybrid Web Developer", value: "HWD" },
    { text: "Sales Executive", value: "SE" },
    { text: "Sales Manager", value: "SM" },
    { text: "Relationship Manager", value: "RM" },
    { text: "Business Analyst", value: "BA" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      ["application/pdf", "image/jpeg", "image/png"].includes(file.type)
    ) {
      setFormData({ ...formData, resume: file });
    } else {
      toast.error("Upload PDF, JPG, or PNG only");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/career`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toast.success(res.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        designation: "",
        resume: null,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-20 -right-32 w-96 h-96 bg-blue-400/30 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            <Briefcase size={16} /> Careers at ITSYBIZZ
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build Your Career <br />
            With <span className="text-green-600">ITSYBIZZ</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Join a team of innovators, developers, designers, and marketers.
            Grow your skills while building impactful digital products.
          </p>

          <img
            src="/career.png"
            alt="Career"
            className="mt-10 w-full max-w-md drop-shadow-2xl"
          />
        </div>

        {/* Right Form */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-1">Apply Now 🚀</h2>
          <p className="text-gray-600 mb-6">
            Fill in your details and upload your resume
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
            >
              {designations.map((val, i) => (
                <option key={i} value={val.value}>
                  {val.text}
                </option>
              ))}
            </select>

            {/* File Upload */}
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-green-300 rounded-xl p-6 cursor-pointer hover:bg-green-50 transition">
              <UploadCloud className="text-green-600" />
              <span className="text-sm text-gray-600">
                Upload Resume (PDF / JPG / PNG)
              </span>
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Career;
