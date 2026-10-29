"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const [selectedApp, setSelectedApp] = useState("");

  function handleAppChange(value: string) {
    setSelectedApp(value);

    if (value) {
      router.push(`/privacy-policy/${value}`);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F7F2] px-5 py-10 text-black sm:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-10 flex items-center justify-between gap-4">
          <a href="/" className="text-xl font-black tracking-tight">
            JONES J<span className="text-violet-600">.</span>
          </a>

          <a
            href="/"
            className="rounded-full border-[3px] border-black bg-[#F5E85B]
            px-5 py-2 font-bold shadow-[0_4px_0_#000]
            transition-transform hover:translate-y-1 hover:shadow-none"
          >
            ← Home
          </a>
        </header>

        {/* Hero */}
        <section
          className="rounded-[28px] border-4 border-black
          bg-[#F4C95D] p-6 shadow-[8px_8px_0_#000] sm:p-12"
        >
          <span
            className="inline-block rounded-full border-2 border-black
            bg-white px-4 py-2 text-sm font-black"
          >
            LEGAL & PRIVACY
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            Privacy
            <br />
            <span className="text-violet-600">Policy.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed">
            Your privacy matters. Select an application below to read its
            privacy policy and understand how it handles your data.
          </p>

          {/* App selector */}
          <div
            className="mt-9 max-w-xl rounded-2xl border-[3px] border-black
            bg-white p-5 shadow-[5px_5px_0_#000]"
          >
            <label
              htmlFor="app-selector"
              className="mb-3 block text-sm font-black uppercase tracking-wide"
            >
              Select an application
            </label>

            <select
              id="app-selector"
              value={selectedApp}
              onChange={(event) => handleAppChange(event.target.value)}
              className="w-full rounded-xl border-[3px] border-black
                bg-[#E3D3FF] px-4 py-4 font-bold outline-none
                focus:ring-4 focus:ring-violet-300"
            >
              <option value="">Choose your app...</option>
              <option value="love-flame">❤️ Love Flame</option>
            </select>

            <p className="mt-3 text-sm font-medium text-gray-600">
              Choose an app to view its individual privacy policy.
            </p>
          </div>
        </section>

        {/* Info cards */}
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div
            className="rounded-2xl border-[3px] border-black
            bg-[#D9C7FF] p-6 shadow-[5px_5px_0_#000]"
          >
            <span className="text-3xl">🔐</span>
            <h2 className="mt-4 text-2xl font-black">Your Privacy</h2>
            <p className="mt-2 leading-relaxed">
              Find out what information each application uses and how it is
              handled.
            </p>
          </div>

          <div
            className="rounded-2xl border-[3px] border-black
            bg-[#72D8C6] p-6 shadow-[5px_5px_0_#000]"
          >
            <span className="text-3xl">📬</span>
            <h2 className="mt-4 text-2xl font-black">Contact & Support</h2>
            <p className="mt-2 leading-relaxed">
              Have a privacy-related question? Contact me through the support
              details provided in the relevant policy.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="mt-12 border-t-[3px] border-black py-6
          text-center text-sm font-bold"
        >
          © {new Date().getFullYear()} Jones J. Built with care.
        </footer>
      </div>
    </main>
  );
}
