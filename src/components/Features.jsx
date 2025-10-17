import React from 'react';
import { Trophy, Users, Rocket, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: 'Elite Challenges',
    desc: 'Algo, full‑stack, and system design rounds crafted by industry judges.',
    color: 'bg-pink-300',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Meet Recruiters',
    desc: 'Direct access to hiring teams from top tech companies.',
    color: 'bg-teal-300',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Career Boost',
    desc: 'Portfolio‑worthy challenges and guaranteed feedback.',
    color: 'bg-yellow-300',
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'One Weekend',
    desc: 'Intense, high‑signal format. Perform, get noticed, get offers.',
    color: 'bg-lime-300',
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 inline-block rounded-xl border-4 border-black bg-cyan-200 px-4 py-2 font-extrabold shadow-[6px_6px_0_0_#000]">
          Why this tournament?
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group ${f.color} rounded-2xl border-4 border-black p-5 shadow-[8px_8px_0_0_#000] transition-transform hover:-translate-y-1`}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-4 border-black bg-white px-3 py-1 font-bold">
                {f.icon}
                <span>Feature</span>
              </div>
              <h3 className="text-xl font-extrabold">{f.title}</h3>
              <p className="mt-2 text-black/80 font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
