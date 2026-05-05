const express = require("express");
const List = require("../models/List");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// GET all lists
router.get("/", auth, async (req, res) => {
  const lists = await List.find({ userId: req.user.id });
  res.json(lists);
});

// CREATE list
router.post("/", auth, async (req, res) => {
  const list = new List({
    name: req.body.name,
    budget: req.body.budget,
    userId: req.user.id
  });

  await list.save();
  res.json(list);
});

// UPDATE list
router.put("/:id", auth, async (req, res) => {
  await List.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body
  );
  res.json({ message: "Updated" });
});

// DELETE list
router.delete("/:id", auth, async (req, res) => {
  await List.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id
  });

  res.json({ message: "Deleted" });
});

module.exports = router;