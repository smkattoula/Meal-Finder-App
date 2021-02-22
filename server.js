const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/groceries", require("./routes/groceries"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
