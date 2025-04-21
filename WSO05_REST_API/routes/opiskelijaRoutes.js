const express = require("express");
const Opiskelija = require("../models/opiskelija");

const router = express.Router();

// GET all documents
router.get("/getall", async (req, res) => {
  try {
    const opiskelijat = await Opiskelija.find();
    res.status(200).json(opiskelijat);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

//Tekase MongoDB uusi database, opiskelijat, jonne opiskelijas collection
// GET a single document by ID

// POST a new document
router.post("/add", async (req, res) => {
  res.status(200).json({ message: "POST request received" });
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
