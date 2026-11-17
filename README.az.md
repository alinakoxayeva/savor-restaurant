# Savor 🍽️

🌐 [English](README.md) | **Azərbaycanca**

**Savor** — restoran üçün onlayn yemək sifarişi saytıdır. İstifadəçi menyuya baxır, yeməkləri səbətə əlavə edir, ünvanını yazıb sifariş verir və sifarişin statusunu canlı izləyir. Administrator isə menyunu, sifarişləri və istifadəçiləri idarə edir, satış statistikasına baxır.

🔗 **Canlı sayt:** https://bitego-website.vercel.app/

> Qeyd: layihənin ilkin adı BiteGo idi, indi Savor adlanır. Canlı linkdə köhnə ad qalıb.

## Ekran görüntüləri

| Ana səhifə | Menyu |
|---|---|
| ![Ana səhifə](docs/screenshots/home.png) | ![Menyu](docs/screenshots/menu.png) |

| Səbət | Admin panel |
|---|---|
| ![Səbət](docs/screenshots/cart.png) | ![Admin panel](docs/screenshots/admin.png) |

**Mobil görünüş**

![Mobil](docs/screenshots/mobile.png)

## Funksiyalar

### İstifadəçi üçün
- Qeydiyyat və giriş (JWT ilə autentifikasiya)
- Menyu: axtarış, kateqoriyaya görə filtr, çeşidləmə (qiymət, ad, yeni) və səhifələmə
- Məşhur yeməklər və kateqoriyalar ana səhifədə
- Məhsul səhifəsi və miqdar seçimi
- Səbət: miqdarı artırıb azaltmaq, məhsulu silmək, səbəti təmizləmək
- Sifarişin rəsmiləşdirilməsi: ünvan, telefon, qeyd və ödəniş üsulu (nağd və ya kart simulyasiyası)
- Sifarişlərim: siyahı və ətraflı səhifə
- Sifariş statusunun canlı izlənməsi (təsdiq, hazırlanma, yolda, çatdırıldı) və gözləyən sifarişi ləğv etmək
- Mobil uyğun dizayn

### Administrator üçün
- Dashboard: satış statistikası və qrafiklər
- Sifarişlərin idarəsi və status dəyişmə
- Məhsulların və kateqoriyaların idarəsi
- İstifadəçilərin siyahısı

## Texnologiyalar

**Frontend**
- React 19, TypeScript, Vite
- Tailwind CSS 4, shadcn/ui (Radix UI), Lucide ikonları
- Redux Toolkit və RTK Query (səbət, autentifikasiya, API sorğuları)
- React Router
- React Hook Form və Zod (formaların yoxlanması)
- Recharts (admin qrafikləri), Sonner (bildirişlər)

**Backend**
- Node.js, Express 5, TypeScript
- PostgreSQL, Prisma ORM
- JWT və bcryptjs (autentifikasiya və parolların şifrələnməsi)
- Zod (sorğu yoxlaması), Helmet, CORS, express-rate-limit (təhlükəsizlik)

**Dizayn:** Savor dizayn sistemi (Figma). Rənglər: qırmızı, krem, yaşıl, safran və qəhvəyi. Şriftlər: Playfair Display və DM Sans.

## Qovluq quruluşu

```
.
├── client/          # React tətbiqi (Vite)
│   └── src/
│       ├── app/         # store, hooks, baseApi
│       ├── components/  # ortaq və səhifə komponentləri
│       ├── features/    # auth, cart, products, orders (slice və API)
│       ├── pages/       # səhifələr
│       └── lib/         # köməkçi funksiyalar
└── server/          # Express API
    ├── prisma/      # sxem və seed
    └── src/         # marşrutlar, middleware, server.ts
```

## Lokal işə salma

**Tələblər:** Node.js 20+ və PostgreSQL verilənlər bazası.

### 1. Layihəni yüklə

```bash
git clone https://github.com/alinakoxayeva/bitego-website.git
cd bitego-website
```

### 2. Backend

```bash
cd server
npm install
```

`server/.env` faylı yarat (nümunə `.env.example` faylındadır):

```dotenv
DATABASE_URL=postgresql://istifadeci:parol@localhost:5432/savor
PORT=4000
CLIENT_URL=http://localhost:5173
JWT_SECRET=guclu-gizli-acar
```

| Dəyişən | Təsvir |
|---|---|
| `DATABASE_URL` | PostgreSQL bağlantı ünvanı |
| `PORT` | Serverin portu |
| `CLIENT_URL` | Frontend ünvanı (CORS üçün) |
| `JWT_SECRET` | Token imzalamaq üçün gizli açar |

Verilənlər bazasını qur və demo məlumatları yüklə:

```bash
npx prisma migrate dev
npm run seed
npm run dev
```

Server işə düşəndən sonra API `http://localhost:4000` ünvanında olur. Bazaya baxmaq üçün: `npm run studio`.

### 3. Frontend

Yeni terminalda:

```bash
cd client
npm install
npm run dev
```

Sayt `http://localhost:5173` ünvanında açılır. API ünvanını `client/.env` faylında göstərmək lazım ola bilər (dəyişənin adı `baseApi` faylındadır).

### Build

```bash
cd client
npm run build
```

## Demo hesablar

| Rol | Email | Parol |
|---|---|---|
| İstifadəçi | user@dadli.az | User123! |
| Administrator | ADMIN_EMAIL | ADMIN_PAROL |

> Bunlar yalnız demo üçündür.

## Deploy

- **Frontend:** Vercel
- **Backend və verilənlər bazası:** backend xidməti və PostgreSQL bazası ayrıca host olunur

Backend pulsuz planda yatmış rejimdə ola bilər, ona görə saytın ilk açılışı bir az gec ola bilər.

## Müəllif

**Alina Kokhayeva** — Azərbaycan Dövlət Neft və Sənaye Universiteti, İT

GitHub: [alinakoxayeva](https://github.com/alinakoxayeva)