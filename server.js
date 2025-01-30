require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const {connectDB }= require("./config/db");



const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const inventoryRoutes = require("./routes/InvetoryROutes");
app.use("/api/inventory", inventoryRoutes);

connectDB();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
