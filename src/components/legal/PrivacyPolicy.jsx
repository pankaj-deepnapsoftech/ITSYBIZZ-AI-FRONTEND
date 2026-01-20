import React from "react";
import { ShieldCheck, Cookie, Image, Users, Clock, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-15 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <ShieldCheck size={52} className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-green-100">
            Your privacy matters to us. Learn how we collect, use, and protect
            your data.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        {/* Card */}
        <PolicyCard title="Who we are">
          <p>
            Our website address is{" "}
            <a
              href="https://itsybizz.com"
              className="text-green-600 font-medium hover:underline"
            >
              https://itsybizz.com
            </a>
          </p>
        </PolicyCard>

        <PolicyCard title="Comments" icon={<Users size={22} />}>
          <p>
            When visitors leave comments, we collect the data shown in the
            comments form, along with the visitor’s IP address and browser user
            agent string to help spam detection.
          </p>
          <p className="mt-3">
            An anonymized hash of your email may be shared with Gravatar. View
            their policy here:{" "}
            <a
              href="https://itsybizz.com/policy"
              className="text-green-600 hover:underline"
            >
              https://itsybizz.com/policy
            </a>
          </p>
        </PolicyCard>

        <PolicyCard title="Media" icon={<Image size={22} />}>
          <p>
            If you upload images, avoid including embedded location data (EXIF
            GPS). Visitors can download and extract location data from images on
            the website.
          </p>
        </PolicyCard>

        <PolicyCard title="Cookies" icon={<Cookie size={22} />}>
          <p>
            Cookies may store your name, email, and website for convenience.
            These cookies last for one year to save you time when commenting
            again.
          </p>
        </PolicyCard>

        <PolicyCard
          title="Embedded content from other websites"
          icon={<Globe size={22} />}
        >
          <p>
            Articles may include embedded content (videos, images, etc.). These
            websites may collect data about you, use cookies, and track your
            interaction with their content.
          </p>
        </PolicyCard>

        <PolicyCard title="Who we share your data with">
          <p>
            If you request a password reset, your IP address will be included in
            the reset email.
          </p>
        </PolicyCard>

        <PolicyCard
          title="How long we retain your data"
          icon={<Clock size={22} />}
        >
          <p>
            Comments and metadata are retained indefinitely so follow-up
            comments can be approved automatically.
          </p>
        </PolicyCard>

        <PolicyCard title="What rights you have over your data">
          <p>
            You can request an exported file of your personal data or ask us to
            erase it, excluding data required for legal or security purposes.
          </p>
        </PolicyCard>

        <PolicyCard title="Where your data is sent">
          <p>
            Visitor comments may be checked through automated spam detection
            services.
          </p>
        </PolicyCard>
      </div>
    </div>
  );
};

/* Reusable Card Component */
const PolicyCard = ({ title, children, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <div className="bg-green-100 text-green-600 p-2 rounded-lg">
            {icon}
          </div>
        )}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
};

export default PrivacyPolicy;
