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
│  ├─ controllers/      # API logic (users, polls, votes)
│  ├─ middleware/       # Error handling, auth, etc.
│  ├─ models/           # Prisma client & database models
│  ├─ routes/           # API routes
│  ├─ utility/          # Helper functions, WebSocket handlers
│  └─ index.js          # Server entry point
├─ prisma/
│  ├─ schema.prisma     # Database schema
│  └─ migrations/
├─ generated/
│  └─ prisma/           # Prisma client
├─ .env                 # Environment variables
├─ package.json
└─ README.md



