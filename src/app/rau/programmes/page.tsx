import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes | Renaissance Africa University",
  description:
    "Browse Renaissance Africa University's five accredited programmes for 2026. R1,200/month tuition, R200 application fee.",
};

const PROGRAMMES = [
  {
    slug: "bba-african-development",
    title: "BBA in African Development & Enterprise",
    level: "ZQF Level 7",
    credits: 360,
    duration: "4 semesters",
    type: "Undergraduate",
    badge: "bg-[#C9A84C]/20 text-[#C9A84C]",
    border: "border-[#C9A84C]/30",
  },
  {
    slug: "bachelor-development-studies",
    title: "Bachelor of Development Studies",
    level: "ZQF Level 7",
    credits: 360,
    duration: "4 semesters",
    type: "Undergraduate",
    badge: "bg-[#C9A84C]/20 text-[#C9A84C]",
    border: "border-[#C9A84C]/30",
  },
  {
    slug: "pgdip-research",
    title: "PGDip in Research",
    level: "ZQF Level 8",
    credits: 120,
    duration: "2 semesters",
    type: "Postgraduate",
    badge: "bg-blue-400/20 text-blue-300",
    border: "border-blue-400/30",
  },
  {
    slug: "mphil-development-studies",
    title: "MPhil in Development Studies",
    level: "ZQF Level 9",
    credits: 240,
    duration: "Minimum 1 year",
    type: "Postgraduate",
    badge: "bg-blue-400/20 text-blue-300",
    border: "border-blue-400/30",
  },
  {
    slug: "phd-development-studies",
    title: "PhD in Development Studies",
    level: "ZQF Level 10",
    credits: 360,
    duration: "Minimum 2 years",
    type: "Doctoral",
    badge: "bg-purple-400/20 text-purple-300",
    border: "border-purple-400/30",
  },
];

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-[#1B3A6B] text-white">
      {/* Header */}
      <div className="py-16 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/rau"
            className="text-[#C9A84C] hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Renaissance Africa University
          </Link>
          <h1 className="text-4xl font-bold mb-3">Programmes</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Five accredited qualifications for the 2026 intake. R1,200/month
            tuition. R200 non-refundable application fee, then R300 acceptance
            fee once approved.
          </p>
        </div>
      </div>

      {/* Fee summary */}
      <div className="bg-[#C9A84C]/10 border-b border-[#C9A84C]/20 py-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-8 text-sm">
          {[
            { label: "Application fee", value: "R200", note: "non-refundable, paid on submission" },
            { label: "Acceptance fee", value: "R300", note: "paid after approval" },
            { label: "Monthly tuition", value: "R1,200", note: "all programmes" },
          ].map(({ label, value, note }) => (
            <div key={label}>
              <p className="text-[#C9A84C] font-bold text-xl">{value}</p>
              <p className="text-white font-medium">{label}</p>
              <p className="text-blue-300">{note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Programme list */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        {PROGRAMMES.map((prog) => (
          <div
            key={prog.slug}
            className={`border rounded-xl p-6 flex items-start justify-between gap-6 bg-white/5 ${prog.border}`}
          >
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${prog.badge}`}>
                  {prog.type}
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 text-blue-200">
                  {prog.level}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {prog.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-blue-300">
                <span>{prog.credits} credits</span>
                <span>·</span>
                <span>{prog.duration}</span>
                <span>·</span>
                <span>R1,200/month</span>
              </div>
            </div>
            <Link
              href={`/rau/apply/${prog.slug}`}
              className="shrink-0 inline-flex items-center px-5 py-2.5 rounded-lg bg-[#C9A84C] text-[#1B3A6B] text-sm font-semibold hover:brightness-110 transition"
            >
              Apply
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-blue-400 pb-12">
        Questions?{" "}
        <a href="mailto:admissions@rau.ac.za" className="text-[#C9A84C] hover:underline">
          admissions@rau.ac.za
        </a>
      </p>
    </main>
  );
}
