import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAU — Apply Online",
  description:
    "Apply to study at RAU. Browse programmes and submit your application online.",
};

export default function RAULandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-400 mb-8">
          <svg
            className="w-10 h-10 text-blue-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l6.16-3.422A12.083 12.083 0 0121 12c0 3.866-4.03 7-9 7S3 15.866 3 12c0-.856.148-1.68.42-2.444L12 14z"
            />
          </svg>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Randse Afrikaanse Universiteit
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mb-10">
          Apply online for the 2026 academic year. Choose your programme, complete
          the application form, and pay your application fee securely via PayFast.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/rau/programmes"
            className="inline-flex items-center px-8 py-4 rounded-full bg-amber-400 text-blue-950 font-semibold text-lg hover:bg-amber-300 transition-colors"
          >
            Browse Programmes
          </Link>
          <a
            href="#about"
            className="inline-flex items-center px-8 py-4 rounded-full border border-blue-400 text-blue-100 font-semibold text-lg hover:bg-blue-800 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-900/50 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "50+", label: "Programmes" },
            { value: "15 000+", label: "Students" },
            { value: "1966", label: "Founded" },
            { value: "Joburg", label: "Campus" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold text-amber-400">{value}</p>
              <p className="text-blue-200 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About RAU</h2>
        <p className="text-blue-200 text-lg leading-relaxed">
          The Randse Afrikaanse Universiteit (RAU) offers a wide range of
          undergraduate and postgraduate qualifications across the sciences,
          humanities, commerce, law, and engineering. Our online application
          process makes it easy to secure your place for the upcoming academic
          year.
        </p>
        <Link
          href="/rau/programmes"
          className="inline-flex items-center mt-8 text-amber-400 font-semibold hover:underline"
        >
          View all programmes →
        </Link>
      </section>

      {/* How it works */}
      <section className="bg-blue-900/40 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            How to Apply
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose a programme",
                desc: "Browse our catalogue and select the qualification that fits your goals.",
              },
              {
                step: "2",
                title: "Complete the form",
                desc: "Fill in your personal and academic details on the secure application form.",
              },
              {
                step: "3",
                title: "Pay & submit",
                desc: "Pay the R200 application fee via PayFast. You'll receive confirmation by email.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center">
                <span className="w-12 h-12 rounded-full bg-amber-400 text-blue-950 font-bold text-xl flex items-center justify-center mb-4">
                  {step}
                </span>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-blue-200 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to apply?</h2>
        <p className="text-blue-200 mb-8">
          Applications for 2026 are now open.
        </p>
        <Link
          href="/rau/programmes"
          className="inline-flex items-center px-8 py-4 rounded-full bg-amber-400 text-blue-950 font-semibold hover:bg-amber-300 transition-colors"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
