import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="orbital-ring w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
          style={{ borderColor: "rgba(212,175,55,0.08)" }}
        />
        <div
          className="orbital-ring w-[650px] h-[650px] md:w-[900px] md:h-[900px]"
          style={{ borderColor: "rgba(212,175,55,0.05)" }}
        />
        <div
          className="orbital-ring w-[800px] h-[800px] md:w-[1100px] md:h-[1100px]"
          style={{ borderColor: "rgba(212,175,55,0.03)" }}
        />
        {/* Soft gold glow */}
        <div className="absolute w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 text-gold/80 text-sm tracking-widest uppercase">
            <span className="w-8 h-px bg-gold/50" />
            Digital Creative Agency
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-cream">
            Web
            <br />
            Development
          </h1>

          <p className="text-cream/60 text-lg max-w-md leading-relaxed">
            We build full-stack, front-end, back-end and landing-page
            experiences designed around your business.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="btn-gold inline-flex items-center px-7 py-3.5 bg-gold text-black font-medium rounded-full hover:bg-gold-light transition-colors"
            >
              Start a Project
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-7 py-3.5 border border-cream/20 text-cream rounded-full hover:border-gold/50 hover:text-gold transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right visual — animated website mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl border border-white/10 bg-black-soft/50 overflow-hidden gold-glow">
            <Image
              src="/images/web-dev-space.gif"
              alt="reislabbd web development showcase"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
              priority
            />
            {/* Soft overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent" />
      </div>
    </section>
  );
}
