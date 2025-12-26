# 🏫 School Management Dashboard

A full-stack **role-based School Management System** built using **Next.js (App Router) + TypeScript + Prisma + PostgreSQL**, with authentication handled by **Clerk**, image uploads via **Cloudinary**, and interactive features like charts and calendar.

This dashboard helps **Admins, Teachers, Students, and Parents** manage and view school-related data such as students, teachers, classes, attendance, exams, results, announcements, and events.

---

## 🚀 Features

### 🔐 Authentication & Roles
- Secure authentication using **Clerk**
- Role-based protected routes
- Middleware-based access control
- Role dashboards:
  - Admin
  - Teacher
  - Student
  - Parent

### 🧑‍🎓 Core Modules
- Students Management
- Teachers Management
- Classes & Sections
- Subjects
- Attendance
- Exams & Results
- Assignments
- Announcements
- Events & Calendar

### 📊 Dashboard Insights
- Attendance analytics
- Financial overview
- Performance charts
- Dynamic UI

### 🧰 Tech Support
- Next.js Server Actions CRUD
- Prisma ORM + PostgreSQL
- Cloudinary for media uploads
- Recharts for analytics
- FullCalendar integration
- Zod + React Hook Form validation
- Toast notifications
- Pagination & search

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14, React, TypeScript |
| Styling | Tailwind CSS |
| Auth | Clerk |
| Database | PostgreSQL |
| ORM | Prisma |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Calendar | FullCalendar |
| Uploads | Cloudinary |
| Notifications | React Toastify |

---

## 📂 Project Structure
```
src/
├── app/ # Next.js routes
├── components/
│ ├── forms/
│ ├── charts/
│ └── calendar/
├── lib/
│ ├── actions.ts
│ ├── prisma.ts
│ ├── settings.ts
│ └── validation/
├── middleware.ts
└── prisma/
├── schema.prisma
└── seed.ts
```

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB_NAME

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
## ▶️ Installation & Setup
### 1️⃣ Clone Repo
```
git clone https://github.com/your-username/school-dashboard.git
cd school-dashboard
```
### 2️⃣ Install Dependencies
```
npm install
```
### 3️⃣ Setup Prisma
```
npx prisma generate
npx prisma migrate dev
```
#### Optional seed:
```
npx prisma db seed
```
### 4️⃣ Run
```
npm run dev
```
#### Visit:
```
http://localhost:3000
```
## 🔐 Role-Based Access
Managed through:
- Clerk session
- Middleware validation
- ```routeAccessMap``` in ```src/lib/settings.ts```
- Unauthorized users are redirected

## 🖼️ Media Uploads
Uses Cloudinary for:
- Profile Images
- Media storage
- CDN optimized delivery
  
## 🛡️ Security
RBAC protected
- Validation on client + server
- Prisma to prevent injection
- Secure env variables
- Safe upload handling
## 🤝 Contributing
- PRs welcome 🎉
