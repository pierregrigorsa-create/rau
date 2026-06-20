import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes | RAU",
  description: "Browse RAU undergraduate and postgraduate programmes for 2026.",
};

const FACULTIES = [
  {
    name: "Science & Technology",
    colour: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
    programmes: [
      { slug: "bsc-computer-science", title: "BSc Computer Science", duration: "3 years", fee: 200 },
      { slug: "bsc-mathematics", title: "BSc Mathematics", duration: "3 years", fee: 200 },
      { slug: "bsc-physics", title: "BSc Physics", duration: "3 years", fee: 200 },
      { slug: "beng-electrical", title: "BEng Electrical Engineering", duration: "4 years", fee: 200 },
    ],
  },
  {
    name: "Commerce & Management",
    colour: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-800",
    programmes: [
      { slug: "bcom-accounting", title: "BCom Accounting", duration: "3 years", fee: 200 },
      { slug: "bcom-economics", title: "BCom Economics", duration: "3 years", fee: 200 },
      { slug: "bba-management", title: "BBA Management", duration: "3 years", fee: 200 },
    ],
  },
  {
    name: "Humanities & Social Sciences",
    colour: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-800",
    programmes: [
      { slug: "ba-psychology", title: "BA Psychology", duration: "3 years", fee: 200 },
      { slug: "ba-sociology", title: "BA Sociology", duration: "3 years", fee: 200 },
      { slug: "ba-communication", title: "BA Communication Science", duration: "3 years", fee: 200 },
    ],
  },
  {
    name: "Law",
    colour: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-800",
    programmes: [
      { slug: "llb", title: "LLB Bachelor of Laws", duration: "4 years", fee: 200 },
      { slug: "bcom-law", title: "BCom Law", duration: "4 years", fee: 200 },
    ],
  },
];

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-950 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/rau" className="text-blue-300 hover:text-white text-sm mb-4 inline-block">
            ← Back to RAU Home
          </Link>
          <h1 className="text-4xl font-bold mb-3">Programmes</h1>
          <p className="text-blue-200 text-lg">
            Choose from our range of accredited qualifications for 2026.
            A R200 non-refundable application fee applies.
          </p>
        </div>
      </div>

      {/* Programme list */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {FACULTIES.map((faculty) => (
          <div key={faculty.name}>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {faculty.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {faculty.programmes.map((prog) => (
                <div
                  key={prog.slug}
                  className={`border rounded-xl p-5 flex items-start justify-between gap-4 ${faculty.colour}`}
                >
                  <div>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${faculty.badge}`}
                    >
                      {faculty.name}
                    </span>
                    <h3 className="font-semibold text-gray-900 mt-2">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Duration: {prog.duration}
                    </p>
                    <p className="text-sm text-gray-500">
                      Application fee: R{prog.fee}
                    </p>
                  </div>
                  <Link
                    href={`/rau/apply/${prog.slug}`}
                    className="shrink-0 inline-flex items-center px-4 py-2 rounded-lg bg-blue-950 text-white text-sm font-medium hover:bg-blue-800 transition-colors"
                  >
                    Apply
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 pb-12">
        Questions?{" "}
        <a href="mailto:admissions@rau.ac.za" className="text-blue-600 hover:underline">
          admissions@rau.ac.za
        </a>
      </p>
    </main>
  );
}
