const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const cafeRoutes = require("./routes/cafeRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Matcha Map API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/cafes", cafeRoutes);
app.use("/api", reviewRoutes);

module.exports = app;