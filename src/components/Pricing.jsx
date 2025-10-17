import React from 'react';
import Ticket from './Ticket';

export default function Pricing() {
  return (
    <section className="relative bg-black py-16">
      {/* Section ambient glow to lift the stack */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(34,211,238,0.25) 0%, rgba(250,204,21,0.18) 40%, transparent 70%)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="mb-10 inline-block rounded-xl border-4 border-white bg-white px-4 py-2 font-extrabold text-black shadow-[6px_6px_0_0_#000]">
          Tickets & Pricing
        </div>
        <p className="mb-8 max-w-2xl text-white/80 font-medium">
          Choose your pass. All tiers include arena access, live scoreboard, and recruiter lounge.
        </p>

        {/* Mobile: horizontal scroll */}
        <div className="no-scrollbar -mx-2 flex snap-x gap-6 overflow-x-auto px-2 md:hidden">
          <Ticket
            title="Early Bird"
            price={20}
            accent="#22d3ee"
            verticalText="EARLY • ADMIT ONE"
            bg="from-zinc-900 to-cyan-950"
          />
          <Ticket
            title="Pro Pass"
            price={49}
            accent="#facc15"
            verticalText="PRO • ADMIT ONE"
            bg="from-zinc-900 to-yellow-950"
          />
          <Ticket
            title="Team Pack"
            price={99}
            accent="#fb7185"
            verticalText="TEAM • ADMIT ONE"
            bg="from-zinc-900 to-rose-950"
          />
        </div>

        {/* Desktop/Tablet: curved, fanned trio. Hover keeps curvature and moves further along the arc */}
        <div className="relative mt-8 hidden h-[520px] w-full max-w-6xl md:mx-auto md:block">
          <div className="group absolute inset-0">
            {/* Center ticket */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rotate-0 transition-transform duration-500 ease-out">
              <Ticket
                title="Pro Pass"
                price={49}
                accent="#facc15"
                verticalText="PRO • ADMIT ONE"
                bg="from-zinc-900 to-yellow-950"
              />
            </div>

            {/* Left ticket (peeking, curved) */}
            <div className="absolute top-1/2 z-10 -translate-y-1/2 left-[calc(50%-10rem)] rotate-[-14deg] transition-transform duration-500 ease-out group-hover:left-[calc(50%-24rem)] group-hover:rotate-[-16deg]">
              <Ticket
                title="Early Bird"
                price={20}
                accent="#22d3ee"
                verticalText="EARLY • ADMIT ONE"
                bg="from-zinc-900 to-cyan-950"
              />
            </div>

            {/* Right ticket (peeking, curved) */}
            <div className="absolute top-1/2 z-10 -translate-y-1/2 left-[calc(50%+10rem)] rotate-[14deg] transition-transform duration-500 ease-out group-hover:left-[calc(50%+24rem)] group-hover:rotate-[16deg]">
              <Ticket
                title="Team Pack"
                price={99}
                accent="#fb7185"
                verticalText="TEAM • ADMIT ONE"
                bg="from-zinc-900 to-rose-950"
              />
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm font-bold text-white/70">
          Hover over the ticket stack to fan them out along the curve.
        </p>
      </div>
    </section>
  );
}
