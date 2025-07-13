// 🛑 What is CORS?
// CORS = Cross-Origin Resource Sharing
// It’s a security feature built into browsers that controls which websites can talk to which servers.

// 😕 The Problem:
// Let’s say you have:
// Frontend at: http://localhost:3000
// Backend API at: http://localhost:3001

// When your frontend tries to call your backend like:

// fetch("http://localhost:3001/sum")
// 👉 The browser says:
// "Hold up! This is a different origin (port is different)... Is this allowed??"
// By default, NO.

// ✅ The Solution: Use CORS!
// You tell your backend:
// “Hey backend, it’s okay to accept requests from that frontend.”
// In Node.js (Express), you enable it like this:

// const cors = require('cors');
// app.use(cors());
// This says:
// “Allow all websites to access my backend.”
// 🔒 Want to allow only one website?

// app.use(cors({
//   origin: "http://localhost:3000" // only allow this origin
// }));

