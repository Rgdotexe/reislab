import Image from "next/image";
import { Service } from "@/data/services";

interface ServiceBlockProps {
  service: Service;
}

export default function ServiceBlock({ service }: ServiceBlockProps) {
  const isLeft = service.layout === "left";

  return (
    <section
      id={service.slug}
      className="py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isLeft ? "" : "lg:[&>*:first-child]:order-2"
          }`}
        >
          {/* Image / Media area */}
          <div className="relative space-y-4">
            {/* Show image only if it exists */}
            {service.imageSrc && (
              <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-black-soft/60 overflow-hidden relative">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={service.imageSrc.endsWith(".gif")}
                />
              </div>
            )}

            {/* YouTube embeds (AI Video section) */}
            {service.youtubeIds && service.youtubeIds.length > 0 && (
              <div
                className={`grid gap-3 ${
                  service.imageSrc
                    ? "grid-cols-1 sm:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {service.youtubeIds.map((id) => (
                  <div
                    key={id}
                    className="aspect-video rounded-xl overflow-hidden border border-white/10"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?rel=0`}
                      title="AI Video example"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Fallback placeholder only if nothing else */}
            {!service.imageSrc &&
              (!service.youtubeIds || service.youtubeIds.length === 0) && (
                <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-black-soft/60 flex items-center justify-center">
                  <p className="text-cream/25 text-sm tracking-wide text-center px-8">
                    [{service.imagePlaceholder || "CMS Gallery"}]
                  </p>
                </div>
              )}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gold/70 text-sm tracking-widest uppercase">
              <span className="font-mono">
                {String(service.id).padStart(2, "0")}
              </span>
              <span className="w-6 h-px bg-gold/40" />
              <span>Service</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
              {service.title}
            </h2>

            <p className="text-cream/60 text-lg leading-relaxed max-w-lg">
              {service.description}
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-2">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="text-gold text-xs">✦</span>
                  <span className="text-cream/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Maintenance note if present */}
            {service.maintenanceNote && (
              <div className="mt-6 p-4 rounded-xl border border-gold/20 bg-gold/5">
                <p className="text-sm text-cream/70 leading-relaxed">
                  <span className="text-gold font-medium">
                    Ongoing Website Maintenance
                  </span>
                  <br />
                  {service.maintenanceNote.replace(
                    "Ongoing Website Maintenance: ",
                    ""
                  )}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4">
              <a
                href={service.ctaHref}
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors group"
              >
                <span className="border-b border-gold/40 group-hover:border-gold pb-0.5">
                  {service.cta}
                </span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
