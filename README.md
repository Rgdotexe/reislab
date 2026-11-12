# reislabbd — Premium Digital Creative Agency

Cinematic dark agency website built with Next.js + TypeScript + Tailwind CSS.

## Live Deployment (Recommended for iPhone / No PC)

### Fastest way to get a live Vercel link today

1. **Create a new GitHub repository**
   - Open GitHub app or github.com on your phone
   - Create a new **public** repository named `reislabbd` (or any name)
   - Do **not** add README / license

2. **Upload the project files**
   - Download the ZIP I give you
   - Unzip it on your phone (Files app)
   - In the GitHub repo page → click **Add file** → **Upload files**
   - Upload **everything inside** the `reislabbd` folder (package.json, src, public, etc.)
   - Commit the changes

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
   - Click **Add New Project**
   - Import the `reislabbd` repository
   - Keep all default settings
   - Click **Deploy**

4. Wait 1–2 minutes → you will get a live link like:
   `https://reislabbd.vercel.app`

You can later connect your own domain (reislab.com / reislabbd.com) in Vercel settings.

---

## Local Development (when you have a computer again)

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Project Structure

```
reislabbd/
├── public/
│   ├── images/          ← all service & portfolio images
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── admin/       ← placeholder admin page
│   ├── components/      ← Navbar, Hero, About, ServiceBlock, Portfolio, Contact, etc.
│   └── data/
│       └── services.ts  ← single source of truth for all 8 services
├── package.json
└── tailwind.config.ts
```

## WhatsApp

Floating button uses: **+880 1757-502706** (Reislab Business)

## Notes

- No public pricing (as per business rules)
- Web Development shows BDT 3,500/month maintenance
- Portfolio currently shows DarkVault BD, Classiva BD, and brand poster
- Full Admin Panel + Database coming in next phase
