# 💰 SmartSpend.ai

An AI-powered personal finance management platform that helps users track expenses, analyze spending patterns, and receive AI-powered financial insights.

> 🚀 Currently under active development (Build in Public)

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- HTTP Only Cookie Authentication
- Protected Routes

---

## 💸 Transaction Management

- Create Transaction
- Get All Transactions
- Get Transaction by ID
- Update Transaction
- Delete Transaction

---

## 📊 Dashboard Analytics

- Dashboard Summary
- Category-wise Expense Summary
- Current Month Summary
- Monthly Analytics

---

## ⚡ Advanced Features

- Pagination
- Search
- Filtering
- Zod Validation
- Global Error Handling
- Clean Architecture

---

# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT
- Zod
- Docker
- bcrypt

## Database

- PostgreSQL

---

# 📁 Project Structure

```
src/
│
├── controllers/
├── services/
├── routes/
├── middlewares/
├── validators/
├── utils/
├── lib/
├── constants/
```

---

# 📡 API Endpoints

## Authentication

POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

GET /api/auth/me

---

## Transactions

POST /api/transactions

GET /api/transactions

GET /api/transactions/:id

PATCH /api/transactions/:id

DELETE /api/transactions/:id

---

## Dashboard

GET /api/dashboard/summary

GET /api/dashboard/category-summary

GET /api/dashboard/current-month

GET /api/dashboard/monthly-summary

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone <repository-url>
```

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env` file.

```env
DATABASE_URL=

JWT_SECRET=

PORT=
```

## Run Docker

```bash
docker compose up -d
```

## Generate Prisma Client

```bash
npx prisma generate
```

## Run Migrations

```bash
npx prisma migrate dev
```

## Start Server

```bash
npm run dev
```

---

# 🚧 Upcoming Features

- AI Financial Advisor
- Budget Planning
- Spending Trends
- Smart Recommendations
- Notifications
- Frontend (Next.js)
- Deployment

---

# 📌 Status

🟢 Backend ~90% Complete

🔄 AI Features In Progress

🚀 Build in Public