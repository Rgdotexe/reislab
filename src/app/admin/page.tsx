export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-cream flex items-center justify-center p-8">
      <div className="max-w-xl text-center space-y-6">
        <div className="text-4xl text-gold">✦</div>
        <h1 className="font-serif text-4xl">Admin Panel</h1>
        <p className="text-cream/60 text-lg">
          This is the future control center for reislabbd.
        </p>

        <div className="bg-black-soft border border-white/10 rounded-2xl p-6 text-left space-y-4">
          <h2 className="text-gold font-medium">Coming next:</h2>
          <ul className="space-y-2 text-cream/70 text-sm">
            <li>• Secure login (only Roni & Shifat)</li>
            <li>• View & manage all contact form inquiries</li>
            <li>• Upload / edit Portfolio projects + YouTube links</li>
            <li>• Change WhatsApp number, email, Hero text</li>
            <li>• Manage service images without touching code</li>
          </ul>
        </div>

        <p className="text-cream/40 text-sm">
          Full Admin + Database + Auth will be added in the next update.
          <br />
          For now the public website is fully working with the new images & YouTube embeds.
        </p>

        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 border border-gold/40 text-gold rounded-full hover:bg-gold hover:text-black transition-colors"
        >
          ← Back to Website
        </a>
      </div>
    </div>
  );
}
