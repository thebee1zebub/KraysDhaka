# KRAYS DHAKA — Bespoke & Made-to-Measure Tailoring

> *"Creating Icons, Not Suits."*

**KRAYS DHAKA** is a production-quality website for a premier bespoke and made-to-measure tailoring house based in Dhaka, Bangladesh. The platform combines the timeless restraint of Savile Row, the visual sophistication of luxury menswear editorials, and the usability of a modern digital atelier.

---

## Table of Contents
1. [Brand Overview](#brand-overview)
2. [Key Architecture & Features](#key-architecture--features)
3. [How to Add, Edit & Remove Collection Garments](#how-to-add-edit--remove-collection-garments)
   - [Method 1: Interactive Atelier Admin Portal (No Code)](#method-1-interactive-atelier-admin-portal-no-code)
   - [Method 2: Directly in the Codebase (`tailoringData.ts`)](#method-2-directly-in-the-codebase-tailoringdatats)
4. [Step-by-Step GitHub Publishing & Hosting Guide](#step-by-step-github-publishing--hosting-guide)
   - [Option A: Free Hosting on GitHub Pages](#option-a-free-hosting-on-github-pages)
   - [Option B: 1-Click Free Hosting on Vercel or Netlify](#option-b-1-click-free-hosting-on-vercel-or-netlify)
5. [Local Development Commands](#local-development-commands)
6. [Tech Stack](#tech-stack)

---

## Brand Overview
- **Brand Name**: KRAYS DHAKA
- **Tagline**: *"Creating Icons, Not Suits."*
- **Category**: Premium bespoke and made-to-measure tailoring
- **Location**: 37, Avenue-1, Mirpur-10, Dhaka, Bangladesh
- **Core Collections**:
  - **Collection 01 — Essential**: Timeless foundations for a considered wardrobe (Starting from ৳6,000).
  - **Collection 02 — Signature**: Distinctive silhouettes, double-breasted cuts, and expressive cloths (Starting from ৳8,500).
  - **Bespoke Tailoring**: Hand-drafted virgin paper pattern, full floating horsehair canvas, multiple basted fitting trials.

---

## Key Architecture & Features
- **Editorial Design Direction**: Refined monochromatic palette (Pure White `#FFFFFF`, Near-Black `#111111`, Light Grey `#E5E5E5`). Editorial headlines in **Cormorant Garamond** paired with **Plus Jakarta Sans** for navigation and body prose.
- **Top Bar Contract**: Understated sticky navigation: `Collections`, `Bespoke`, `The Process`, `Contact`, plus `Book Consultation`.
- **Product Catalog & Details**: Dynamic filtering by collection category, search input, price sorting, technical garment specifications, and photo gallery.
- **Consultation & Concierge Engine**: Streamlined appointment booking form with phone validation and direct WhatsApp pre-formatted messaging bridge.
- **Atelier Admin Portal (`/admin`)**: Built-in management interface to add, modify, or remove garments and collections.

---

## How to Add, Edit & Remove Collection Garments

You can manage your catalog through two easy methods:

### Method 1: Interactive Atelier Admin Portal (No Code)
1. Go to `http://localhost:3000/#/admin` (or click **"Atelier Portal"** at the bottom of the website footer).
2. Enter the atelier passcode:
   ```text
   Krays@Admin26
   ```
3. **To Add a Garment**:
   - Click the black **"+ Add Garment"** button in the top right.
   - Enter the Garment Name, Starting Price in BDT (৳), Collection (`Essential`, `Signature`, or `Bespoke`), Silhouette, Fabric Details, and select a photographic asset.
   - Click **"Add to Collection"**. It will immediately appear on the live storefront!
4. **To Edit a Garment**:
   - Locate the suit in the table and click the **Pencil (Edit)** icon.
   - Adjust the price, description, or details, and click **"Save Changes"**.
5. **To Remove a Garment**:
   - Click the **Trash (Delete)** icon next to any discontinued suit. Confirm the prompt to remove it.
6. **To Save Changes to Code**:
   - Click **"Export JSON for Codebase"**. This copies the entire updated catalog to your clipboard so you can paste it directly into `src/data/tailoringData.ts` if desired.
   - A **"Reset to Defaults"** button is also available if you ever want to revert to the initial factory catalog.

---

### Method 2: Directly in the Codebase (`tailoringData.ts`)
Open `src/data/tailoringData.ts`. You will see the `PRODUCTS` array:

```typescript
export const PRODUCTS: Product[] = [
  {
    id: 'grey-flannel-suit',
    name: 'Grey Flannel Suit',
    collection: 'Essential', // 'Essential' | 'Signature' | 'Bespoke'
    category: 'Suit',        // 'Suit' | 'Double-Breasted' | 'Formalwear' | 'Separates'
    startingPrice: 6000,     // Starting price in BDT (or null for consultation quotation)
    priceNote: 'Starting price for Essential tailoring.',
    shortDescription: 'Subtle melange grey wool flannel with a soft natural shoulder.',
    description: 'Constructed from premium mid-weight wool flannel...',
    silhouette: 'Single-breasted, 2-button front, regular tapered drape',
    fabricDetails: 'Pure wool flannel, 310g/m, matte brushed texture',
    lapelStyle: 'Classic notch lapel (8.5 cm width)',
    construction: 'Half-canvas structure with natural horsehair chest piece',
    vents: 'Dual side vents',
    buttons: 'Genuine dark horn buttons, hand-shanked',
    image: IMAGES.essential, // Or a relative path / URL to your photograph
    galleryImages: [IMAGES.essential, IMAGES.craft],
    features: [
      'Hand-finished interior lining',
      'Flat-front trousers with concealed waistband adjusters'
    ]
  },
  // ... Add more items here or delete unwanted objects
];
```

To update starting prices across the brand, simply update the `startingPrice` numbers or `BRAND_CONFIG` in `src/data/tailoringData.ts`.

---

## Step-by-Step GitHub Publishing & Hosting Guide

### Step 1: Initialize Git and Push to GitHub

1. Open your terminal in the project directory:
   ```bash
   cd /path/to/krays-dhaka
   ```

2. Initialize a git repository:
   ```bash
   git init
   ```

3. Add all files and make the initial commit:
   ```bash
   git add .
   git commit -m "feat: initial release of KRAYS DHAKA tailoring website"
   ```

4. Create a new repository on [GitHub](https://github.com/new):
   - Name: `krays-dhaka` (or your preferred name)
   - Visibility: **Public** or **Private**
   - Do **not** check "Add a README" (you already have this one).

5. Connect your local repository to GitHub and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/krays-dhaka.git
   git push -u origin main
   ```

---

### Option A: Free Hosting on GitHub Pages

1. In your project, create the GitHub Actions deployment workflow at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Set up Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. Commit and push the workflow:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "ci: add GitHub Pages deployment workflow"
   git push
   ```

3. In GitHub, go to your repository **Settings** → **Pages**:
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - Your site will automatically build and publish at `https://YOUR_GITHUB_USERNAME.github.io/krays-dhaka/`!

---

### Option B: 1-Click Free Hosting on Vercel or Netlify (Recommended)

Vercel and Netlify offer free SSL, global CDN, and automatic deployment every time you push to GitHub:

1. **Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New Project"** and select `krays-dhaka`.
   - Framework Preset will automatically detect **Vite**.
   - Click **"Deploy"**. Within 30 seconds, your site is live with a custom domain option!

2. **Netlify**:
   - Go to [netlify.com](https://netlify.com) and connect your GitHub repository.
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click **"Deploy Site"**.

---

## Local Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run unit tests
npx tsx --test src/utils/tailoring.test.ts

# Type-check with TypeScript
npm run lint

# Build for production
npm run build
```

---

## Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (monochromatic luxury configuration)
- **Icons**: Lucide React
- **Typography**: Cormorant Garamond & Plus Jakarta Sans
- **Routing**: Client-side hash routing with parameters and search query support
- **Testing**: Built-in `node:test` runner with `tsx`

---

© 2026 KRAYS DHAKA Atelier. Gulshan / Banani, Dhaka, Bangladesh.
