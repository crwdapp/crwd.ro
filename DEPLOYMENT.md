# CRWD Deployment Guide

## Pre-deployment Checklist

### 1. Supabase Setup

- [ ] Create Supabase project
- [ ] Run migration from `supabase/migrations/001_initial_schema.sql`
- [ ] Verify RLS policies are active
- [ ] Copy `SUPABASE_URL` and `SUPABASE_ANON_KEY`
- [ ] Copy `SUPABASE_SERVICE_ROLE` (keep secret!)
- [ ] Test insert via SQL editor

### 2. Brevo Setup

- [ ] Create Brevo account
- [ ] Create contact list: "Users Waitlist"
- [ ] Create contact list: "Venues Waitlist"
- [ ] Note list IDs (found in Lists → Settings)
- [ ] Generate API key (Settings → API Keys)
- [ ] (Optional) Set up double opt-in automation
- [ ] Test API with Postman or curl

### 3. Code Preparation

- [ ] All environment variables documented in `ENV.example`
- [ ] No console.log in production code (use console.error for errors only)
- [ ] All images optimized and in `/public/images`
- [ ] OG image created (1200×630px)
- [ ] Update social links in Footer and Contact pages
- [ ] Update email addresses (hello@crwd.ro, privacy@crwd.ro)
- [ ] Update company info in legal pages if needed

### 4. Testing

- [ ] Run `pnpm lint` - no errors
- [ ] Run `pnpm typecheck` - no errors
- [ ] Run `pnpm build` - succeeds
- [ ] Test user lead form (local)
- [ ] Test venue lead form (local)
- [ ] Test contact form (local)
- [ ] Verify Supabase insert works
- [ ] Verify Brevo contact creation works
- [ ] Test rate limiting (rapid form submissions)
- [ ] Test honeypot (fill hidden field)
- [ ] Test on mobile devices
- [ ] Test all internal links work
- [ ] Run Lighthouse audit (≥90 on all)

### 5. Vercel Deployment

#### First-time Setup

1. **Connect to Vercel**
   ```bash
   # Install Vercel CLI (optional)
   pnpm add -g vercel
   
   # Or use web UI
   # Go to vercel.com/new
   # Import GitHub repository
   ```

2. **Set Environment Variables**
   
   In Vercel Dashboard → Project Settings → Environment Variables:
   
   **Production:**
   ```
   NEXT_PUBLIC_ENV=production
   BREVO_API_KEY=xkeysib-xxx
   BREVO_LIST_ID_USERS=1
   BREVO_LIST_ID_VENUES=2
   SUPABASE_URL=https://xxx.supabase.co
   SUPABASE_ANON_KEY=eyJxxx
   SUPABASE_SERVICE_ROLE=eyJxxx
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=crwd.ro
   ```
   
   **Preview (optional):**
   - Same as production, or use staging Supabase project
   
   **Development (optional):**
   - Can leave empty (use local `.env.local`)

3. **Deploy**
   ```bash
   git push origin main
   # Auto-deploys to Vercel
   ```

#### Custom Domain

1. **Add Domain in Vercel**
   - Project Settings → Domains
   - Add `crwd.ro` and `www.crwd.ro`

2. **Configure DNS**
   
   **Option A: Vercel Nameservers (Recommended)**
   - In your domain registrar, point nameservers to Vercel
   - Vercel nameservers: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`
   
   **Option B: CNAME/A Records**
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`

3. **Wait for DNS Propagation**
   - Usually takes 5-60 minutes
   - Check with: `dig crwd.ro` or `nslookup crwd.ro`

4. **Verify SSL**
   - Vercel auto-provisions SSL certificate
   - Check: https://crwd.ro should work with 🔒

### 6. Post-Deployment Verification

- [ ] Visit https://crwd.ro
- [ ] All pages load correctly
- [ ] Submit test lead (user) → check Supabase + Brevo
- [ ] Submit test lead (venue) → check Supabase + Brevo
- [ ] Verify double opt-in email arrives (if configured)
- [ ] Check Vercel logs for errors
- [ ] Test OG image: https://www.opengraph.xyz/url/https://crwd.ro
- [ ] Verify sitemap: https://crwd.ro/sitemap.xml
- [ ] Verify robots.txt: https://crwd.ro/robots.txt
- [ ] Google Search Console: submit sitemap
- [ ] Run Lighthouse on production URL

### 7. Monitoring & Analytics

#### Plausible Analytics (Recommended)

1. Sign up at https://plausible.io
2. Add site: `crwd.ro`
3. Already configured in code (no extra setup needed)

#### Vercel Analytics

1. Enable in Vercel Dashboard → Analytics
2. View real user metrics

#### Sentry (Optional - Error Tracking)

1. Sign up at https://sentry.io
2. Install:
   ```bash
   pnpm add @sentry/nextjs
   ```
3. Configure:
   ```bash
   npx @sentry/wizard -i nextjs
   ```

### 8. Ongoing Maintenance

#### Weekly

- [ ] Check Vercel logs for errors
- [ ] Monitor lead submissions in Supabase
- [ ] Verify Brevo deliverability rate

#### Monthly

- [ ] Review and respond to leads
- [ ] Update content if needed
- [ ] Check Lighthouse scores
- [ ] Review analytics (traffic, conversions)

#### As Needed

- [ ] Respond to GDPR requests (data deletion, export)
- [ ] Update dependencies: `pnpm update`
- [ ] Security patches: check Dependabot alerts

## Troubleshooting

### Build fails on Vercel

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors (run `pnpm typecheck` locally)
   - ESLint errors (run `pnpm lint` locally)

### Forms not working in production

1. Check Vercel Function logs
2. Verify environment variables are set correctly
3. Test API routes directly:
   ```bash
   curl -X POST https://crwd.ro/api/lead/user \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","marketing_consent":true}'
   ```

### Emails not sending

1. Check Brevo dashboard → Logs
2. Verify API key is correct
3. Check list IDs match
4. Verify sender email is verified in Brevo

### Database errors

1. Check Supabase logs
2. Verify RLS policies allow inserts
3. Test with service_role key in SQL editor

## Rollback Procedure

If deployment has critical issues:

1. **Instant Rollback**
   - Vercel Dashboard → Deployments
   - Find last working deployment
   - Click "..." → Promote to Production

2. **Code Rollback**
   ```bash
   git revert HEAD
   git push origin main
   ```

## Support Contacts

- **Vercel Support**: support@vercel.com
- **Supabase Support**: https://supabase.com/dashboard/support
- **Brevo Support**: https://help.brevo.com/

---

**Last Updated**: {new Date().toLocaleDateString("ro-RO")}

