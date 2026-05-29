# Kapil Badgujjar — Portfolio

Personal portfolio website built with **Next.js 16**, **Tailwind CSS v4**, **Three.js**, **shadcn-style components**, and **Motion** (Framer Motion v12).

Live URL (after Vercel deploy): _add your URL here_

---

## Tech stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4 + `tw-animate-css`
- **UI primitives:** shadcn-style components built on Radix Slot + `class-variance-authority`
- **Animations:** [`motion`](https://motion.dev) (v12 — successor to framer-motion)
- **3D background:** `three` + `@react-three/fiber` + `@react-three/drei` (animated particle sphere in the hero)
- **Icons:** [`lucide-react`](https://lucide.dev) for UI, [`react-icons`](https://react-icons.github.io/react-icons/) (Simple Icons + FA6) for brand logos
- **Fonts:** Plus Jakarta Sans (body), Space Grotesk (display), JetBrains Mono (mono)

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # metadata, fonts
│   ├── page.tsx          # composes all sections
│   └── globals.css       # theme tokens + utilities
├── components/
│   ├── ui/               # button, card, badge, input
│   ├── shared/           # section-heading, animated-section
│   ├── three/            # particle-field (hero 3D bg)
│   └── sections/         # navbar, hero, about, experience,
│                         #  skills, projects, achievements,
│                         #  contact, footer
└── lib/
    ├── data.ts           # ALL CONTENT lives here
    └── utils.ts          # cn() helper
public/
├── images/
│   └── profile.jpg       # hero + about photo
└── resume.pdf            # served at /resume.pdf
```

## Local development

```bash
# 1. install
npm install

# 2. (optional) copy env defaults
cp .env.local.example .env.local

# 3. run
npm run dev
# → http://localhost:3010   (set in package.json's dev script)
```

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_RESUME_URL` | URL the "Download Resume" button links to. Point this at an external file (e.g. a Google Drive direct-download link, or a Vercel-hosted PDF) if you don't want to commit the PDF. | `/resume.pdf` (served from `public/`) |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Submit URL for the Contact form (Formspree, Web3Forms, etc.). When unset, the form opens the user's mail client via `mailto:` instead. | empty |

The resume currently ships at `public/resume.pdf`. To use the Google Drive link from the old site instead, set:

```bash
NEXT_PUBLIC_RESUME_URL=https://drive.google.com/uc?export=download&id=1OdBeowxoGlnSKHDNlsELbZulwWcARFJK
```

## Updating content

All copy lives in [`src/lib/data.ts`](src/lib/data.ts). Edit one file to update:

- Personal info (name, summary, email, phone, location)
- Social links
- Experience entries (`experience`)
- Skill groups (`skillGroups`) and concept badges (`concepts`)
- Projects (`projects`) — set `featured: true` to make a card full-width
- Education (`education`) and achievements (`achievements`)
- Navbar links (`navLinks`)

To swap the profile photo, drop a new image at `public/images/profile.jpg` (square or portrait works best).

## Deploying to Vercel

1. **Push to GitHub.** From this folder:
   ```bash
   git add -A
   git commit -m "feat: initial portfolio in Next.js"
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. **Import on Vercel.** Go to <https://vercel.com/new> and select the repo. Defaults are correct (Framework: Next.js, Build: `next build`, Output: auto).
3. **Set env vars.** In the Vercel project settings → Environment Variables, add:
   - `NEXT_PUBLIC_RESUME_URL` (optional — only if you don't want to commit the PDF)
   - `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` (optional — needed if you want the form to actually submit)
4. **Deploy.** Vercel will build and give you a `*.vercel.app` URL. Add a custom domain in project settings if you want.

> The contact form uses a graceful fallback: if `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` isn't set, the Send button opens the user's mail client pre-filled with the form contents.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on port 3010 (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Run the production build locally |
| `npm run lint` | ESLint |

## License

Personal portfolio — content (text, photos, resume) © Kapil Badgujjar. The underlying code is yours to learn from or fork.
