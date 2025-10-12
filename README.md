# CRWD Marketing Landing Page

> Next.js 14 landing page for CRWD - The platform that connects people with the best venues in town.

[![CI](https://github.com/your-org/crwd-marketing/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/crwd-marketing/actions/workflows/ci.yml)

## 🚀 Features

- **Next.js 14** with App Router, TypeScript, and Tailwind CSS
- **Dual landing pages**: User waitlist and Venue partners
- **Lead collection** with Supabase database
- **Email marketing** via Brevo with double opt-in
- **Anti-spam**: Rate limiting + honeypot protection
- **SEO optimized**: Metadata, OG images, sitemap, robots.txt
- **GDPR compliant**: Privacy policy, cookie policy, consent management
- **Dark theme** inspired by modern SaaS designs
- **Fully responsive** mobile-first design
- **CI/CD** with GitHub Actions and Vercel

## 📋 Prerequisites

- Node.js 18+ or 20+
- pnpm 8+
- Supabase account (free tier works)
- Brevo account (free tier works)
- Vercel account (optional, for deployment)

## 🛠️ Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-org/crwd-marketing.git
cd crwd-marketing
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
# Environment
NEXT_PUBLIC_ENV=dev

# Brevo API (get from https://app.brevo.com/settings/keys/api)
BREVO_API_KEY=your_brevo_api_key_here
BREVO_LIST_ID_USERS=1
BREVO_LIST_ID_VENUES=2

# Supabase (get from https://app.supabase.com/project/_/settings/api)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE=your_service_role_key_here

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=crwd.ro
```

**Important**: Never commit `.env.local` to git. It's already in `.gitignore`.

### 4. Set up Supabase database

1. Create a new project in [Supabase](https://app.supabase.com)
2. Run the migration:

```bash
# Copy the SQL from supabase/migrations/001_initial_schema.sql
# Go to Supabase dashboard → SQL Editor
# Paste and execute the migration
```

Or use the Supabase CLI:

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Run migration
supabase db push
```

### 5. Set up Brevo

1. Create account at [Brevo](https://app.brevo.com)
2. Create two contact lists:
   - **Users Waitlist** - for end users
   - **Venues Waitlist** - for venue partners
3. Get list IDs from Contacts → Lists
4. Get API key from Settings → API Keys
5. (Optional) Set up double opt-in automation:
   - Automation → Create workflow → Double opt-in
   - Configure confirmation email template

### 6. Start development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
crwd-marketing/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI
├── public/
│   ├── images/                 # Images, mockups, OG image
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── lead/
│   │   │   │   ├── user/route.ts      # User lead API
│   │   │   │   └── venue/route.ts     # Venue lead API
│   │   │   └── contact/route.ts       # Contact form API
│   │   ├── parteneri/
│   │   │   └── page.tsx               # Partners landing
│   │   ├── contact/
│   │   │   └── page.tsx               # Contact page
│   │   ├── politica-confidentialitate/
│   │   │   └── page.tsx               # Privacy policy
│   │   ├── termeni/
│   │   │   └── page.tsx               # Terms & conditions
│   │   ├── cookies/
│   │   │   └── page.tsx               # Cookie policy
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Home page
│   │   ├── globals.css                # Global styles
│   │   ├── sitemap.ts                 # Dynamic sitemap
│   │   └── opengraph-image.tsx        # OG image generator
│   ├── components/
│   │   ├── BenefitCard.tsx
│   │   ├── CTASection.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── LeadFormUser.tsx           # User signup form
│   │   ├── LeadFormVenue.tsx          # Venue application form
│   │   ├── LogoWall.tsx
│   │   └── Navbar.tsx
│   └── lib/
│       ├── brevo.ts                   # Brevo API wrapper
│       ├── rateLimit.ts               # Rate limiting
│       ├── supabase.ts                # Supabase client
│       └── validators.ts              # Zod schemas
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql     # Database schema
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🧪 Testing

### Run linter

```bash
pnpm lint
```

### Run type checking

```bash
pnpm typecheck
```

### Build for production

```bash
pnpm build
```

### Start production server

```bash
pnpm start
```

## 🚢 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`
   - Set for Production, Preview, and Development
4. Deploy!

### Custom domain

1. Add domain in Vercel: Project Settings → Domains
2. Configure DNS:
   - Type: `A` Record
   - Name: `@` (or `www`)
   - Value: `76.76.21.21` (Vercel IP)
   - Or use CNAME: `cname.vercel-dns.com`

### Environment variable checklist

Production environment variables:

- ✅ `NEXT_PUBLIC_ENV=production`
- ✅ `BREVO_API_KEY`
- ✅ `BREVO_LIST_ID_USERS`
- ✅ `BREVO_LIST_ID_VENUES`
- ✅ `SUPABASE_URL`
- ✅ `SUPABASE_ANON_KEY`
- ✅ `SUPABASE_SERVICE_ROLE` (Production only, never expose on client!)
- ✅ `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)

## 🔒 Security

### Best Practices

1. **Never commit secrets** - Use `.env.local` and Vercel env vars
2. **Service role key** - Only use server-side, never expose to client
3. **Rate limiting** - Protects against spam (10 req/min per IP)
4. **Honeypot fields** - Catches bots silently
5. **Input validation** - Zod schemas validate all inputs
6. **RLS enabled** - Supabase tables have Row Level Security
7. **HTTPS only** - Enforced by Vercel

### GDPR Compliance

- ✅ Cookie consent (implicit via usage)
- ✅ Privacy policy
- ✅ Terms & conditions
- ✅ Double opt-in for emails (Brevo)
- ✅ Right to deletion (contact privacy@crwd.ro)
- ✅ Data retention policy
- ✅ Explicit consent checkbox on forms

## 📊 Analytics

### Plausible Analytics (Recommended)

Add to `.env.local`:

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=crwd.ro
```

Add script to `app/layout.tsx`:

```tsx
<Script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" />
```

### Google Analytics 4 (Alternative)

Requires cookie consent banner. See [Next.js Analytics docs](https://nextjs.org/docs/app/building-your-application/optimizing/analytics).

## 🐛 Troubleshooting

### Build fails with "Cannot find module..."

```bash
pnpm install --frozen-lockfile
```

### Supabase RLS errors

Make sure you're using `service_role` key in API routes, not `anon` key.

### Brevo 409 errors

This is normal - it means contact already exists. The API handles it gracefully.

### Rate limit too strict in dev

Edit `src/lib/rateLimit.ts` and increase `MAX_REQUESTS` or `WINDOW_MS`.

### TypeScript errors on build

```bash
pnpm typecheck
```

Fix all errors before deploying.

## 📝 Content Updates

### Update copy

Edit content directly in:
- `src/app/page.tsx` - Home page
- `src/app/parteneri/page.tsx` - Partners page
- `src/app/contact/page.tsx` - Contact page

### Add FAQ items

Edit the `faqItems` array in `src/app/page.tsx`.

### Change benefits

Edit the `benefits` array in respective page files.

### Update legal pages

Edit:
- `src/app/politica-confidentialitate/page.tsx`
- `src/app/termeni/page.tsx`
- `src/app/cookies/page.tsx`

## 🔄 Database Migrations

### Create new migration

```bash
# Create file: supabase/migrations/002_your_migration.sql
# Write SQL
# Push to Supabase
supabase db push
```

### Rollback (not recommended in production)

```bash
supabase db reset
```

## 📈 Performance

### Lighthouse Score Target

- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

### Optimization Tips

1. Use `next/image` for all images
2. Lazy load below-the-fold content
3. Minimize JavaScript bundles
4. Enable Vercel Analytics for real monitoring

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Branching Strategy

- `main` - Production (auto-deploys to crwd.ro)
- `dev` - Staging (auto-deploys to dev.crwd.ro)
- `feature/*` - Feature branches

## 📞 Support

- **Email**: hello@crwd.ro
- **Issues**: [GitHub Issues](https://github.com/your-org/crwd-marketing/issues)

## 📄 License

Proprietary - All rights reserved by CRWD.

---

Made with ❤️ by the CRWD team

