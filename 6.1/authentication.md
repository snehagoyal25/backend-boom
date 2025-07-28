app.use(express.json()); 

// When a client (like Postman, browser, or frontend app) sends JSON data in a request body (usually with POST or PUT), this line ensures your Express app can read and access that data using req.body.

// 📦 Why it's needed?

// Because Node.js doesn’t parse incoming JSON by default.
// This middleware:
// Reads raw incoming request
// Parses the JSON
// Adds it to req.body for easy use

//In older versions of Express (<4.16), you had to install body-parser separately. Now, express.json() is built-in.


add npm install jsonwebtoken

npm init -y
npm install express 
npm install jsonwebtoken