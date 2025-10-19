# 🚀 Production Setup Guide - Real Supabase & Brevo Integration

> Complete step-by-step guide to connect your CRWD landing page to real database and email services

---

## 📋 Overview

This guide will help you:
1. ✅ Create free Supabase account and database
2. ✅ Set up tables and security rules
3. ✅ Create free Brevo account
4. ✅ Configure email lists and API
5. ✅ Connect everything to your app
6. ✅ Test that forms actually save data and send emails

**Time needed:** ~45 minutes  
**Cost:** $0 (both services have generous free tiers)

---

## 🗄️ Part 1: Supabase Setup (Database)

### Step 1.1: Create Supabase Account

1. **Go to:** https://supabase.com
2. **Click:** "Start your project"
3. **Sign up with:**
   - GitHub (recommended - easiest)
   - Or email/password

4. **Verify email** if using email signup

---

### Step 1.2: Create New Project

1. **After login**, you'll see the dashboard
2. **Click:** "New Project" (big green button)
3. **Fill in:**
   - **Name:** `crwd-marketing` (or whatever you prefer)
   - **Database Password:** Create a STRONG password
     - ⚠️ **SAVE THIS PASSWORD!** You'll need it later
     - Example: `MyStr0ng!Pass_2024_CRWD`
     - Write it down somewhere safe!
   - **Region:** Choose closest to your target audience
     - Romania/Eastern Europe → Frankfurt (`eu-central-1`)
     - Or: `eu-west-1` (Ireland)
   - **Pricing Plan:** Free (0 USD/month)

4. **Click:** "Create new project"
5. **Wait:** 2-3 minutes while Supabase provisions your database
   - You'll see a progress bar
   - Coffee break time! ☕

---

### Step 1.3: Get Your Supabase Credentials

Once the project is ready:

1. **Go to:** Project Settings (gear icon in left sidebar)
2. **Click:** "API" in the settings menu
3. **You'll see:**

**Copy these 3 values (keep them safe!):**

**A. Project URL**
```
Example: https://xyzabcdefgh.supabase.co
```
Copy the full URL starting with `https://`

**B. Project API keys → anon public**
```
Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS...
```
This is your `SUPABASE_ANON_KEY` (safe to use on client-side)

**C. Project API keys → service_role secret**
```
Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS...
```
This is your `SUPABASE_SERVICE_ROLE` (⚠️ NEVER expose this publicly!)

**Save these somewhere safe!** You'll need them in Step 3.

---

### Step 1.4: Run Database Migration

Now we'll create the tables for user and venue leads.

**Option A: Using SQL Editor (Easiest)**

1. **In Supabase dashboard**, click **"SQL Editor"** (in left sidebar)
2. **Click:** "New query" button (top right)
3. **Open the migration file** in your project:
   ```
   File: supabase/migrations/001_initial_schema.sql
   ```
4. **Copy the ENTIRE contents** of that file
5. **Paste it** into the SQL Editor in Supabase
6. **Click:** "Run" button (bottom right)
7. **Wait for:** "Success. No rows returned" message ✅

**What this does:**
- Creates `leads_users` table
- Creates `leads_venues` table
- Adds indexes for fast queries
- Sets up Row Level Security (RLS)
- Allows public inserts (for your forms)

**Option B: Using Supabase CLI (Advanced)**

If you prefer command line:

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Push migration
supabase db push
```

---

### Step 1.5: Verify Tables Were Created

1. **Go to:** "Table Editor" (in left sidebar)
2. **You should see 2 tables:**
   - ✅ `leads_users`
   - ✅ `leads_venues`

3. **Click on** `leads_users` to see the structure:
   - `id` (uuid)
   - `email` (text)
   - `city` (text)
   - `marketing_consent` (bool)
   - `source` (text)
   - `created_at` (timestamptz)

4. **Click on** `leads_venues`:
   - `id` (uuid)
   - `contact_name` (text)
   - `email` (text)
   - `phone` (text)
   - `city` (text)
   - `marketing_consent` (bool)
   - `source` (text)
   - `created_at` (timestamptz)

**If you see both tables → SUCCESS!** ✅

---

### Step 1.6: Test Database Connection (Optional)

Quick test to make sure everything works:

1. **In Table Editor**, click `leads_users`
2. **Click:** "Insert row" button
3. **Fill in:**
   - `email`: test@example.com
   - `city`: București
   - `marketing_consent`: true
   - Leave other fields empty (they auto-fill)
4. **Click:** "Save"

You should see the new row appear. **Delete it** (click row → Delete) - this was just a test!

**✅ Supabase is ready!**

---

## 📧 Part 2: Brevo Setup (Email Marketing)

### Step 2.1: Create Brevo Account

1. **Go to:** https://www.brevo.com (formerly SendinBlue)
2. **Click:** "Sign up free"
3. **Fill in:**
   - Email
   - Password
   - Company name: "CRWD" (or your name)
   - Choose: "I'm starting out" or appropriate option
4. **Complete signup**
5. **Verify your email** (check inbox)

---

### Step 2.2: Complete Onboarding

Brevo will ask some questions:

1. **What's your role?** → Choose "Marketing" or "Owner"
2. **Company size?** → "Just me" or appropriate
3. **How will you use Brevo?** → Check "Email marketing"
4. **Skip** any tutorial or click through quickly

You'll land on the dashboard.

---

### Step 2.3: Verify Sender Email (IMPORTANT!)

Before you can send emails, you must verify your sender address:

1. **Go to:** Settings (gear icon) → Senders & IP
2. **Click:** "Add a sender"
3. **Fill in:**
   - **Email:** hello@crwd.ro (or your domain email)
     - ⚠️ If you don't have a domain yet, use your personal email temporarily
     - Example: `yourname@gmail.com`
   - **Name:** CRWD Team
4. **Click:** "Save"
5. **Check your email** for verification link
6. **Click the link** to verify

**Status should show:** ✅ Verified

---

### Step 2.4: Create Contact Lists

Now we'll create 2 lists: one for users, one for venues.

**List 1: Users Waitlist**

1. **Go to:** Contacts → Lists
2. **Click:** "Create a list"
3. **Fill in:**
   - **List name:** `Users Waitlist`
   - **Folder:** Default (or create "CRWD Lists")
4. **Click:** "Create"
5. **Copy the List ID** from the URL:
   - URL will look like: `https://app.brevo.com/contact/list/id/123`
   - **List ID = 123** (the number at the end)
   - **Save this!** This is your `BREVO_LIST_ID_USERS`

**List 2: Venues Waitlist**

1. **Click:** "Create a list" again
2. **Fill in:**
   - **List name:** `Venues Waitlist`
   - **Folder:** Same as above
3. **Click:** "Create"
4. **Copy the List ID** from URL (different number)
   - **Save this!** This is your `BREVO_LIST_ID_VENUES`

---

### Step 2.5: Create Custom Contact Attributes

We need to add custom fields for City, Contact Name, and Phone:

1. **Go to:** Contacts → Settings → Contact attributes
2. **You'll see** default attributes (EMAIL, FIRSTNAME, LASTNAME, etc.)

**Add CITY attribute:**

3. **Click:** "Create a contact attribute"
4. **Fill in:**
   - **Category:** Normal
   - **Attribute name:** `CITY`
   - **Attribute type:** Text
5. **Click:** "Create attribute"

**Add CONTACT_NAME attribute:**

6. **Click:** "Create a contact attribute"
7. **Fill in:**
   - **Attribute name:** `CONTACT_NAME`
   - **Attribute type:** Text
8. **Click:** "Create attribute"

**Add PHONE attribute:**

9. **Click:** "Create a contact attribute"
10. **Fill in:**
    - **Attribute name:** `PHONE`
    - **Attribute type:** Text (or Phone if available)
11. **Click:** "Create attribute"

**You should now have:**
- ✅ CITY
- ✅ CONTACT_NAME
- ✅ PHONE
- ✅ EMAIL (built-in)

---

### Step 2.6: Get Brevo API Key

1. **Go to:** Settings → SMTP & API → API Keys
2. **Click:** "Generate a new API key"
3. **Fill in:**
   - **Key name:** `CRWD Landing Page`
   - **Keep:** v3 API key selected
4. **Click:** "Generate"
5. **Copy the API key** immediately
   - It looks like: `xkeysib-abc123def456...`
   - ⚠️ **SAVE THIS!** You can't see it again!
   - This is your `BREVO_API_KEY`

---

### Step 2.7: Set Up Double Opt-In (Optional but Recommended)

For GDPR compliance, it's best to enable double opt-in:

1. **Go to:** Contacts → Settings → Double opt-in
2. **Toggle:** Enable double opt-in
3. **Choose template:** "Default double opt-in template" (or create custom)
4. **Sender email:** hello@crwd.ro (the one you verified)
5. **Subject:** "Confirmă adresa de email pentru CRWD"
6. **Customize template** if you want (optional)
7. **Save**

**What this does:**
- User submits form → gets confirmation email
- User clicks link in email → gets added to list
- Only confirmed emails receive campaigns
- GDPR compliant! ✅

---

### Step 2.8: Summary of Brevo Credentials

You should now have:

✅ **API Key:** `xkeysib-abc123...`  
✅ **Users List ID:** `123` (example)  
✅ **Venues List ID:** `124` (example)  
✅ **Verified sender:** hello@crwd.ro  
✅ **Custom attributes:** CITY, CONTACT_NAME, PHONE

**Keep these safe for the next step!**

---

## 🔌 Part 3: Connect Everything to Your App

### Step 3.1: Update Environment Variables

1. **Open** your project in VS Code
2. **Open** (or create) `.env.local` file in project root
3. **Replace with your REAL credentials:**

```env
# Environment
NEXT_PUBLIC_ENV=production

# Brevo API (replace with YOUR values!)
BREVO_API_KEY=xkeysib-YOUR_ACTUAL_API_KEY_HERE
BREVO_LIST_ID_USERS=123
BREVO_LIST_ID_VENUES=124

# Supabase (replace with YOUR values!)
SUPABASE_URL=https://yourproject.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Analytics (optional - leave empty for now)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

**⚠️ IMPORTANT:**
- Replace ALL the example values with YOUR actual credentials
- Double-check there are no extra spaces
- Make sure the file is named exactly `.env.local` (with the dot!)
- This file should NOT be committed to git (it's in .gitignore)

4. **Save the file**

---

### Step 3.2: Restart Development Server

If your dev server is running, **restart it** to load new environment variables:

1. **Stop the server:** Press `Ctrl + C` in terminal
2. **Start again:**
   ```bash
   pnpm dev
   ```

The server will now use your REAL credentials!

---

## 🧪 Part 4: Test Everything Works

### Step 4.1: Test User Signup Form

1. **Open:** http://localhost:3000
2. **Fill in the form:**
   - **Email:** Use YOUR real email (you'll receive confirmation)
   - **City:** Select any city
   - **Consent:** Check the box
3. **Submit**

**Expected behavior:**

✅ **In browser:**
- Form shows loading state
- Then shows: "Mulțumim! Verifică emailul pentru confirmare."

✅ **In Supabase:**
- Go to Supabase dashboard → Table Editor → `leads_users`
- You should see a new row with your email and city!
- Screenshot: `created_at` should be just now

✅ **In Brevo:**
- Go to Brevo dashboard → Contacts → Lists → Users Waitlist
- You should see your email added
- Click on it to see: CITY attribute filled in

✅ **In your email inbox:**
- If double opt-in enabled: You'll receive confirmation email
- Click the link to confirm
- In Brevo, contact status changes to "subscribed"

**If ALL of the above work → SUCCESS!** 🎉

---

### Step 4.2: Test Venue Application Form

1. **Open:** http://localhost:3000/parteneri
2. **Fill in the form:**
   - **Name:** Test Venue Owner
   - **Email:** Use a different email (or same with +venue trick: youremail+venue@gmail.com)
   - **Phone:** 0712345678
   - **City:** Select any city
   - **Consent:** Check the box
3. **Submit**

**Expected behavior:**

✅ **In browser:**
- Form shows loading state
- Then shows: "Mulțumim! Te vom contacta în curând."

✅ **In Supabase:**
- Table Editor → `leads_venues`
- New row with contact name, email, phone, city

✅ **In Brevo:**
- Contacts → Lists → Venues Waitlist
- Your venue email added
- Attributes: CONTACT_NAME, PHONE, CITY all filled in

✅ **In email:**
- Confirmation email received (if double opt-in enabled)

**If everything works → You're READY FOR PRODUCTION!** 🚀

---

### Step 4.3: Check Browser Console (No Errors)

1. **Open browser DevTools:** Press `F12`
2. **Go to Console tab**
3. **Submit forms again**

**You should see:**
- ✅ No red errors about Supabase
- ✅ No red errors about Brevo
- ✅ Maybe some Next.js info logs (that's fine)

**If you see errors:**
- Double-check your `.env.local` values
- Make sure API keys are copied correctly (no extra spaces)
- Verify Supabase URL starts with `https://`
- Check Brevo API key starts with `xkeysib-`

---

## 🎯 Part 5: Final Verification Checklist

Before deploying to production, verify:

**Supabase:**
- [x] Project created
- [x] Tables created (`leads_users`, `leads_venues`)
- [x] RLS enabled
- [x] Test data successfully inserted
- [x] Credentials saved in `.env.local`

**Brevo:**
- [x] Account created
- [x] Sender email verified
- [x] Users Waitlist list created
- [x] Venues Waitlist list created
- [x] Custom attributes created (CITY, CONTACT_NAME, PHONE)
- [x] API key generated
- [x] Double opt-in enabled (optional but recommended)
- [x] Credentials saved in `.env.local`

**Application:**
- [x] `.env.local` file created with REAL values
- [x] Dev server restarted
- [x] User form tested successfully
- [x] Venue form tested successfully
- [x] Data appears in Supabase
- [x] Contacts appear in Brevo
- [x] Confirmation emails received
- [x] No console errors

**All checked?** → **YOU'RE READY TO DEPLOY!** 🎊

---

## 🚀 Part 6: Deploy to Vercel (Optional)

Now that everything works locally, you can deploy to production:

### Step 6.1: Push to GitHub

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit - CRWD landing page with Supabase & Brevo"

# Create repo on GitHub, then:
git remote add origin https://github.com/your-username/crwd-marketing.git
git branch -M main
git push -u origin main
```

---

### Step 6.2: Deploy to Vercel

1. **Go to:** https://vercel.com
2. **Sign up** with GitHub
3. **Click:** "New Project"
4. **Import** your GitHub repository
5. **Configure:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `pnpm build` (or leave default)
   - Output Directory: (leave default)
6. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add ALL variables from your `.env.local`:
     ```
     NEXT_PUBLIC_ENV=production
     BREVO_API_KEY=xkeysib-...
     BREVO_LIST_ID_USERS=123
     BREVO_LIST_ID_VENUES=124
     SUPABASE_URL=https://...
     SUPABASE_ANON_KEY=eyJ...
     SUPABASE_SERVICE_ROLE=eyJ...
     ```
   - ⚠️ Make sure to set for **Production**, **Preview**, and **Development**
7. **Click:** "Deploy"
8. **Wait:** 2-3 minutes for build

**Vercel will give you a URL:** `https://crwd-marketing.vercel.app`

---

### Step 6.3: Test Production Deployment

1. **Open:** Your Vercel URL
2. **Test both forms** just like you did locally
3. **Verify:**
   - Data saves to Supabase
   - Contacts added to Brevo
   - Emails sent

**Everything works?** → **YOU'RE LIVE!** 🎉

---

### Step 6.4: Add Custom Domain (Optional)

1. **In Vercel dashboard**, go to your project
2. **Settings** → **Domains**
3. **Add** `crwd.ro` and `www.crwd.ro`
4. **Configure DNS** at your domain registrar:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`
5. **Wait** for DNS propagation (5-60 minutes)
6. **SSL certificate** auto-provisions ✅

**Your site is now live at:** https://crwd.ro 🌟

---

## 📊 Part 7: Monitor & Manage

### View Collected Leads

**In Supabase:**
1. Dashboard → Table Editor
2. Click `leads_users` or `leads_venues`
3. See all submissions with timestamps
4. Export as CSV if needed

**In Brevo:**
1. Contacts → Lists
2. Click on a list to see all subscribers
3. Segment by CITY attribute
4. Create email campaigns targeting specific cities

---

### Send Your First Email Campaign

1. **In Brevo:** Campaigns → Create campaign
2. **Choose:** Email campaign
3. **Select list:** Users Waitlist
4. **Design email** (drag & drop editor)
5. **Subject:** "CRWD se lansează în București!"
6. **Segment by CITY** if you want city-specific messaging
7. **Schedule** or send immediately

---

## 🛡️ Security Best Practices

### DO:
- ✅ Keep `SUPABASE_SERVICE_ROLE` secret (only in `.env.local` and Vercel env vars)
- ✅ Never commit `.env.local` to git
- ✅ Use strong database password
- ✅ Enable double opt-in in Brevo
- ✅ Regularly backup your Supabase data
- ✅ Monitor Vercel logs for errors

### DON'T:
- ❌ Never share your service role key
- ❌ Never commit API keys to GitHub
- ❌ Never disable RLS in Supabase
- ❌ Never skip email verification in Brevo

---

## 🐛 Troubleshooting

### Forms submit but no data in Supabase

**Check:**
1. `.env.local` has correct `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE`
2. Tables exist in Supabase (Table Editor)
3. RLS policies allow inserts (check migration ran successfully)
4. No errors in browser console (F12)
5. Server was restarted after updating `.env.local`

**Solution:**
```bash
# Restart server
Ctrl + C
pnpm dev
```

---

### Emails not sending

**Check:**
1. Sender email verified in Brevo
2. `BREVO_API_KEY` correct in `.env.local`
3. List IDs are correct numbers (not strings)
4. Custom attributes exist in Brevo (CITY, CONTACT_NAME, PHONE)

**Test API key:**
```bash
curl -X GET \
  https://api.brevo.com/v3/account \
  -H 'api-key: YOUR_BREVO_API_KEY'
```

Should return your account info, not an error.

---

### "Duplicate key" errors

This is NORMAL and EXPECTED when someone submits the same email twice.

The app handles this gracefully - user sees success message, but no duplicate created.

**Not an error!** Working as designed. ✅

---

### Rate limit hit

If you're testing repeatedly:
- Default: 10 requests/minute per IP
- Normal during testing
- Will reset after 1 minute
- For testing, you can increase the limit in `src/lib/rateLimit.ts`

---

## 🎓 Next Steps

Now that your landing page is live and collecting leads:

1. **Set up analytics** (Plausible or Google Analytics)
2. **Create email drip campaigns** in Brevo
3. **Monitor conversion rates** (visits → signups)
4. **A/B test** different headlines or CTAs
5. **Segment by city** and target specific markets
6. **Prepare launch campaign** for early access users

---

## 📞 Support Resources

### Supabase
- Docs: https://supabase.com/docs
- Discord: https://discord.supabase.com
- Support: support@supabase.io

### Brevo
- Docs: https://developers.brevo.com
- Help Center: https://help.brevo.com
- Support: In-app chat or email

### Your Project
- See `README.md` for full project documentation
- See `DEPLOYMENT.md` for deployment details
- See `UPDATE_SUMMARY.md` for latest changes

---

## 🎉 Congratulations!

You now have a **fully functional, production-ready** landing page that:

✅ Collects user waitlist signups  
✅ Collects venue partner applications  
✅ Saves data to Supabase database  
✅ Sends contacts to Brevo for email marketing  
✅ Sends confirmation emails (double opt-in)  
✅ Segments by city for targeted campaigns  
✅ Is GDPR compliant  
✅ Is deployed and live on the internet  

**You're ready to launch CRWD!** 🚀🎊

---

**Questions?** Feel free to ask for help with:
- Customizing email templates in Brevo
- Creating email campaigns
- Querying data in Supabase
- Setting up analytics
- Optimizing conversion rates
- Anything else!

**Good luck with your launch!** 🌟
















