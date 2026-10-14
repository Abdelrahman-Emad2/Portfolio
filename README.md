# Abdelrahman Emad: AI Portfolio

Next.js 15 (App Router), TypeScript, Tailwind CSS 3, Lucide React. No animation library; motion is limited to CSS transitions and respects `prefers-reduced-motion`.

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```
Requires Node.js 18.18+ (20 LTS recommended).

## Replace your content (all in `src/config/`)
| What | Where |
|---|---|
| Name, intro, about text, email, GitHub, LinkedIn | `site.ts` |
| Projects, links, images | `projects.ts` |
| Skills | `skills.ts` |
| Education, internships, certifications, coursework | `education.ts` |

- **Email / GitHub**: both are empty in `site.ts` and hidden until you fill them in. Use your GitHub *profile* URL (`https://github.com/<username>`), not the dashboard link.
- **CV**: put your PDF at `public/cv/Abdelrahman-Emad-CV.pdf`, then set `cv.available: true` in `site.ts`. The button stays hidden until then so it never downloads nothing.
- **Project links**: an empty string shows a disabled button. Fill in `demo`, `repo`, `notebook` when ready.
- **Images**: `public/images/*.svg` are labeled *illustrative*. Swap in real screenshots (PNG/WebP) and set `illustrative: false` in `projects.ts`.
- **Education dates**: set `dates` in `education.ts`. Empty arrays (internships, certifications...) stay hidden.
- Update `public/images/hero-workstation.svg` or replace it with your own image and edit the path in `Hero.tsx` and `layout.tsx`.

## Contact form
`POST /api/contact` sends mail through [Resend](https://resend.com). Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (see `.env.example`). Without them the form shows a clear "not configured" error and never claims success.

## Deploy to Vercel
1. Push to GitHub. 2. Import the repo at vercel.com/new. 3. Add the env vars above plus `NEXT_PUBLIC_SITE_URL` (your final URL). 4. Deploy.

## Verification checklist
- [ ] `npm run build` passes with no type or lint errors
- [ ] Nav highlights the active section; mobile menu opens, closes with Escape
- [ ] Theme toggle works and persists after reload
- [ ] `/projects` filters work
- [ ] Contact form: validation errors, error state (no env), success (with env)
- [ ] CV downloads after you add the file and enable it
- [ ] No horizontal scroll at 360px, 768px, 1280px
- [ ] Lighthouse run on the deployed URL
