const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


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