import React from 'react';
import Ticket from './Ticket';

export default function Pricing() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 inline-block rounded-xl border-4 border-black bg-rose-300 px-4 py-2 font-extrabold shadow-[6px_6px_0_0_#000]">
          Tickets & Pricing
        </div>
        <p className="mb-8 max-w-2xl text-black/80 font-medium">
          Choose your pass. All tiers include arena access, live scoreboard, and recruiter lounge. The vibe is neo‑brutalist — the opportunities are real.
        </p>

        {/* Row of tickets */}
        <div className="no-scrollbar -mx-2 flex snap-x gap-6 overflow-x-auto px-2 md:justify-center">
          <Ticket
            title="Early Bird"
            price={20}
            accent="#22d3ee"
            verticalText="EARLY • ADMIT ONE"
            bg="from-white to-cyan-100"
          />
          <Ticket
            title="Pro Pass"
            price={49}
            accent="#facc15"
            verticalText="PRO • ADMIT ONE"
            bg="from-white to-yellow-100"
          />
          <Ticket
            title="Team Pack"
            price={99}
            accent="#fb7185"
            verticalText="TEAM • ADMIT ONE"
            bg="from-white to-rose-100"
          />
        </div>

        <p className="mt-8 text-sm font-bold text-black/60">
          The buttons are decorative for this demo.
        </p>
      </div>
    </section>
  );
}
