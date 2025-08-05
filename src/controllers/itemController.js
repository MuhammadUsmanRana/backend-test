const Item = require("../models/item");

const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    console.log("🚀 ~ createItem ~ newItem:", newItem);
    const savedItem = await newItem.save();
    res.status(201).json({
      data: savedItem,
      message: "Item created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    console.log("🚀 ~ getItems ~ items:", items);
    res.status(200).json({
      data: items,
      message: "Items retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json({
      data: item,
      message: "Item retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateItem = async (req, res) => {
  console.log("🚀 ~ updateItem ~ req:", req.body);
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      data: updatedItem,
      message: "Item updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  console.log("🚀 ~ deleteItem ~ req:", req.params);
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: "Item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
};
