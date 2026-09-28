# Cafe By Cassette — Official Website

> A retro-themed cafe website for **Cafe By Cassette**, located in Kattupakkam, Chennai. Celebrating analog music nostalgia, artisan coffee brews, fresh bakes, and classic Italian comfort food.

---

## ☕ Verified Business Information

- **Business Name:** Cafe By Cassette
- **Address:** No. 222 - G2, Poojaa Diamond Anandam, Poonamallee High Road, Kattupakkam, Chennai, Tamil Nadu 600056, India.
- **Operating Hours:** 12:00 PM – 11:00 PM (Monday – Sunday)
- **Instagram:** [https://www.instagram.com/cafe_by_cassette/?hl=en](https://www.instagram.com/cafe_by_cassette/?hl=en)
- **Swiggy Delivery:** [https://www.swiggy.com/city/chennai/cafe-by-cassette-poonamallee-rest968898](https://www.swiggy.com/city/chennai/cafe-by-cassette-poonamallee-rest968898)
- **Swiggy Dineout:** [https://www.swiggy.com/restaurants/chennai/kattupakkam/cafe-by-cassette-1016258/dineout](https://www.swiggy.com/restaurants/chennai/kattupakkam/cafe-by-cassette-1016258/dineout)
- **Zomato:** [https://www.zomato.com/chennai/cafe-by-cassette-poonamalle](https://www.zomato.com/chennai/cafe-by-cassette-poonamalle)
- **Magicpin:** [https://magicpin.in/Chennai/Poonamalle/Restaurant/Cafe-By-Cassette/store/1709054/menu](https://magicpin.in/Chennai/Poonamalle/Restaurant/Cafe-By-Cassette/store/1709054/menu)

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 + custom retro tokens (warm cream, espresso brown, terracotta, mustard gold)
- **Icons:** Lucide React
- **Typography:** Fraunces (Retro Display Serif) & Plus Jakarta Sans (Clean Modern Sans)
- **Architecture:** 100% Frontend-only SPA, zero paid backend/database dependencies, ready for free static hosting (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

---

## 🚀 Running on Windows Laptop (Step-by-Step)

Follow these exact steps to run the complete website on your Windows computer:

1. **Install Node.js LTS if it is not already installed:**
   Download and run the official Windows installer from [https://nodejs.org](https://nodejs.org) (v18, v20, or v22 LTS recommended).
2. **Open the extracted project folder in VS Code:**
   After extracting the downloaded project ZIP file, launch Visual Studio Code, click **File > Open Folder...**, and select the extracted project folder.
3. **Open the terminal in the project folder:**
   In VS Code, press ``Ctrl + ` `` (backtick) or select **Terminal > New Terminal** from the top menu bar.
4. **Run `npm install`:**
   In the terminal, execute:
   ```bash
   npm install
   ```
   This will install all necessary dependencies locally.
5. **Run `npm run dev`:**
   Start the local development server:
   ```bash
   npm run dev
   ```
6. **Open the local URL printed in the terminal:**
   Click the URL displayed in the terminal (usually `http://localhost:3000` or `http://localhost:5173`) or open it in your browser.

---

### Production Build & Free Static Hosting
To create a production-ready build for deployment:
```bash
npm run build
```
This generates an optimized static `dist/` directory ready for deployment on Netlify, Vercel, GitHub Pages, or Cloudflare Pages without any backend server.

---

## 📂 Project Architecture

```
/
├── index.html                   # SEO tags, Open Graph, Schema.org JSON-LD & Google Fonts
├── metadata.json                # AI Studio application metadata
├── package.json                 # Dependencies and build scripts
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── src/
│   ├── main.tsx                 # React DOM root entrypoint
│   ├── App.tsx                  # Main layout assembling all sections
│   ├── index.css                # Tailwind theme variables, fonts, & animations
│   ├── data/
│   │   └── cafeConfig.ts        # ⭐ Central configuration for all cafe data & menus
│   ├── assets/
│   │   └── images/              # Local visual assets & concept moodboard art
│   └── components/
│       ├── Navbar.tsx           # Responsive header with mobile drawer
│       ├── Hero.tsx             # Retro cassette deck interactive showcase & CTAs
│       ├── About.tsx            # Side A & Side B story with split editorial layout
│       ├── MenuSection.tsx      # Verified menu with search, category & dietary filters
│       ├── GallerySection.tsx   # Editorial visual gallery with accessible lightbox
│       ├── ReviewsSection.tsx   # Verified platform review links without fake testimonials
│       ├── VisitUsSection.tsx   # Address, hours, one-click copy, and Google Maps directions
│       └── Footer.tsx           # Brand footer with legal notices & owner guide modal
└── README.md
```

---

## ✏️ How the Cafe Owner Can Customize Data

All business details, menus, and external URLs are located in a single file:
👉 `src/data/cafeConfig.ts`

### 1. Update Menu Items & Prices:
Edit the `cafeConfig.menuItems` array:
```ts
{
  id: 'bev-1',
  name: 'Biscoff Cold Coffee',
  category: 'beverages',
  price: 429,
  currency: '₹',
  description: 'Signature iced coffee blended with Lotus Biscoff spread...',
  isVegetarian: true,
  isChefSpecial: true,
  isVerified: true,
}
```

### 2. Add Authentic Cafe Photographs:
1. Place your real photo files in `src/assets/images/` or `public/`.
2. Update the `cafeConfig.gallery` array with the file import or relative path.

### 3. Update Business Hours or Direct Contact:
Update `cafeConfig.business.hours` or `cafeConfig.business.contact`.

---

## 📜 Compliance & Verification Principles
- **No Fabricated Information:** No fake 5-star quotes, invented customer names, fake telephone numbers, or fake booking engines are used.
- **Direct Platforms:** Visitors are directed to authentic, verified channels (Swiggy, Zomato, Magicpin, Google Maps, and Instagram).
