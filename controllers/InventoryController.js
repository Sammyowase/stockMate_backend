const Inventory = require("../models/Inventory");

// Get All Inventory Items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get Single Item
exports.getItem = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Add Inventory Item
exports.addItem = async (req, res) => {
  try {
    const { name, quantity, price, category, supplier } = req.body;
    const newItem = new Inventory({ name, quantity, price, category, supplier });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Update Inventory Item
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: "Item not found" });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete Inventory Item
exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Inventory.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: "Item not found" });
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
