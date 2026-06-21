import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renaissance Africa University — Apply Online",
  description:
    "Apply to study at Renaissance Africa University. Browse programmes and submit your application online.",
};

export default function RAULandingPage() {
  return (
    <main className="min-h-screen bg-[#1B3A6B] text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C9A84C] mb-8">
          <svg
            className="w-10 h-10 text-[#1B3A6B]"
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
          Renaissance Africa University
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mb-10">
          Apply online for the 2026 academic year. R1,200/month tuition.
          R200 application fee. Choose your programme and submit securely via PayFast.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/rau/programmes"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#C9A84C] text-[#1B3A6B] font-semibold text-lg hover:brightness-110 transition"
          >
            Browse Programmes
          </Link>
          <Link
            href="/rau/about"
            className="inline-flex items-center px-8 py-4 rounded-full border border-[#C9A84C] text-[#C9A84C] font-semibold text-lg hover:bg-white/10 transition"
          >
            About RAU
          </Link>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="bg-[#C9A84C]/10 border-y border-[#C9A84C]/30 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-light italic text-[#C9A84C] leading-relaxed">
            &ldquo;Africa does not need more graduates who can recite problems.
            Africa needs graduates who can solve them.&rdquo;
          </p>
          <p className="mt-4 text-blue-300 text-sm uppercase tracking-widest">
            RAU Academic Philosophy
          </p>
          <Link
            href="/rau/about"
            className="inline-flex items-center mt-6 text-[#C9A84C] font-semibold hover:underline"
          >
            Read our Academic Philosophy →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "5", label: "Programmes" },
            { value: "R1,200", label: "Per Month" },
            { value: "R200", label: "Application Fee" },
            { value: "2026", label: "Intake Open" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold text-[#C9A84C]">{value}</p>
              <p className="text-blue-200 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white/5 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">How to Apply</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose a programme",
                desc: "Browse our five accredited qualifications and select the one that fits your goals.",
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
                <span className="w-12 h-12 rounded-full bg-[#C9A84C] text-[#1B3A6B] font-bold text-xl flex items-center justify-center mb-4">
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
        <p className="text-blue-200 mb-8">Applications for 2026 are now open.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/rau/programmes"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#C9A84C] text-[#1B3A6B] font-semibold hover:brightness-110 transition"
          >
            Get Started
          </Link>
          <Link
            href="/rau/about"
            className="inline-flex items-center px-8 py-4 rounded-full border border-[#C9A84C] text-[#C9A84C] font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
