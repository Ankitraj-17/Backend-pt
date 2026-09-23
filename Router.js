const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Log every incoming request so you can see it in Render Logs
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} request to ${req.url}`);
    next();
});

// Home / Root route
app.get('/', (req, res) => {
    res.send(`
        <h2>Server is running live on Render! 🚀</h2>
        <p>Available routes:</p>
        <ul>
            <li><a href="/name">/name</a> (GET)</li>
            <li><a href="/contact">/contact</a> (GET)</li>
            <li>/help (POST)</li>
        </ul>
    `);
});

app.get('/name', (req, res) => {
    res.json({ message: "Hey I am Ankitraj" });
});

app.get('/contact', (req, res) => {
    res.json({ email: "[EMAIL_ADDRESS]", phone: "1234567890" });
});

app.post('/help', (req, res) => {
    const data = req.body;
    res.json({ message: "Done!!", receivedData: data });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
