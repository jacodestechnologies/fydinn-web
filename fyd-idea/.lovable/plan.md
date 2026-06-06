## FirstDate Landing Page — Build Plan

Build a single-page marketing site for FirstDate using the selected "Modern Romantic Editorial" direction as the structural and visual reference.

### 1. Scaffold

- Create a `web_app:firstdate` artifact (TanStack Start template).
- Add Instrument Sans + Inter via Google Fonts in the root document.

### 2. Design tokens

Port the prototype's tokens verbatim into `src/styles.css` (or equivalent) and `tailwind.config`:
- `--color-brand: #e11d48`, `--color-brand-light: #fb7185`
- `--color-surface: #fdfcfc`, `--color-surface-muted: #f4f4f5`
- `--color-text-main: #18181b`, `--color-text-muted: #52525b`
- Body font: Inter; Heading font: Instrument Sans

### 3. Page composition (`/` route)

Match the prototype's section order and structure exactly:

1. **Sticky nav** — logo dot + "FirstDate", links (Features, How it works, FAQ), rose "Get Started" pill.
2. **Hero** — large semibold tagline, supporting paragraph, two CTAs (rose "Sign Up Now" with plus-icon chip + outline "Learn More"). Soft rose blur in top-right.
3. **Features** — 4-column grid (Smart Matching, Verified Profiles, Secure Messaging, Event Curation) with rose-tinted icon tiles.
4. **How It Works** — centered intro + 4 numbered circular badges in a row.
5. **Testimonials** — 3 cards (Elena, Marcus, Sarah), middle card offset down. Generated avatar images.
6. **FAQ** — accordion using Radix-based shadcn `Accordion` (replacing the prototype's hover-only details so it actually works on click and is keyboard accessible).
7. **Final CTA** — full-width rose gradient card with "Create Your Profile" button.
8. **Footer** — brand + tagline, Support links (Privacy, Terms, Cookies), Newsletter input + Join button, social icons row.

### 4. Componentization

Split into focused components under `src/components/landing/`:
`SiteNav`, `Hero`, `Features`, `HowItWorks`, `Testimonials`, `FAQ`, `FinalCTA`, `SiteFooter`.

### 5. Images

Generate 3 testimonial avatars via `imagegen` (per prototype `data-prompt` annotations) and import them as ES6 assets. No hero photo per the chosen direction.

### 6. Legal pages

Add lightweight routes for `/terms`, `/privacy`, `/cookies` with placeholder copy, and link them from nav-free footer Support column. Keeps Brief's legal requirements satisfied without bloating the home page.

### 7. Animation & polish

- Subtle hover scale on CTAs and feature cards (`hover:-translate-y-0.5`, ring shifts).
- Smooth scroll for in-page nav anchors.
- Respect `prefers-reduced-motion`.

### 8. SEO & a11y

- `<title>` "FirstDate — Where Real Connections Begin" and a <160-char meta description in the root head.
- Single H1, semantic landmarks (`header`, `main`, `section`, `footer`), alt text on avatars, focus-visible rings on all interactive elements, 44px+ tap targets.

### Out of scope

- No backend, auth, or real newsletter submission (UI only).
- No app-store deep links (CTAs are placeholders).
- No carousel JS — testimonials render as a 3-card grid as in the prototype.
