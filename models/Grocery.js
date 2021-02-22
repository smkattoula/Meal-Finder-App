const mongoose = require("mongoose");

const GrocerySchema = mongoose.Schema({
  groceryItem: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("grocery", GrocerySchema);
