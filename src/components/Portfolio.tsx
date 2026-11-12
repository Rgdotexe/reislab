"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Websites", "Graphics", "Videos"];

const projects = [
  {
    id: 1,
    title: "DarkVault BD",
    category: "Websites",
    image: null,
    link: "https://www.darkvaultbd.xyz/",
    description: "Live website",
  },
  {
    id: 2,
    title: "Classiva BD",
    category: "Websites",
    image: null,
    link: "https://classivabd.shop/",
    description: "Live e-commerce store",
  },
  {
    id: 3,
    title: "reislab Brand Poster",
    category: "Graphics",
    image: "/images/portfolio-reislab.jpg",
    link: null,
    description: "Brand identity & poster design",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-gold/70 text-sm tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-gold/40" />
              Selected Work
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Portfolio
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  active === cat
                    ? "bg-gold text-black"
                    : "border border-white/10 text-cream/60 hover:border-gold/40 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const CardContent = (
              <div className="group relative aspect-[4/3] rounded-2xl border border-white/10 bg-black-soft/50 overflow-hidden cursor-pointer hover:border-gold/30 transition-all">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black-soft to-black p-6 text-center">
                    <div className="text-gold text-3xl mb-3">✦</div>
                    <p className="text-cream/40 text-xs uppercase tracking-widest mb-2">
                      Live Website
                    </p>
                    <h3 className="font-serif text-xl text-cream">
                      {project.title}
                    </h3>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-gold text-xs tracking-widest uppercase mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-xl text-cream">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-cream/60 text-sm mt-1">
                        {project.description}
                      </p>
                    )}
                    {project.link && (
                      <p className="text-gold text-xs mt-2 underline">
                        Visit website →
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );

            return project.link ? (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CardContent}
              </a>
            ) : (
              <div key={project.id}>{CardContent}</div>
            );
          })}
        </div>

        <p className="text-center text-cream/40 text-sm mt-10">
          More projects will be added from the Admin Panel soon.
        </p>
      </div>
    </section>
  );
}
