export default function LoveFlamePrivacyPolicy() {
  const lastUpdated = "29 October 2026";

  return (
    <main className="min-h-screen bg-[#F8F7F2] px-5 py-10 text-black sm:px-10">
      <article className="mx-auto max-w-4xl">
        <a
          href="/privacy-policy"
          className="inline-block rounded-full border-[3px] border-black
            bg-white px-5 py-2 font-bold
            shadow-[3px_3px_0_#000] hover:translate-y-0.5"
        >
          ← All policies
        </a>

        <header
          className="mt-8 rounded-[28px] border-4 border-black
          bg-[#F4C95D] p-7 shadow-[7px_7px_0_#000] sm:p-10"
        >
          <span className="text-5xl">❤️‍🔥</span>

          <h1 className="mt-5 text-4xl font-black sm:text-5xl">Love Flame</h1>

          <p className="mt-3 text-xl font-bold">Privacy Policy</p>

          <p className="mt-4 text-sm font-semibold">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="mt-10 space-y-6">
          <section
            className="rounded-2xl border-[3px] border-black
            bg-white p-6 shadow-[4px_4px_0_#000]"
          >
            <h2 className="text-2xl font-black">1. About the app</h2>
            <p className="mt-3 leading-7">
              Love Flames is an entertainment application that lets users enter
              two names and calculate a result using the classic FLAMES game.
            </p>
          </section>

          <section
            className="rounded-2xl border-[3px] border-black
            bg-[#D9C7FF] p-6 shadow-[4px_4px_0_#000]"
          >
            <h2 className="text-2xl font-black">2. Information We Collect</h2>
            <p className="mt-3 leading-7">
              Love Flame does not collect or store the names entered by users.
              The names are processed locally on the user's device to calculate
              the FLAMES result and are not transmitted to our servers. The app
              does not require users to create an account or provide personal
              information to use its core FLAMES feature.
            </p>

            {/* Verify this statement against your actual app code. */}
            <p className="mt-3 leading-7">
              If the app processes names locally and does not transmit or save
              them, state that clearly here. If the app stores information or
              sends it to a server, disclose what is collected, why it is used,
              and how it is handled.
            </p>
          </section>

          <section
            className="rounded-2xl border-[3px] border-black
            bg-[#72D8C6] p-6 shadow-[4px_4px_0_#000]"
          >
            <h2 className="text-2xl font-black">3. Data sharing</h2>
            <p className="mt-3 leading-7">
              Love Flame does not share the names entered by users with third
              parties.
            </p>
          </section>

          <section
            className="rounded-2xl border-[3px] border-black
            bg-[#D9C7FF] p-6 shadow-[4px_4px_0_#000]"
          >
            <h2 className="text-2xl font-black">
              4. Data Storage and Security
            </h2>
            <p className="mt-3 leading-7">
              The names entered for a FLAMES calculation are processed locally
              and are not saved by the app. No server-side storage is used for
              this feature.
            </p>
          </section>

          <section
            className="rounded-2xl border-[3px] border-black
            bg-white p-6 shadow-[4px_4px_0_#000]"
          >
            <h2 className="text-2xl font-black">4. Children&apos;s privacy</h2>
            <p className="mt-3 leading-7">
              Love Flame is intended for entertainment purposes. The app does
              not knowingly collect personal information from children.
            </p>
          </section>

          <section
            className="rounded-2xl border-[3px] border-black
            bg-[#F4C95D] p-6 shadow-[4px_4px_0_#000]"
          >
            <h2 className="text-2xl font-black">5. Changes to this policy</h2>
            <p className="mt-3 leading-7">
              This Privacy Policy may be updated if the app's features or data
              practices change. Any updates will be published on this page with
              a revised date.
            </p>
          </section>

          <section
            className="rounded-2xl border-[3px] border-black
            bg-[#D9C7FF] p-6 shadow-[4px_4px_0_#000]"
          >
            <h2 className="text-2xl font-black">6. Contact</h2>
            <p className="mt-3 leading-7">For privacy questions, contact:</p>
            <a
              href="mailto:YOUR_SUPPORT_EMAIL"
              className="mt-2 inline-block break-all font-black underline
                decoration-2 underline-offset-4"
            >
              jonesjtechie@gmail.com
            </a>
          </section>
        </div>

        <footer
          className="mt-12 border-t-[3px] border-black py-6
          text-center text-sm font-bold"
        >
          Love Flame · Made for fun ❤️
        </footer>
      </article>
    </main>
  );
}
