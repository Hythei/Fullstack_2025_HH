const express = require("express");
const Opiskelija = require("../models/opiskelija");

const router = express.Router();

// GET all documents
router.get("/getall", async (req, res) => {
  try {
    const opiskelijat = await Opiskelija.find();
    res.status(200).json(opiskelijat);
    console.log(opiskelijat);
    
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});



// GET a single document by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const opiskelija = await.Opisk
//   }
// });

// POST a new document
router.post('/add', async (req, res) => {
  const newData = new Opiskelija({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    group:req.body.group,
  })
  try {
    const dataToSave = await newData.save();
    res.status(200).json(dataToSave)
  }
  catch (error){
    res.status(500).json({ error: error.message });
  }
>>>>>>> 46f462463b49dfd52dc9e55c39cd5f5dcb9da21e
});

// PATCH (update) a document by ID
router.patch("/update/:id", async (req, res) => {
  res.status(200).json({ message: "PATCH request received" });
});

// DELETE a document by ID
router.delete("/delete/:id", async (req, res) => {
  res.status(200).json({ message: "DELETE request received" });
});

module.exports = router;
