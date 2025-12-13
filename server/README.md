# 🚀 EventSphere Backend

EventSphere Backend is a scalable and production-ready REST API for managing events, tickets, users, and payments.  
Built using **Node.js**, **Express**, **TypeScript**, **Prisma**, **PostgreSQL**, and **Stripe**.


---

## 🛠️ Tech Stack

- **Runtime:** Node.js + TypeScript  
- **Framework:** Express.js  
- **Database:** PostgreSQL  
- **ORM:** Prisma  
- **Authentication:** JWT + bcrypt  
- **File Uploads:** Cloudinary  
- **Validation:** Zod  
- **Payments:** Stripe (Checkout & Webhooks)  
- **Logging:** Morgan / Winston  
- **Deployment:** Render / Railway / Vercel / AWS  

---

## ✨ Features

- User registration, login, and JWT authentication
- Role-based authorization (Admin / Organizer / User)
- Event CRUD operations
- Ticket creation & event-based ticketing
- Stripe Checkout for ticket purchase
- Stripe Webhook handler for payment verification
- Cloudinary image uploads for events
- Prisma migrations, seeding, and database management
- Zod-powered safe validation for all routes


# 🔐 Admin Credentials

These are the default Admin credentials for accessing the **EventSphere Admin Dashboard**.

> ⚠️ **Important:**  
> Change these credentials immediately in production.  
> Never expose real credentials in a public repository.

---

## 👤 Default Admin Login

```env
ADMIN_EMAIL=raihanshamil33@gmail.com
ADMIN_PASSWORD=shamil123


