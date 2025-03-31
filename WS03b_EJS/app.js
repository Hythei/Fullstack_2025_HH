const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("views/public"));

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

//Ex 1
app.set("view engine", "ejs");

app.get("/message", (req, res) => {
  res.render("message", { name: "General Kenobi" });
});

//ex2 & ex5
app.get("/", (req, res) => {
  let message =
    "Here we have an example of EJS iterating through a list of items";
  let data = {
    items: ["item1", "item2", "item3", "item4"],
  };
  let boolean_value = true;
  let users = [
    {name: "Laszlo", age: "30", id: "1111"},
    {name: "Nandor", age: "31", id: "2222"},
    {name: "Nadja", age: "32", id: "3333"},
    {name: "Robin", age: "33", id: "4444"},
    {name: "Guillermo", age: "34", id: "5555"},
  ]
  res.render("index", { data: data, message: message, boolean: boolean_value, users: users });
});

//ex3
// Lisätty "partials" -kansioon

