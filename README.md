# SmartSpend.ai

An AI-powered personal finance management platform that helps users track expenses, analyze spending patterns, and receive personalized AI-powered financial insights.

> Currently under active development (Build in Public)

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- HTTP Only Cookie Authentication
- Protected Routes

---

## Transaction Management

- Create Transaction
- Get All Transactions
- Get Transaction by ID
- Update Transaction
- Delete Transaction

---

## Dashboard Analytics

- Dashboard Summary
- Category-wise Expense Summary
- Current Month Summary
- Monthly Income vs Expense Analytics
- Recent Transactions

---

## AI Financial Advisor

Generate personalized financial insights based on your transaction history.

AI provides:

- Spending Analysis
- Budget Recommendations
- Saving Suggestions
- Overspending Detection
- Personalized Financial Tips

---

## Advanced Features

- Pagination
- Search
- Filtering
- Prisma Aggregation
- Prisma GroupBy
- Zod Validation
- Global Error Handling
- Layered Architecture
- Prompt Builder
- Gemini AI Provider
- Clean Service-Based Architecture

---

# Tech Stack

## Backend

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Zod Validation
- Gemini AI API
- Docker
- bcrypt

## Database

- PostgreSQL

---

# 📁 Project Structure

```text
src/
│
├── constants/
├── controllers/
├── middlewares/
├── providers/
├── routes/
├── services/
├── utils/
├── validators/
├── lib/
```

---

# API Endpoints

## Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

---

## Transactions

POST /api/transactions

GET /api/transactions

GET /api/transactions/:id

PATCH /api/transactions/:id

DELETE /api/transactions/:id

Supports:

- Pagination
- Search
- Filtering

---

## Dashboard

GET /api/dashboard/summary

GET /api/dashboard/summary-by-category

GET /api/dashboard/current-month-summary

GET /api/dashboard/monthly-summary

---

## AI

GET /api/ai/insights

Returns AI-generated financial analysis and recommendations.

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

GEMINI_API_KEY=

GEMINI_MODEL=
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

## Start Development Server

```bash
npm run dev
```

---

# 🚧 Upcoming Features

- Budget Planning
- Spending Trend Charts
- Smart Budget Alerts
- AI Chat Assistant
- Frontend Dashboard (Next.js)
- Deployment

---

# 📌 Current Status

## ✅ Backend

- Authentication
- Transaction Management
- Dashboard Analytics
- AI Financial Advisor

## 🚧 In Progress

- Frontend Dashboard
- Deployment

---

⭐ If you like this project, consider giving it a star!