# CredoLens AI — Live Prototype Deployment Guide

This guide provides **3 rapid deployment options** to host the **CredoLens AI** prototype live on the web and obtain the **`Deployed Project Link`** required for your BITSoM Vertex Pitch Fest submission.

---

## ⚡ Option 1: Netlify Drop (Fastest — 30 Seconds, No CLI Needed)

The production build is already compiled and ready inside the `dist/` folder:
`c:\Users\prata\OneDrive\Desktop\PERSNOL PROJECTS\credolens-ai\dist`

1. Open your browser and navigate to: **[https://app.netlify.com/drop](https://app.netlify.com/drop)** (Sign in with GitHub/Email if prompted).
2. Drag and drop the **`dist`** folder directly into the browser upload box.
3. **Done!** Netlify will instantly provision an active HTTPS link (e.g., `https://credolens-ai-preview.netlify.app`).
4. Copy this URL and paste it into the **Deployed Project Link** field on Hack2skill.

---

## 🚀 Option 2: Vercel (Recommended for GitHub Sync)

We have already configured `vercel.json` for seamless Single Page Application (SPA) client-side routing.

### Step-by-Step GitHub + Vercel Deployment:
1. **Push to GitHub:**
   ```bash
   cd "c:\Users\prata\OneDrive\Desktop\PERSNOL PROJECTS\credolens-ai"
   git add .
   git commit -m "feat: complete CredoLens AI prototype with matte dark UI and command palette"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/credolens-ai.git
   git push -u origin main
   ```
2. **Deploy on Vercel:**
   * Go to **[vercel.com/new](https://vercel.com/new)**.
   * Click **Import** on your `credolens-ai` repository.
   * Framework Preset: **Vite**
   * Root Directory: `./` (or leave default)
   * Build Command: `npm run build`
   * Output Directory: `dist`
   * Click **Deploy**.
3. Your live production URL (e.g., `https://credolens-ai.vercel.app`) will be active in ~45 seconds.

---

## 🌐 Option 3: Local Network Demo (If Presenting Live)

If you are presenting directly on a video call:
* The prototype is running on **`http://localhost:3000`**.
* You can run `npm run preview` to test the exact production bundle locally on port 4173.

---

## 📋 Deliverables Mapping for Submission

| Submission Field | Value to Enter |
|---|---|
| **Project Title** | `CredoLens AI — Autonomous Multi-Agent SME Credit Underwriting Engine` |
| **Track** | `BFSI AI Problems / Innovation AI Agents (Stage 2: Prototype / MVP)` |
| **Deployed Project Link** | *Your Netlify / Vercel Live URL* (e.g. `https://credolens-ai.vercel.app`) |
| **GitHub Repository** | `https://github.com/<your-username>/credolens-ai` |
| **Demo Video Link** | *YouTube / Loom Link (Use DEMO_VIDEO_SCRIPT.md)* |
