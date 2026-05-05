const express = require("express");
const Item = require("../models/Item");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// GET items by list
router.get("/:listId", auth, async (req, res) => {
  const items = await Item.find({ listId: req.params.listId });
  res.json(items);
});

// CREATE item
router.post("/:listId", auth, async (req, res) => {
  const item = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    prices: req.body.prices,
    listId: req.params.listId
  });

  await item.save();
  res.json(item);
});

// UPDATE item
router.put("/:id", auth, async (req, res) => {
  await Item.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
});

// DELETE item
router.delete("/:id", auth, async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;