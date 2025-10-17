import React from 'react';

export default function HowItWorks() {
  return (
    <section className="relative bg-black py-16">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="mb-10 inline-block rounded-xl border-4 border-white bg-white px-4 py-2 font-extrabold text-black shadow-[6px_6px_0_0_#000]">
          How it works
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              step: '1',
              title: 'Apply',
              text: 'Pick your track and submit a quick profile. No fluff, just signal.',
            },
            {
              step: '2',
              title: 'Compete',
              text: 'Live rounds + async tasks. Scoreboards, shout‑outs, and vibes.',
            },
            {
              step: '3',
              title: 'Get Hired',
              text: 'Top performers meet teams instantly. Offers follow fast.',
            },
          ].map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border-4 border-white bg-[#0b0b0b] p-6 shadow-[8px_8px_0_0_#000]"
            >
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-xl border-4 border-white bg-yellow-300 font-extrabold text-black shadow-[6px_6px_0_0_#000]">
                {item.step}
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-white">{item.title}</h3>
              <p className="mt-2 text-white/80 font-medium">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
