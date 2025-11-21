# 📹 Zoom App – Real-Time Video Conferencing Platform

A production-ready **Zoom-like video meeting application** built with **React + Node.js + WebRTC + Socket.io**.  
Supports **multi-user video conferencing**, **real-time chat**, **meeting rooms**, and **authentication**.

---

## 🚀 Live Demo

🔗 **Frontend:** https://zoom-app-5.onrender.com  
🔗 **Backend API:** https://zoom-backend.onrender.com  

---

## ✨ Features

- 🔐 User Authentication (JWT)  
- 🎥 Real-Time Video Calling (WebRTC)  
- 👥 Multi-User Meeting Rooms  
- 💬 Real-Time Chat (Socket.io)  
- 🏠 Create / Join Rooms  
- 📡 Peer-to-Peer Connection  
- 📱 Responsive UI  
- 🚀 Production Deployment on Render  

---

## 🏗️ System Architecture



 ┌───────────────┐       HTTP / HTTPS        ┌────────────────┐
 │   Frontend     │--------------------------▶│   Backend API  │
 │ React + WebRTC │                           │  Node + Express│
 └───────────────┘◀---------Socket.io--------▶└────────────────┘
          │                                           │
          │                                           │
          ▼                                           ▼
   WebRTC Peer Connections                    MongoDB Database

#🛠️ Tech Stack
Frontend

- React.js

- WebRTC

- Socket.io-client

- Tailwind CSS

- Backend

- Node.js

- Express.js

- MongoDB (Mongoose)

- JWT Authentication

- Socket.io

##Deployment

Render Web Service (Backend)

Render Static Site (Frontend)

##📦 Installation (Local Setup)
1. Clone the Repository
git clone <your-repo-link>
cd project-folder

#2. Install Backend
cd backend
npm install


Create .env file:

MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
PORT=8000


#Run backend:
npm start

3. Install Frontend
cd ../frontend
npm install


Update backend URL:

let IS_PROD = false;
const server = IS_PROD ? "your-render-backend-url" : "http://localhost:8000";
export default server;


Run frontend:

npm start

🚀 Deployment (Render)
Backend

Create Web Service

Build Command: npm install

Start Command: npm start

Add Environment variables (Mongo, JWT, etc.)

Frontend

Create Static Site

Build Command: npm install && npm run build

Publish Directory: frontend/build

Add backend API URL in frontend config:

let IS_PROD = true;
const server = "https://zoom-backend.onrender.com";

