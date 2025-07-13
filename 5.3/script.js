// npm init -y
// npm install express
// npm install cors 

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
