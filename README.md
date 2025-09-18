# Move37 Ventures – Real-Time Polling Backend

A Node.js + Express backend for a real-time polling application with PostgreSQL and Prisma ORM, supporting live vote updates via WebSockets.

---

## Features

- User management (create and fetch users)  
- Poll creation with multiple options  
- Voting system with prevention of duplicate votes per poll  
- Real-time updates for poll results via WebSockets  
- Fully RESTful API endpoints  
- PostgreSQL database with Prisma ORM  
- Easy setup and deployment  

---

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **ORM:** Prisma  
- **Real-time:** WebSockets (`ws` or `socket.io`)  
- **Environment Variables:** dotenv  

---

## Project Structure

move-37-assignment/
├─ src/
│ ├─ controllers/ # API logic (users, polls, votes)
│ ├─ middleware/ # Error handling, auth, etc.
│ ├─ models/ # Prisma client & database models
│ ├─ routes/ # API routes
│ ├─ utility/ # Helper functions, WebSocket handlers
│ └─ index.js # Server entry point
├─ prisma/
│ ├─ schema.prisma # Database schema
│ └─ migrations/
├─ generated/
│ └─ prisma/ # Prisma client
├─ .env # Environment variables
├─ package.json
└─ README.md

yaml
Copy code

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-github-repo-link>
cd move-37-assignment
2. Install dependencies
bash
Copy code
npm install
3. Set up PostgreSQL
Create a database, e.g., poll-voting-assignment

Update .env file:

env
Copy code
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/poll-voting-assignment?schema=public"
PORT=3000
4. Run Prisma Migrations
bash
Copy code
npx prisma migrate dev --name init
5. Generate Prisma Client
bash
Copy code
npx prisma generate
6. Start the server
bash
Copy code
npm run dev
Server runs on: http://localhost:3000

API Endpoints (Postman Examples)
Users
POST /api/users – Create user

json
Copy code
{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "secret123"
}
GET /api/users – Get all users

Polls
POST /api/polls – Create poll

json
Copy code
{
  "creatorId": 1,
  "question": "What is your favorite programming language?",
  "options": ["JavaScript", "Python", "Go"]
}
GET /api/polls – Get all polls

GET /api/polls/:id – Get poll by ID with options & votes

Votes
POST /api/votes – Cast a vote

json
Copy code
{
  "userId": 1,
  "optionId": 2
}
Duplicate votes per poll are automatically prevented.

Real-Time Updates
WebSocket server broadcasts updated vote counts for all connected clients when a vote is cast.

Clients can subscribe to poll results via WebSocket.

Notes
Ensure PostgreSQL is running locally.

Use npm run dev with nodemon for hot reloads.

Test endpoints using Postman or similar tools.

yaml
Copy code

---

If you want, I can also **create a ready-to-import Postman collection JSON** for all endpoints (`users`, `polls`, `votes`) so anyone can test your backend immediately.  

Do you want me to make that?



