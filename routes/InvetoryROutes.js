const express = require("express");
const router = express.Router();
const { getAllItems, getItem, addItem, updateItem, deleteItem } = require("../controllers/inventoryController");

// Define Routes
router.get("/", getAllItems);
router.get("/:id", getItem);
router.post("/", addItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
