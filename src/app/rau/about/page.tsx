import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Renaissance Africa University",
  description:
    "Learn about Renaissance Africa University's founding philosophy, graduate attributes, and commitment to African development.",
};

const ATTRIBUTES = [
  {
    title: "Intellectual Honesty",
    desc: "We seek the truth, acknowledge what we do not know, and resist the temptation to dress opinion as fact.",
  },
  {
    title: "Personal Accountability",
    desc: "We own our decisions, our learning, and our outcomes — and we do not transfer that responsibility elsewhere.",
  },
  {
    title: "Resilience",
    desc: "We meet difficulty without collapse, understanding that meaningful work is rarely smooth.",
  },
  {
    title: "Solutions Orientation",
    desc: "We are not satisfied with diagnosing problems. We are trained to move from analysis to action.",
  },
  {
    title: "Service and Integrity",
    desc: "We place the wellbeing of our communities above personal gain, and we act with honour in all things.",
  },
];

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold mb-3">About RAU</h1>
          <p className="text-blue-200 text-lg">
            Our founding conviction, our philosophy, and the graduates we are
            committed to producing.
          </p>
        </div>
      </div>

      {/* Founding conviction */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">Our Founding Conviction</h2>
        <p className="text-blue-100 text-lg leading-relaxed">
          Renaissance Africa University was founded on a conviction that is simple and
          radical in equal measure: Africa does not need more graduates who can recite
          problems. Africa needs graduates who can solve them.
        </p>
        <p className="text-blue-200 text-base leading-relaxed mt-4">
          Too many institutions on this continent — and beyond — produce graduates who
          are fluent in the language of crisis but paralysed in the face of it. They
          can articulate poverty, inequality, and underdevelopment with precision. What
          they cannot do is build a business, design a policy, lead a community, or
          conduct the research that moves knowledge forward.
        </p>
        <p className="text-blue-200 text-base leading-relaxed mt-4">
          RAU exists to change that. We are a university of practice and rigour — a
          place where academic excellence and real-world application are not in tension
          but are, in fact, the same thing.
        </p>
      </section>

      {/* Philosophy callout */}
      <section className="bg-[#C9A84C]/10 border-y border-[#C9A84C]/30 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-3xl font-light italic text-[#C9A84C] leading-relaxed">
            &ldquo;Africa does not need more graduates who can recite problems.
            Africa needs graduates who can solve them.&rdquo;
          </p>
          <p className="mt-4 text-blue-300 text-sm uppercase tracking-widest">
            RAU Academic Philosophy
          </p>
        </div>
      </section>

      {/* Graduate attributes */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#C9A84C] mb-2">
          The RAU Graduate
        </h2>
        <p className="text-blue-200 mb-10">
          Every programme at RAU is designed to develop five attributes that we
          believe define a graduate who is ready to serve Africa.
        </p>
        <div className="space-y-6">
          {ATTRIBUTES.map((attr, i) => (
            <div
              key={attr.title}
              className="border border-[#C9A84C]/30 rounded-xl p-6 bg-white/5"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A84C] text-[#1B3A6B] font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {attr.title}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{attr.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Join us for 2026</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">
          Applications are open. R1,200/month tuition across all five programmes.
          R200 application fee.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/rau/programmes"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#C9A84C] text-[#1B3A6B] font-semibold hover:brightness-110 transition"
          >
            Browse Programmes
          </Link>
          <Link
            href="/rau"
            className="inline-flex items-center px-8 py-4 rounded-full border border-[#C9A84C] text-[#C9A84C] font-semibold hover:bg-white/10 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
