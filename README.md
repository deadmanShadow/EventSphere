# 🚀 EventSphere - Making Events Simpler

**EventSphere** is a high-performance, full-stack event management ecosystem. Designed for scalability and visual excellence, it bridges the gap between event organizers and attendees with a seamless, role-based experience.

---

## ✨ Key Features

### 👤 For Attendees (Users)
- **Seamless Discovery:** Advanced filtering by category, date, and location.
- **Secure Ticketing:** Instant ticket booking powered by **Stripe**.
- **User Dashboard:** Track upcoming and past event bookings with real-time status updates.
- **Engaging Reviews:** Rate hosts and leave feedback on attended events.

### 🏢 For Organizers (Hosts)
- **Comprehensive Dashboard:** Analytics overview with Bar, Pie, and Line charts (Recharts).
- **Event Lifecycle:** Create, edit, and manage event details, pricing, and capacity.
- **Attendee Management:** Monitor ticket sales and manage event participants.
- **Media Management:** High-performance image uploads via **Cloudinary**.

### 🛠️ For Administrators
- **Platform Control:** Full oversight of users, hosts, and platform-wide events.
- **Management Tables:** Advanced, sortable dynamic tables for data management.
- **System Monitoring:** Track platform growth and revenue metrics.

---

## 🎨 Animation & UI/UX

EventSphere isn't just functional; it's an experience.
- **GSAP & Lenis:** Ultra-smooth scrolling and scroll-triggered reveal animations.
- **Framer Motion:** Fluid micro-interactions and page transitions.
- **Custom Design System:** Built with **Tailwind CSS 4** and **Shadcn UI** for a premium, modern aesthetic.
- **Glassmorphism:** Elegant UI elements with subtle blurs and gradients.

---

## 🛠️ Tech Stack

### Frontend (Client)
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4, Shadcn UI, Luicde React
- **Animations:** GSAP, Lenis, Framer Motion
- **Data Fetching:** Axios
- **State Management:** React 19 Hooks
- **Visualization:** Recharts (Dynamic Dashboards)

### Backend (Server)
- **Runtime:** Node.js (TypeScript)
- **Framework:** Express.js
- **ORM:** Prisma
- **Validation:** Zod
- **Security:** JWT, Bcrypt, Role-Based Access Control (RBAC)

### Infrastructure & Services
- **Database:** PostgreSQL
- **Payments:** Stripe (Checkout & Webhooks)
- **Storage:** Cloudinary
- **Deployment:** Vercel (Frontend), Render/Railway (Backend)

---






## 📂 Project Structure

```text
EventSphere/
├── client/              # Next.js Frontend
│   ├── src/
│   │   ├── app/        # App Router Pages
│   │   ├── components/ # Reusable UI Components
│   │   ├── hooks/      # Custom React Hooks
│   │   └── lib/        # Utilities & GSAP Init
├── server/              # Express.js Backend
│   ├── src/
│   │   ├── controllers/# Route Handlers
│   │   ├── routes/     # API Endpoints
│   │   ├── middleware/ # Auth & RBAC
│   │   └── server.ts   # Entry Point
│   └── prisma/          # Database Schema
└── README.md
```





