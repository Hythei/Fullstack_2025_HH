const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('./public'));


app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/services', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});


app.get("*", (req, res) => {
    res.status(404).send("Cannot find the requested page.")
});