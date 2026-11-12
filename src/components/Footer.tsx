export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            <span className="font-serif text-xl text-cream">reislab</span>
            <span className="text-gold">✦</span>
          </div>

          <p className="text-cream/40 text-sm text-center">
            © {new Date().getFullYear()} reislabbd. Uttara, Dhaka, Bangladesh.
            <br className="md:hidden" /> All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-cream/50">
            <a href="#services" className="hover:text-gold transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-gold transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
