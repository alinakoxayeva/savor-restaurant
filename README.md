# Savor 🍽️

🌐 **English** | [Azərbaycanca](README.az.md)

**Savor** is a full-stack online food ordering website for a restaurant. Customers browse the menu, add dishes to their cart, enter a delivery address, place an order and track its status live. Administrators manage the menu, orders and users, and view sales statistics.

🔗 **Live demo:** https://bitego-website.vercel.app/

> Note: the project was originally called BiteGo and is now named Savor. The live link still uses the old name.

## Screenshots

| Home | Menu |
|---|---|
| ![Home](docs/screenshots/home.png) | ![Menu](docs/screenshots/menu.png) |

| Cart | Admin panel |
|---|---|
| ![Cart](docs/screenshots/cart.png) | ![Admin panel](docs/screenshots/admin.png) |

**Mobile view**

![Mobile](docs/video/savormobile.mp4)

## Features

### Customers
- Sign up and log in (JWT authentication)
- Menu with search, category filter, sorting (price, name, newest) and pagination
- Featured dishes and categories on the home page
- Product page with quantity selector
- Cart: change quantities, remove items, clear the cart
- Checkout with address, phone, note and payment method (cash or simulated card)
- My orders: order list and order details
- Live order tracking (confirmed, preparing, on the way, delivered) and cancelling pending orders
- Responsive design for mobile

### Administrators
- Dashboard with sales statistics and charts
- Order management and status updates
- Product and category management
- User list

## Tech stack

**Frontend**
- React 19, TypeScript, Vite
- Tailwind CSS 4, shadcn/ui (Radix UI), Lucide icons
- Redux Toolkit and RTK Query (cart, auth, API requests)
- React Router
- React Hook Form and Zod (form validation)
- Recharts (admin charts), Sonner (notifications)

**Backend**
- Node.js, Express 5, TypeScript
- PostgreSQL, Prisma ORM
- JWT and bcryptjs (authentication and password hashing)
- Zod (request validation), Helmet, CORS, express-rate-limit (security)

**Design:** Savor design system (Figma). Colors: red, cream, green, saffron and brown. Fonts: Playfair Display and DM Sans.

## Project structure

```
.
├── client/          # React app (Vite)
│   └── src/
│       ├── app/         # store, hooks, baseApi
│       ├── components/  # shared and page components
│       ├── features/    # auth, cart, products, orders (slices and API)
│       ├── pages/       # pages
│       └── lib/         # helpers
└── server/          # Express API
    ├── prisma/      # schema and seed
    └── src/         # routes, middleware, server.ts
```

## Running locally

**Requirements:** Node.js 20+ and a PostgreSQL database.

### 1. Clone the repository

```bash
git clone https://github.com/alinakoxayeva/bitego-website.git
cd bitego-website
```

### 2. Backend

```bash
cd server
npm install
```

Create `server/.env` (see `.env.example`):

```dotenv
DATABASE_URL=postgresql://user:password@localhost:5432/savor
PORT=4000
CLIENT_URL=http://localhost:5173
JWT_SECRET=your-strong-secret
```

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `PORT` | Server port |
| `CLIENT_URL` | Frontend URL (used for CORS) |
| `JWT_SECRET` | Secret used to sign tokens |

Set up the database, load demo data and start the server:

```bash
npx prisma migrate dev
npm run seed
npm run dev
```

The API runs at `http://localhost:4000`. To browse the database, run `npm run studio`.

### 3. Frontend

In a new terminal:

```bash
cd client
npm install
npm run dev
```

The site opens at `http://localhost:5173`. You may need to set the API URL in `client/.env` (the variable name is defined in the `baseApi` file).

### Production build

```bash
cd client
npm run build
```

## Demo accounts

| Role | Email | Password |
|---|---|---|
| Customer | user@dadli.az | User123! |
| Administrator | admin@dadli.az | Admin123! |

> These accounts are for demo purposes only.

## Deployment

- **Frontend:** Vercel
- **Backend and database:** the backend service and the PostgreSQL database are hosted separately

The backend may be on a free plan that sleeps when idle, so the first request after a break can take a little longer.

## Author

**Alina Kokhayeva** — Azerbaijan State Oil and Industry University, IT

GitHub: [alinakoxayeva](https://github.com/alinakoxayeva)
