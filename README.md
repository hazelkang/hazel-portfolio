# Hazel Hyeseung Kang — Portfolio

A React-based portfolio website built with Vite, Tailwind CSS, Recharts, and Lucide icons.

---

## 🚀 Deploy to Vercel (Recommended — 3 minutes)

### Step 1: Push to GitHub
1. Go to [github.com/new](https://github.com/new) and create a new repository (e.g., `hazel-portfolio`)
2. Unzip this project folder on your computer
3. Open Terminal, `cd` into the folder, and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hazel-portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New → Project"**
3. Import your `hazel-portfolio` repository
4. Vercel auto-detects Vite — just click **"Deploy"**
5. In ~60 seconds you'll get a live URL like `https://hazel-portfolio.vercel.app`

### Step 3: Embed in WordPress
1. In your WordPress dashboard, edit the page where you want the portfolio
2. Add a **Custom HTML** block
3. Paste this code (replace the URL with your actual Vercel URL):

```html
<iframe
  src="https://hazel-portfolio.vercel.app"
  width="100%"
  height="100vh"
  style="border: none; min-height: 100vh; width: 100%;"
  title="Hazel Kang Portfolio"
></iframe>

<style>
  /* Make the iframe fill the page */
  .entry-content { max-width: 100% !important; padding: 0 !important; }
  .wp-block-html { max-width: 100% !important; }
</style>
```

4. Publish/Update the page

---

## 🔧 Alternative: Deploy to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag and drop the `dist` folder (after running `npm run build`) onto the page
3. Or connect your GitHub repo for auto-deploys

---

## 💻 Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 📁 Project Structure

```
portfolio-project/
├── index.html          # Entry HTML
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Portfolio component (your original JSX)
│   └── index.css       # Tailwind imports & global styles
```

## ✨ Tech Stack
- **React 18** — UI framework
- **Vite 6** — Build tool
- **Tailwind CSS 3** — Utility-first styling
- **Recharts** — Interactive charts
- **Lucide React** — Icons
