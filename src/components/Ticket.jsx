import React from 'react';

export default function Ticket({ title, price, accent = '#22d3ee', verticalText = 'ADMIT ONE', bg = 'from-zinc-900 to-zinc-800' }) {
  return (
    <div
      className="relative mx-auto w-full max-w-xs shrink-0 snap-center"
      style={{ filter: 'drop-shadow(12px 12px 0 #000)' }}
    >
      {/* Premium glow backdrop */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[28px] blur-2xl"
        style={{ background: `radial-gradient(60% 60% at 50% 50%, ${accent}55, transparent 70%)` }}
      />

      {/* Ticket body */}
      <div className={`relative overflow-hidden rounded-2xl border-4 border-white bg-gradient-to-br ${bg}`}>
        {/* Perforation circles */}
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2">
          <div className="h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-black" />
        </div>
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
          <div className="h-6 w-6 translate-x-1/2 rounded-full border-4 border-white bg-black" />
        </div>

        <div className="flex text-white">
          {/* Content */}
          <div className="flex-1 p-5">
            <div className="inline-block rounded-lg border-4 border-black bg-yellow-300 px-3 py-1 text-xs font-extrabold text-black shadow-[4px_4px_0_0_#000]">
              LIMITED
            </div>
            <h3 className="mt-3 text-2xl font-extrabold text-white">{title}</h3>
            <p className="mt-1 text-white/70 text-sm font-medium">Access pass for the hiring tournament. Includes entry, scoreboard, and lounge.</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-extrabold text-white">${price}</span>
              <span className="mb-1 text-sm font-bold text-white/70">USD</span>
            </div>
            <button className="mt-4 w-full rounded-xl border-4 border-black bg-lime-300 px-4 py-2 text-center font-extrabold text-black shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000]">
              Get Ticket
            </button>
          </div>

          {/* Vertical strip */}
          <div
            className="relative flex w-10 items-center justify-center border-l-4 border-white"
            style={{ background: accent }}
          >
            <span className="select-none text-[10px] font-extrabold tracking-widest text-black [writing-mode:vertical-rl] rotate-180">
              {verticalText}
            </span>
          </div>
        </div>
      </div>

      {/* Edge glow */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-3xl"
        style={{ boxShadow: `0 0 80px ${accent}` }}
      />
    </div>
  );
}
