import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border-4 border-white bg-yellow-300 px-4 py-1 font-extrabold text-black shadow-[6px_6px_0_0_#000]">
          HIRING TOURNAMENT 2025
        </span>
        <h1 className="font-extrabold leading-[0.95] text-5xl md:text-7xl text-white drop-shadow-[6px_6px_0_#22d3ee]">
          Code. Compete. Get Hired.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90">
          A neo‑brutalist arena where top talent battles in live challenges. Win prizes, meet companies, and land your next role.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="group relative rounded-xl bg-lime-300 px-6 py-3 text-lg font-extrabold text-black border-4 border-black shadow-[6px_6px_0_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0_0_#000]">
            Register Now
          </button>
          <button className="rounded-xl bg-white px-6 py-3 text-lg font-extrabold text-black border-4 border-black shadow-[6px_6px_0_0_#000] hover:bg-yellow-200 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[3px_3px_0_0_#000]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
