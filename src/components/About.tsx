export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gold/70 text-sm tracking-widest uppercase">
              <span className="w-8 h-px bg-gold/40" />
              About Us
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
              A cinematic
              <br />
              creative studio
              <br />
              from Dhaka
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed">
              Founded by <span className="text-cream">Roni Hassan</span> and
              co-founded by{" "}
              <span className="text-cream">Mohammad Shifat</span>, reislabbd is
              a digital creative agency based in Uttara, Dhaka, Bangladesh.
            </p>
            <p className="text-cream/50 leading-relaxed">
              We craft premium digital experiences — from full-stack websites
              and brand visuals to high-retention video, AI-generated content,
              and data-driven campaigns. Every project is treated like a
              cinematic production: intentional, refined, and built to perform.
            </p>
            <p className="text-cream/50 leading-relaxed">
              Roni is a self-driven digital creative and web developer who
              combines human creativity with AI-assisted tools. His work spans
              web development, graphic design, digital branding, e-commerce,
              and business research — always focused on turning ideas into
              functional digital experiences.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-full border border-gold/10 flex items-center justify-center relative">
              <div className="absolute inset-8 rounded-full border border-gold/5" />
              <div className="absolute inset-16 rounded-full border border-gold/5" />
              <div className="text-center space-y-2">
                <p className="font-serif text-3xl text-cream">reislab</p>
                <p className="text-gold text-2xl">✦</p>
                <p className="text-cream/40 text-sm tracking-widest uppercase">
                  Since 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
