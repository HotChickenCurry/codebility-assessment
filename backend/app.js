const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json()); // for JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // for form data

// In-memory todos
let todos = [
  { id: 1, title: "Learn Node.js", completed: false, createdAt: new Date() },
  { id: 2, title: "Build a Todo API", completed: false, createdAt: new Date() },
];

// ========== ROUTES ==========

// 1. GET all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// 2. GET a single todo by ID
app.get("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

// 3. POST (create a new todo)
app.post("/api/todos", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    title,
    completed: false,
    createdAt: new Date(),
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 4. PUT (update a todo)
app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// 5. DELETE (remove a todo)
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ API running at http://localhost:${PORT}`);
});
