# Next.js Landing Page Devkit Market

A production-ready collection of 10 responsive Next.js landing page templates for SaaS, AI agents, developer tools, B2B lead generation, cybersecurity, finance, legal services, telehealth, medical spas, and longevity brands. Deploy the entire repository as one static website with a dedicated live URL for every landing page.

## Landing page templates

| # | Template | Live route | Primary keywords |
|---:|---|---|---|
| 1 | AI Multi-Agent Orchestration Platform | [`/ai-multi-agent-orchestration-platform/`](./ai-multi-agent-orchestration-platform/) | AI agent platform, multi-agent orchestration, autonomous AI agents |
| 2 | B2B Sales Funnel & Lead Generation | [`/b2b-sales-funnel-lead-generation/`](./b2b-sales-funnel-lead-generation/) | B2B lead generation, sales funnel, sales automation |
| 3 | Cybersecurity Compliance | [`/cybersecurity-compliance/`](./cybersecurity-compliance/) | SOC 2 compliance, ISO 27001, cybersecurity automation |
| 4 | Developer API & Infrastructure Tools | [`/developer-api-infrastructure-tools/`](./developer-api-infrastructure-tools/) | developer tools, API platform, cloud infrastructure |
| 5 | Fractional CFO & Financial Advisory | [`/fractional-cfo-financial-advisory/`](./fractional-cfo-financial-advisory/) | fractional CFO, financial advisory, business forecasting |
| 6 | Intellectual Property & Patent Law | [`/intellectual-property-patent-law-firms/`](./intellectual-property-patent-law-firms/) | patent law firm, intellectual property, trademark protection |
| 7 | Longevity & Biohacking DTC Brands | [`/longevity-biohacking-dtc-brands/`](./longevity-biohacking-dtc-brands/) | longevity supplements, biohacking, healthy aging |
| 8 | Medical Spa & Aesthetics Clinics | [`/medical-spa-and-aesthetics-clinics/`](./medical-spa-and-aesthetics-clinics/) | medical spa website, aesthetics clinic, skin treatment |
| 9 | SaaS Waitlist & Product Launch | [`/saas-waitlist-product-launch/`](./saas-waitlist-product-launch/) | SaaS waitlist, product launch, early access landing page |
| 10 | Telehealth & Concierge Medicine | [`/telehealth-concierge-medicin/`](./telehealth-concierge-medicin/) | telehealth platform, concierge medicine, virtual healthcare |

> The `telehealth-concierge-medicin` route preserves the existing repository folder name for stable deployments.

## Features

- Ten independently designed, conversion-focused landing pages
- One repository, one build command, and one hosting project
- Static HTML exports for fast delivery through a global CDN
- Responsive layouts for desktop, tablet, and mobile screens
- Unique page titles and descriptions for search engine optimization
- Accessible semantic headings, navigation, forms, and calls to action
- Interactive React components, animations, pricing sections, FAQs, and lead forms
- Folder-based URLs with direct-page refresh support
- Vercel configuration included and portable static output for other hosts

## Technology stack

- [Next.js](https://nextjs.org/) App Router
- React and TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Static export deployment
- npm workspaces

## Project architecture

Each template remains an independent Next.js workspace. During the root production build, every app is exported with its own `basePath` and copied into a matching folder inside `dist/`.

```text
10-Landing-page-devkit-market/
├── ai-multi-agent-orchestration-platform/
├── b2b-sales-funnel-lead-generation/
├── cybersecurity-compliance/
├── developer-api-infrastructure-tools/
├── fractional-cfo-financial-advisory/
├── intellectual-property-patent-law-firms/
├── longevity-biohacking-dtc-brands/
├── medical-spa-and-aesthetics-clinics/
├── saas-waitlist-product-launch/
├── telehealth-concierge-medicin/
├── scripts/build-all.mjs
├── site/
├── package.json
└── vercel.json
```

The generated deployment has this URL structure:

```text
https://your-domain.com/
https://your-domain.com/ai-multi-agent-orchestration-platform/
https://your-domain.com/b2b-sales-funnel-lead-generation/
https://your-domain.com/cybersecurity-compliance/
https://your-domain.com/developer-api-infrastructure-tools/
https://your-domain.com/fractional-cfo-financial-advisory/
https://your-domain.com/intellectual-property-patent-law-firms/
https://your-domain.com/longevity-biohacking-dtc-brands/
https://your-domain.com/medical-spa-and-aesthetics-clinics/
https://your-domain.com/saas-waitlist-product-launch/
https://your-domain.com/telehealth-concierge-medicin/
```

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm 10 or newer

### Install dependencies

```bash
npm install
```

### Build every landing page

```bash
npm run build
```

The command builds all 10 Next.js applications and creates a combined static website in `dist/`.

### Preview the production website locally

Use any static file server. For example:

```bash
python3 -m http.server 4173 --directory dist
```

Open `http://localhost:4173/` to browse the landing page directory.

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel as a new project.
3. Keep the repository root as the Vercel project root.
4. Deploy without overriding the repository settings.

The included [`vercel.json`](./vercel.json) configures:

- Build command: `npm run build`
- Output directory: `dist`
- Trailing-slash URLs for static folder routing

After deployment, the root URL displays a directory linking to all 10 live landing pages.

## Deploy to other static hosts

The generated `dist/` directory can also be deployed to Netlify, Cloudflare Pages, GitHub Pages, Amazon S3, or any server capable of hosting static HTML, CSS, JavaScript, fonts, and images.

Use these build settings:

| Setting | Value |
|---|---|
| Install command | `npm install` |
| Build command | `npm run build` |
| Publish directory | `dist` |

## SEO notes

Every landing page has a focused title, description, semantic heading structure, and industry-specific copy. Before launching a production brand, replace demo company names and content, then add:

- A verified canonical production URL
- Open Graph and social sharing images
- A domain-level `robots.txt` and XML sitemap
- Analytics and conversion tracking
- Real organization, product, service, FAQ, or local-business structured data where appropriate
- Production form handling and privacy disclosures

Avoid repeating keywords unnaturally. Search visibility is strongest when each page answers a distinct search intent with useful, original content.

### Suggested repository topics

`nextjs` · `react` · `typescript` · `tailwindcss` · `landing-page` · `landing-page-template` · `saas-template` · `website-template` · `static-site` · `vercel`

## Customization

Open the relevant workspace and update its `app/page.tsx`, components, global styles, images, and metadata. Keep the existing `basePath` in `next.config.ts` if you want the deployment URL to continue matching the workspace folder.

## License

Add the license that applies to your project before distributing or selling these templates.
