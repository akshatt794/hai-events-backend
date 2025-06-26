# Hai Events Backend

This is the backend API for the Hai Events platform, built with Node.js, Express, PostgreSQL, and Sequelize ORM.

## 🚀 Features

- User registration & authentication (JWT)
- Admin-only event management (CRUD)
- Public event listing API
- Secure password storage (bcrypt)
- Role-based access control

## 📦 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT for authentication

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/akshatt794/hai-events-backend.git
    cd hai-events-backend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Create the `.env` file** in the project root (see example below).

4. **Run migrations to set up the database**
    ```bash
    npx sequelize-cli db:migrate
    ```

5. **Start the backend server**
    ```bash
    npm run dev
    ```

### Example `.env` file

```env
PORT=3000
DB_URL=postgres://postgres:Akshat903%23@localhost:5000/haieventsdb
JWT_SECRET=myverysecurejwtsecret
