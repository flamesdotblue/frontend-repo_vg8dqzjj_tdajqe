import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="inline-block rounded-lg border-4 border-white bg-white px-3 py-1 font-extrabold text-black shadow-[4px_4px_0_0_#000]">
              Hiring Tournament
            </h3>
            <p className="mt-3 text-white/70 max-w-lg">
              Built with a neo‑brutalist aesthetic. Push your limits, find your team, and ship your future.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a className="rounded-xl border-4 border-white bg-yellow-300 px-4 py-2 font-extrabold text-black shadow-[4px_4px_0_0_#000]" href="#">Guidelines</a>
            <a className="rounded-xl border-4 border-white bg-teal-300 px-4 py-2 font-extrabold text-black shadow-[4px_4px_0_0_#000]" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
