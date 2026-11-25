# FreshMart — Grocery Storefront

A responsive, portfolio-ready supermarket storefront built with React and Vite, featuring 26 shopping departments and 165 demo products. The project is designed as a clean portfolio-ready frontend that can be run locally in VS Code and pushed directly to GitHub.

## Features

- Responsive grocery storefront for desktop, tablet and mobile
- 26 supermarket departments with 165 demo products
- Product catalogue with category filters, search and sorting
- Add-to-basket, quantity controls, remove items and live totals
- Free-delivery progress indicator and delivery fee calculation
- Wishlist toggle on product cards
- Demo checkout confirmation (no payment is collected)
- Newsletter form interaction and toast feedback
- Accessible labels, semantic page sections and responsive navigation
- No backend or API keys required; sample product data is local

## Departments included

Fruits, Vegetables, Dairy & Eggs, Bakery, Snacks, Staples & Grains, Beverages, Personal Care, Household, Meat & Seafood, Frozen Foods, Baby & Kids, Pet Supplies, Home & Kitchen, Stationery & Office, Health & Wellness, Beauty & Cosmetics, Organic & Health Foods, Ready to Eat, Spices & Masalas, Sauces & Spreads, Pooja & Festival, Baby Care, Cleaning & Laundry, Seafood & Frozen Meat, and Regional & International Foods.

## Tech stack

- React 18+
- Vite
- JavaScript (ES modules)
- CSS
- Lucide React icons

## Run in VS Code

1. Install **Node.js 18 or newer** from https://nodejs.org/.
2. Extract the ZIP file.
3. Open the `FreshMart_All_Sectors` folder in VS Code.
4. Open **Terminal → New Terminal**.
5. Run:

```bash
npm install
npm run dev
```

6. Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production-ready files are generated in the `dist/` folder.

## Push to GitHub

Create an empty public repository on GitHub, then run these commands from this project folder (replace the URL with your repository URL):

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit: FreshMart grocery storefront"
git remote add origin https://github.com/YOUR_USERNAME/freshmart-grocery-store.git
git push -u origin main
```

## Project structure

```text
freshmart-grocery-store/
├── index.html
├── package.json
├── README.md
├── .gitignore
└── src/
    ├── main.jsx
    └── style.css
```

## Notes

This is a frontend demonstration project. Product data, prices, delivery location, basket and checkout are demo-only and are not connected to inventory, authentication, a database, delivery partner or payment gateway. The newsletter form shows a local confirmation and does not submit an email to a server.

## Suggested next enhancements

- Add a backend and database for products, users and orders
- Add authentication and saved addresses
- Integrate a real payment gateway in a secure backend flow
- Add inventory and order-management dashboards
- Connect product images and stock to an admin API

---

Built as a learning and portfolio project. Customize the brand, products and content before publishing.
