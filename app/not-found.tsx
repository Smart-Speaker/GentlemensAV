import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center px-6">
      <div className="relative w-full max-w-2xl">
        {/* Glow */}
        <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-yellow-400/10 via-fuchsia-500/10 to-cyan-400/10 blur-2xl" />

        <div className="rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-10 shadow-xl">
          <p className="text-sm uppercase tracking-widest text-gray-400">Error</p>

          <h1 className="mt-2 text-7xl font-extrabold leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-300">
            404
          </h1>

          <h2 className="mt-4 text-2xl font-semibold">
            This page hasn’t been generated (yet)
          </h2>

          <p className="mt-3 text-gray-400">
            The link you followed may be broken or the page might be under construction.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition"
            >
              ← Back to Home
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Optional: quick search box (no real search logic, just UI) */}
          <div className="mt-6">
            <div className="relative">
              <input
                placeholder="Search the site…"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-yellow-400/60"
              />
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                ⌘K
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Tip: add a real search later (e.g., site search or Cmd+K command palette).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
