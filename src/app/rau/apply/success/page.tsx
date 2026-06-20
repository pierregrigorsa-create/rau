import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Received | RAU",
  description: "Your RAU application has been submitted successfully.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 text-center">
        {/* Checkmark icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-6">
          <svg
            className="w-10 h-10 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Application Received!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for applying to RAU. Your application fee has been paid
          successfully. We have received your application and will review it
          shortly.
        </p>

        <div className="bg-blue-50 rounded-xl p-5 mb-8 text-left space-y-2">
          <p className="text-sm font-medium text-blue-900">What happens next?</p>
          <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
            <li>A confirmation email has been sent to your email address.</li>
            <li>The Admissions Office will review your application within 10 working days.</li>
            <li>You will be notified of the outcome by email.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/rau/programmes"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
          >
            Browse more programmes
          </Link>
          <Link
            href="/rau"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-950 text-white font-medium text-sm hover:bg-blue-800 transition-colors"
          >
            Back to RAU Home
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Questions?{" "}
          <a href="mailto:admissions@rau.ac.za" className="text-blue-600 hover:underline">
            admissions@rau.ac.za
          </a>
        </p>
      </div>
    </main>
  );
}
