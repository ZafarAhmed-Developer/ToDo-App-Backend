import express from "express";
import Todo from "../models/todo.js";

const router = express.Router();

// GET all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD todo
router.post("/", async (req, res) => {
  try {
    console.log("📥 Request Body:", req.body);

    if (!req.body.title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = new Todo(req.body);
    const saved = await newTodo.save();
    console.log("✅ Saved:", saved);
    res.json(saved);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(400).json({ message: err.message });
  }
});

// UPDATE todo
router.put("/:id", async (req, res) => {
  try {
    console.log("📥 Update Request:", req.params.id, req.body);
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("✅ Updated:", updated);
    res.json(updated);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(400).json({ message: err.message });
  }
});


// DELETE todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
