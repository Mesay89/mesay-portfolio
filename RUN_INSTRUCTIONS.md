# 🚀 How to Run Mesay Portfolio

## 📋 Quick Start

Your portfolio is ready to run! Choose your preferred method:

### 🎯 Method 1: Frontend Only (Instant)
Perfect for viewing the portfolio without backend functionality.

```bash
# Navigate to client folder
cd client

# Start the portfolio (choose one):
npm start                    # Uses serve package
python -m http.server 3000   # Uses Python (if installed)
npx serve . -p 3000         # Uses npx serve
```

**Open**: http://localhost:3000

**What works**: Everything except contact form email sending

---

### 🎯 Method 2: Full MERN Stack (Complete)
Run both frontend and backend for full functionality.

#### Terminal 1 - Backend:
```bash
cd server
npm install
npm start
```
**Backend runs on**: http://localhost:5001

#### Terminal 2 - Frontend:
```bash
cd client
npm start
```
**Frontend runs on**: http://localhost:3000

**What works**: Everything including contact form with email notifications

---

## 🔧 Prerequisites

### For Frontend Only:
- Any modern web browser
- Optional: Python or Node.js for local server

### For Full Stack:
- Node.js (v14 or higher)
- MongoDB (local) OR MongoDB Atlas account
- Gmail account (for contact form emails)

---

## 📊 Environment Setup (Full Stack)

### 1. Install Dependencies:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies (optional)
cd ../client
npm install
```

### 2. Configure Environment Variables:
Create `server/.env` file:
```env
NODE_ENV=development
PORT=5001
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=mesayboja3@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 3. Setup Gmail App Password:
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. App Passwords → Generate for "Mail"
4. Use generated password in `.env` file

---

## 🚨 Troubleshooting

### Frontend Issues:
```bash
# If npm start fails, try:
cd client
npx serve . -p 3000

# Or use Python:
python -m http.server 3000
```

### Backend Issues:
```bash
# If MongoDB connection fails:
# 1. Install MongoDB locally, OR
# 2. Use MongoDB Atlas (cloud)
# 3. Update MONGODB_URI in .env
```

### Port Conflicts:
```bash
# If port 3000 is busy:
npx serve . -p 3001

# If port 5001 is busy, update server/.env:
PORT=5002
```

---

## 📱 Testing Features

### ✅ What to Test:
- Navigation menu (desktop & mobile)
- Typewriter effect in hero section
- Responsive design on different screen sizes
- Floating action buttons
- Dark/Light theme toggle
- Contact form (if running full stack)
- Smooth scrolling between sections

### 📧 Contact Form Testing:
1. Fill out the contact form
2. Check console for any errors
3. Check your email for notifications
4. Verify auto-reply is sent to form submitter

---

## 🎯 Development Commands

### Frontend Development:
```bash
cd client
# Edit files in client/ folder
# Refresh browser to see changes
```

### Backend Development:
```bash
cd server
# Install nodemon for auto-restart:
npm install -g nodemon
nodemon server.js

# Or use regular node:
node server.js
```

---

## 🌐 Production Testing

### Test Production Build:
```bash
# Test how it will work when deployed
cd client
npx serve . -p 3000
```

### Test Backend API:
```bash
cd server
NODE_ENV=production npm start
```

---

## 📊 Project Structure

```
Mesay_Portfolio/
├── client/                 # Frontend (React in HTML)
│   ├── index.html         # Main portfolio file
│   ├── package.json       # Frontend dependencies
│   └── vercel.json        # Deployment config
├── server/                # Backend (Node.js/Express)
│   ├── server.js          # Main server file
│   ├── routes/            # API routes
│   ├── models/            # Database models
│   └── .env               # Environment variables
└── DEPLOYMENT_GUIDE.md    # How to deploy online
```

---

## 🎉 Next Steps

1. **Customize Content**:
   - Update personal information
   - Add your real photo
   - Modify skills and projects

2. **Test Everything**:
   - Try all navigation links
   - Test on mobile devices
   - Verify contact form works

3. **Deploy Online**:
   - Follow `DEPLOYMENT_GUIDE.md`
   - Share your live portfolio URL

**Your portfolio is ready to impress! 🌟**

Need help? Check the troubleshooting section or ask for assistance!