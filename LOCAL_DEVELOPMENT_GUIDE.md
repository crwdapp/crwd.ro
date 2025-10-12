# 🛠️ Local Development Guide - No Cloud Services Needed

> Get the project running locally in 5 minutes - perfect for editing and previewing changes!

---

## 🎯 Goal

Run the CRWD landing page on your computer so you can:
- ✅ See how it looks and works
- ✅ Edit content, colors, layout
- ✅ Test the UI and forms (frontend only)
- ❌ Not save data to database yet (we'll add that later)

---

## 📋 Prerequisites

Make sure you have:
- ✅ Node.js 18+ installed ([download](https://nodejs.org/))
- ✅ pnpm installed (if not: `npm install -g pnpm`)
- ✅ A code editor (VS Code recommended)
- ✅ This project folder open

---

## 🚀 Step-by-Step Setup

### Step 1: Install Dependencies

Open terminal in the project folder and run:

```bash
pnpm install
```

**What this does:** Downloads all the libraries needed (Next.js, React, Tailwind, etc.)

**Expected output:** "Done in X.Xs" with no errors

---

### Step 2: Create Local Environment File

Create a file called `.env.local` in the project root (same folder as `package.json`):

```bash
# You can copy this exactly - these are dummy values for local dev
NEXT_PUBLIC_ENV=dev

# Dummy Brevo credentials (forms won't actually send emails)
BREVO_API_KEY=test_key_local_development_only
BREVO_LIST_ID_USERS=1
BREVO_LIST_ID_VENUES=2

# Dummy Supabase credentials (data won't actually save)
SUPABASE_URL=https://local-dev.supabase.co
SUPABASE_ANON_KEY=test_anon_key_local
SUPABASE_SERVICE_ROLE=test_service_role_local
```

**Important notes:**
- ⚠️ With these dummy values, the forms will **appear to work** but won't actually save data
- ✅ This is PERFECT for editing UI, testing layouts, changing content
- 💡 Later, when ready to save real data, you'll replace these with real credentials

**How to create the file:**

**Option A - Using VS Code:**
1. Right-click in the project folder sidebar
2. New File → name it `.env.local`
3. Paste the content above
4. Save

**Option B - Using terminal:**
```bash
# Windows PowerShell
New-Item -Path ".env.local" -ItemType File

# Then open it in your editor and paste the content
```

---

### Step 3: Start the Development Server

In terminal, run:

```bash
pnpm dev
```

**Expected output:**
```
> crwd-marketing@0.1.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

**🎉 SUCCESS! The server is running!**

---

### Step 4: Open in Browser

Open your browser and go to:

```
http://localhost:3000
```

You should see:
- ✅ Home page with purple/pink gradient "CRWD" logo
- ✅ Dark theme background
- ✅ User signup form with Email + City dropdown
- ✅ Navigation (Acasă, Parteneri, Contact)
- ✅ FAQ section
- ✅ Footer with links

---

### Step 5: Test Navigation

Click around to see all pages:

1. **Home** (`/`) - User waitlist page
2. **Parteneri** (`/parteneri`) - Venue partner page
3. **Contact** (`/contact`) - Contact form
4. **Footer links** - Privacy Policy, Terms, Cookies

**All pages should load correctly!** ✅

---

## 🧪 Testing Forms Locally

### What Works:
- ✅ Forms display correctly
- ✅ Validation works (try submitting empty form)
- ✅ UI states (loading, success, error)
- ✅ Dropdowns, checkboxes, inputs all functional

### What Doesn't Work (Yet):
- ❌ Data won't save to database (dummy Supabase)
- ❌ Emails won't send (dummy Brevo)
- ❌ You'll see errors in browser console (that's OK!)

### How to Test:

1. **Try the user form:**
   - Go to `http://localhost:3000`
   - Fill in email and select a city
   - Check the consent box
   - Click "Anunță-mă la lansare"
   - You'll see: "Mulțumim! Verifică emailul pentru confirmare."
   - ⚠️ Check browser console (F12) - you'll see API errors (expected!)

2. **Try the venue form:**
   - Go to `http://localhost:3000/parteneri`
   - Fill in the form
   - Submit
   - Same behavior as above

**This is NORMAL and EXPECTED!** The UI works, but data doesn't save because we're using dummy credentials.

---

## ✏️ Making Changes

Now you can edit anything! Here's what you'll commonly want to change:

### Change Content/Text

**Home page:**
```
File: src/app/page.tsx
```
Edit headlines, benefits, FAQ items, etc.

**Partners page:**
```
File: src/app/parteneri/page.tsx
```
Edit B2B messaging, benefits for venues

**Contact page:**
```
File: src/app/contact/page.tsx
```
Edit contact info, social links

### Change Colors/Styling

**Global styles:**
```
File: src/app/globals.css
File: tailwind.config.ts
```

**Example - Change purple to blue:**
In any component, find `purple-600` and replace with `blue-600`

### Change Cities in Dropdown

**User form:**
```
File: src/components/LeadFormUser.tsx
Line: ~84-96
```

**Venue form:**
```
File: src/components/LeadFormVenue.tsx
Line: ~112-124
```

Just add/remove `<option>` elements!

### See Changes Live

**Next.js has Hot Reload!** 🔥
- Save any file
- Browser automatically refreshes
- See changes instantly (no need to restart server)

---

## 🛑 Stopping the Server

When you're done:

1. Go to terminal where `pnpm dev` is running
2. Press **Ctrl + C**
3. Server stops

To start again later: `pnpm dev`

---

## 🐛 Troubleshooting

### Error: "Port 3000 already in use"

**Solution:**
```bash
# Kill the process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use a different port:
pnpm dev -- -p 3001
# Then open: http://localhost:3001
```

### Error: "Cannot find module..."

**Solution:**
```bash
# Delete and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Forms show errors immediately

**That's expected!** The API routes try to connect to Supabase/Brevo and fail.

**To see less noise in console** (optional), you can comment out the API calls temporarily:

In `src/components/LeadFormUser.tsx` (line ~25-40), comment out the fetch:

```typescript
try {
  // TEMPORARILY DISABLED FOR LOCAL EDITING
  // const res = await fetch("/api/lead/user", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  
  // Fake success for UI testing
  setState("success");
  return;
  
  // ... rest of code
```

Do the same in `LeadFormVenue.tsx` if needed.

### TypeScript errors in editor

**Solution:**
```bash
pnpm typecheck
```

If it says "0 errors" but your editor still shows red squiggles:
- Restart VS Code
- Or: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"

---

## 📝 Quick Reference

### Common Commands

```bash
# Start dev server
pnpm dev

# Check for errors
pnpm lint
pnpm typecheck

# Build for production (optional, just to test)
pnpm build

# Install a new package
pnpm add package-name
```

### Project URLs (when server running)

- Home: http://localhost:3000
- Parteneri: http://localhost:3000/parteneri
- Contact: http://localhost:3000/contact
- Privacy: http://localhost:3000/politica-confidentialitate
- Terms: http://localhost:3000/termeni
- Cookies: http://localhost:3000/cookies

### Key Files to Edit

```
Content:
  src/app/page.tsx                    (Home page)
  src/app/parteneri/page.tsx          (Partners page)
  src/app/contact/page.tsx            (Contact page)

Forms:
  src/components/LeadFormUser.tsx     (User signup form)
  src/components/LeadFormVenue.tsx    (Venue form)

Layout:
  src/components/Navbar.tsx           (Top navigation)
  src/components/Footer.tsx           (Footer)
  src/app/layout.tsx                  (Page wrapper)

Styles:
  src/app/globals.css                 (Global CSS)
  tailwind.config.ts                  (Tailwind config)
```

---

## 🎯 What's Next?

After you're happy with how it looks locally:

### Phase 1: Local Development (You are here! ✅)
- ✅ Run locally with dummy credentials
- ✅ Edit content, design, layout
- ✅ Test UI and navigation
- ✅ Make it yours!

### Phase 2: Connect Database (Later)
- Create Supabase account (free)
- Run database migration
- Update `.env.local` with real Supabase credentials
- Forms will actually save data!

### Phase 3: Connect Email (Later)
- Create Brevo account (free)
- Set up contact lists
- Update `.env.local` with real Brevo API key
- Emails will actually send!

### Phase 4: Deploy to Production (Later)
- Push to GitHub
- Deploy to Vercel (free for hobby projects)
- Configure custom domain
- Go live! 🚀

---

## 💡 Pro Tips

1. **Keep `pnpm dev` running** while you work - changes appear instantly
2. **Use browser DevTools** (F12) to inspect styles and test responsive design
3. **Test mobile view** - Click the phone icon in DevTools (Ctrl+Shift+M)
4. **Git commits** - Save your work often:
   ```bash
   git add .
   git commit -m "Updated homepage content"
   ```
5. **Don't commit `.env.local`** - It's already in `.gitignore` (good!)

---

## ✅ You're Ready!

You now have a fully functional local development environment!

**Next actions:**
1. Open `http://localhost:3000` in your browser
2. Open `src/app/page.tsx` in your editor
3. Change something (e.g., the headline)
4. Save the file
5. Watch it update in the browser automatically! 🎉

**When you're ready to make forms actually work:**
- Read: `DEPLOYMENT.md` for Supabase + Brevo setup
- Or ask me: "How do I connect Supabase?" or "How do I set up Brevo?"

---

**Happy coding! 🚀**

If you get stuck, just ask - I'm here to help!








