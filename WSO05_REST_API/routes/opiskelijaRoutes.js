const express = require("express");
const Opiskelija = require("../models/opiskelija");
const mongoose = require("mongoose");
const { validateObjectId, validateOpiskelijaData } = require("../middleware/validator");

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
router.get("/:id", validateObjectId, async (req, res) => {
  try {
    const opiskelija = await Opiskelija.findById(req.params.id);
    if (!opiskelija) {
      return res.status(404).json({ error: "Opiskelija not found" });
    }
    res.status(200).json(opiskelija);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new document
router.post("/add", validateOpiskelijaData, async (req, res) => {
  const newData = new Opiskelija({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    group: req.body.group,
  });

  try {
    const dataToSave = await newData.save();
    res.status(201).json({
      success: true,
      message: "Opiskelija added successfully",
      data: dataToSave,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH (update) a document by ID
router.patch("/update/:id", validateObjectId, async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Opiskelija.findByIdAndUpdate(id, updatedData, options);
    if (!result) {
      return res.status(404).json({ error: "Opiskelija not found" });
    }
    res.status(200).json({
      success: true,
      message: "Update successful",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a document by ID
router.delete("/delete/:id", validateObjectId, async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Opiskelija.findByIdAndDelete(id);
    res.send(`Document ${data._id}:${data.name} has been deleted.`);
  }
  catch (error){
    res.status(500).json({ error: error.message});
  }
});

module.exports = router;
