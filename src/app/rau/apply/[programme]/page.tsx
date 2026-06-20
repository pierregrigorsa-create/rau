"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

const PROGRAMME_LABELS: Record<string, string> = {
  "bsc-computer-science": "BSc Computer Science",
  "bsc-mathematics": "BSc Mathematics",
  "bsc-physics": "BSc Physics",
  "beng-electrical": "BEng Electrical Engineering",
  "bcom-accounting": "BCom Accounting",
  "bcom-economics": "BCom Economics",
  "bba-management": "BBA Management",
  "ba-psychology": "BA Psychology",
  "ba-sociology": "BA Sociology",
  "ba-communication": "BA Communication Science",
  llb: "LLB Bachelor of Laws",
  "bcom-law": "BCom Law",
};

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  idNumber: string;
  dateOfBirth: string;
  highSchool: string;
  matricYear: string;
  subjects: string;
}

export default function ApplyPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const programme = params.programme as string;
  const cancelled = searchParams.get("cancelled") === "1";

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idNumber: "",
    dateOfBirth: "",
    highSchool: "",
    matricYear: "",
    subjects: "",
  });
  const [loading, setLoading] = useState(false);
  const [payfastData, setPayfastData] = useState<{
    actionUrl: string;
    fields: Record<string, string>;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const programmeLabel =
    PROGRAMME_LABELS[programme] ?? programme.replace(/-/g, " ").toUpperCase();

  // When we have payfast data, auto-submit the hidden form
  useEffect(() => {
    if (payfastData) {
      const form = document.getElementById("payfast-form") as HTMLFormElement | null;
      form?.submit();
    }
  }, [payfastData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/rau/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, programme }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setPayfastData(data);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!PROGRAMME_LABELS[programme]) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Programme not found
          </h1>
          <Link href="/rau/programmes" className="text-blue-600 hover:underline">
            Browse programmes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Hidden PayFast form — submitted programmatically */}
      {payfastData && (
        <form
          id="payfast-form"
          method="POST"
          action={payfastData.actionUrl}
          className="hidden"
        >
          {Object.entries(payfastData.fields).map(([name, value]) => (
            <input key={name} type="hidden" name={name} value={value} />
          ))}
        </form>
      )}

      <div className="max-w-2xl mx-auto">
        <Link
          href="/rau/programmes"
          className="text-blue-600 hover:underline text-sm mb-6 inline-block"
        >
          ← Back to programmes
        </Link>

        {cancelled && (
          <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
            Your payment was cancelled. You can try again below.
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
              2026 Application
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mt-3">
              {programmeLabel}
            </h1>
            <p className="text-gray-500 mt-1 text-sm">
              Application fee: <strong>R200</strong> (non-refundable) — paid securely via PayFast.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal details */}
            <fieldset>
              <legend className="text-sm font-semibold text-gray-700 mb-3">
                Personal Details
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1" htmlFor="firstName">
                    First name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1" htmlFor="lastName">
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1" htmlFor="idNumber">
                    SA ID number *
                  </label>
                  <input
                    id="idNumber"
                    name="idNumber"
                    required
                    maxLength={13}
                    value={form.idNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1" htmlFor="dateOfBirth">
                    Date of birth *
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    required
                    value={form.dateOfBirth}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </fieldset>

            {/* Contact */}
            <fieldset>
              <legend className="text-sm font-semibold text-gray-700 mb-3">
                Contact Details
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1" htmlFor="email">
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1" htmlFor="phone">
                    Phone number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </fieldset>

            {/* Academic */}
            <fieldset>
              <legend className="text-sm font-semibold text-gray-700 mb-3">
                Academic History
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1" htmlFor="highSchool">
                    High school name *
                  </label>
                  <input
                    id="highSchool"
                    name="highSchool"
                    required
                    value={form.highSchool}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1" htmlFor="matricYear">
                    Matric year *
                  </label>
                  <input
                    id="matricYear"
                    name="matricYear"
                    type="number"
                    min="2000"
                    max="2026"
                    required
                    value={form.matricYear}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-600 mb-1" htmlFor="subjects">
                  Matric subjects & symbols (e.g. Mathematics 85%, English 72%)
                </label>
                <textarea
                  id="subjects"
                  name="subjects"
                  rows={3}
                  value={form.subjects}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </fieldset>

            {error && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-950 text-white font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60"
            >
              {loading ? "Processing…" : "Continue to Payment (R200)"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              You will be redirected to PayFast to complete your payment securely.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
