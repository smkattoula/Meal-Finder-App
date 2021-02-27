const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const Grocery = require("../models/Grocery");

// Get All Groceries Items
router.get("/", auth, async (req, res) => {
  try {
    const getGroceries = await Grocery.find({}).sort({
      date: -1,
    });

    res.json(getGroceries);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

// Get a Single Grocery Item
router.get("/:id", async (req, res) => {
  try {
    const getGrocery = await Grocery.findById(req.params.id);

    res.json(getGrocery);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

// Add a Grocery Item
router.post("/", auth, async (req, res) => {
  try {
    const { groceryItem } = req.body;

    const newGrocery = new Grocery({
      user: req.user.id,
      groceryItem,
    });

    const grocery = await newGrocery.save();
    res.json(grocery);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

// Update a Grocery Item
router.put("/:id", auth, async (req, res) => {
  try {
    const grocery = await Grocery.findById(req.params.id);

    if (grocery) {
      grocery.groceryItem = req.body.groceryItem;
    }

    const updatedGrocery = await grocery.save();
    res.json(updatedGrocery);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

// Delete a Grocery Item
router.delete("/:id", auth, async (req, res) => {
  try {
    let grocery = await Grocery.findById(req.params.id);

    if (!grocery) {
      res.status(404).json("Grocery Item Not Found");
    }

    await Grocery.findByIdAndRemove(req.params.id);
    res.json("Grocery Item Deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
