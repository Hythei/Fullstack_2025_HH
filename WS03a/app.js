const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ex 3, parsii JSON ja url dataa
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Testattu postmanilla

//ex 4, ennen reittejä, jottei tule pyyntöjen kanssa ongelmia.
const logger = function (req, res, next){
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const fullUrl = `Requsted: ${protocol}://${host}:${port}${url}`;

    console.log(fullUrl);
    
    next();
}
app.use(logger);

//ex 1 & 2

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

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Data Received: ${JSON.stringify(data)}`);
});

//EX 5, tekstitiedoston luku
app.get('/list', (req, res) => {
    const textFile = path.join(__dirname, 'public/ex5_files','ex5_text.txt');

    fs.readFile(textFile, 'utf8', (err, data) => {
        if (err) {
            console.log('Error tekstin kanssa');
            return res.status(500).send('Errori/onkelma');
        }
        res.send(data);
    });
});

//JSON luku
// Tämä hakee sen raa'an JSON datan
app.get('/api/json', (req, res) => {
    const jsonFile = path.join(__dirname, 'public/ex5_files', 'json_file.json');
    fs.readFile(jsonFile, 'utf8', (err, data) => {
        if (err){
            return res.status(500).send('Errori json kanssa');
        }
        res.send(data);
    });
});

app.get('/json', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'JSON_data.html'));
});

app.post('/add', (req, res) =>{
    const newData = req.body;
    const jsonFile = path.join(__dirname, 'public/ex5_files', 'json_file.json');

    //Meidän on aluksi luettava se tiedosto, että voimme kirjoittaa sinne mitään
    fs.readFile(jsonFile, 'utf8', (err, data) => {
        if(err){
            console.log('Error JSONin kanssa', err);
            return res.status(500).send('Error JSON tiedoston kanssa');
        }
        try {
            //Parsitaan data
            const jsonJutut = JSON.parse(data);
            //Pusketaan uusi data sisälle
            jsonJutut.push(newData);
            //Kirjoitetaan uusi data sisälle tiedostoon
            //Tähän vois kirjoittaa vaikka mitä validointia, mutta päätin tehdä "yksinkertaisen"
            fs.writeFile(jsonFile, JSON.stringify(jsonJutut, null, 2), 'utf8', (writeErr) =>{
                if (writeErr) {
                    console.error('Error writing to the JSON file, yay:', writeErr);
                    return res.status(500).send('Error writing to the JSON file');
                }
            });
        } catch (parseErr){
            console.error('Error JSON parsinnan kanssa:', parseErr);
            return res.status(500).send('Error JSON parsinnan kanssa');
        }
    });
});
//Testattu Postmanilla ja välillä toimii, mutta välilä luo tyhjän ohjektin. Jatkan tutkimista.


app.get("*", (req, res) => {
    res.status(404).send("Cannot find the requested page.")
});




