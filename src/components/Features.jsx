import React from 'react';
import { Trophy, Users, Rocket, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: 'Elite Challenges',
    desc: 'Algo, full‑stack, and system design rounds crafted by industry judges.',
    color: 'from-fuchsia-500/20 to-fuchsia-500/5',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Meet Recruiters',
    desc: 'Direct access to hiring teams from top tech companies.',
    color: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Career Boost',
    desc: 'Portfolio‑worthy challenges and guaranteed feedback.',
    color: 'from-yellow-400/20 to-yellow-400/5',
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'One Weekend',
    desc: 'Intense, high‑signal format. Perform, get noticed, get offers.',
    color: 'from-lime-400/20 to-lime-400/5',
  },
];

export default function Features() {
  return (
    <section className="relative bg-black py-16">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="mb-10 inline-block rounded-xl border-4 border-white bg-white px-4 py-2 font-extrabold text-black shadow-[6px_6px_0_0_#000]">
          Why this tournament?
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group rounded-2xl border-4 border-white p-5 shadow-[8px_8px_0_0_#000] transition-transform hover:-translate-y-1 bg-gradient-to-br ${f.color}`}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-4 border-white bg-black px-3 py-1 font-bold">
                {f.icon}
                <span>Feature</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">{f.title}</h3>
              <p className="mt-2 text-white/80 font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
