const express = require("express");
const app = express();
const port =  3000;

app.listen(port, ()=> {
    console.log(`Running on port: ${port}`);
});

//Ex 1
app.set("view engine", "ejs");

app.get("/message", (req, res) => {
    res.render("message", {name : 'General Kenobi'});
});

//ex2
app.get("/", (req, res) => {
    let message = "Here we have an example of EJS iterating through a list of items";
    let data = {
        items: [
            "item1",
            "item2",
            "item3",
            "item4",
        ]
    };

    res.render("index", {data: data, message: message});
});

//ex3
// Lisätty "partials" -kansioon


