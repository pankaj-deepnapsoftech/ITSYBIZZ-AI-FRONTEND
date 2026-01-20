import React from "react";
import {
  FileText,
  Clock,
  CreditCard,
  ShieldCheck,
  RefreshCcw,
  Image,
  Users,
  Lock,
  Wrench,
  Server,
  AlertTriangle,
} from "lucide-react";

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FileText size={52} className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-green-100">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <TermCard title="Scope of Services" icon={<ShieldCheck />}>
          ITSYBIZZ provides website design, development, and related services as
          defined in the agreed project proposal.
        </TermCard>

        <TermCard title="Project Timeline" icon={<Clock />}>
          Estimated timelines include milestones and deadlines. Delays caused by
          missing client inputs may extend delivery timelines.
        </TermCard>

        <TermCard title="Payment Terms" icon={<CreditCard />}>
          Payments must be made as per the agreed structure, including advance
          deposits and milestone-based payments.
        </TermCard>

        <TermCard title="Intellectual Property" icon={<FileText />}>
          Ownership of the final website is transferred after full payment.
          ITSYBIZZ retains rights to pre-existing tools and frameworks.
        </TermCard>

        <TermCard title="Revisions and Changes" icon={<RefreshCcw />}>
          Limited revisions are included. Additional changes may involve extra
          costs and extended timelines.
        </TermCard>

        <TermCard title="Content and Materials" icon={<Image />}>
          Clients are responsible for providing licensed content. ITSYBIZZ is
          not liable for copyright violations in client-provided materials.
        </TermCard>

        <TermCard title="Client Responsibilities" icon={<Users />}>
          Timely communication, approvals, and material delivery are required to
          maintain the project schedule.
        </TermCard>

        <TermCard title="Confidentiality" icon={<Lock />}>
          Both parties agree to protect confidential and sensitive information
          exchanged during the project.
        </TermCard>

        <TermCard title="Warranty and Support" icon={<Wrench />}>
          A 15-day post-launch support period is provided for bug fixes. Major
          changes may be charged separately.
        </TermCard>

        <TermCard title="Hosting and Maintenance" icon={<Server />}>
          Hosting and maintenance terms, if applicable, will be defined in a
          separate agreement.
        </TermCard>

        <TermCard title="Limitation of Liability" icon={<AlertTriangle />}>
          ITSYBIZZ is not responsible for damages arising from website usage.
          Clients agree to indemnify the company against related claims.
        </TermCard>
      </div>
    </div>
  );
};

/* Reusable Card */
const TermCard = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-green-100 text-green-600 p-3 rounded-lg">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
};

export default Terms;
