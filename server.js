const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: This allows your server to read and parse incoming JSON data packages
app.use(express.json());

// This is our temporary array to store tasks (our simulated data repository)
let tasks = [
    { id: 1, title: "Complete Full Stack Project 2", completed: false },
    { id: 2, title: "Review Node.js architecture", completed: true }
];

// --- ENDPOINT 1: GET Request (Data Retrieval) ---
// This endpoint returns the entire list of tasks when requested
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// --- ENDPOINT 2: POST Request (Data Creation & Validation) ---
// This endpoint intercepts user input, validates it, and saves a new task
app.post('/tasks', (req, res) => {
    const { title } = req.body; // Extracting the title from the client's request payload

    // // Server-Side Data Validation Block
    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "Validation Failed: Task title is required." });
    }

    // Process: Build the new task object
    const newTask = {
        id: tasks.length + 1,
        title: title.trim(),
        completed: false
    };

    // Save to our temporary array
    tasks.push(newTask);

    // Output: Respond back with the newly created item
    res.status(201).json({
        message: "Task created successfully!",
        task: newTask
    });
});

// Activate the core engine and listen on Port 3000
app.listen(PORT, () => {
    console.log(`🚀 Server engine successfully deployed on http://localhost:${PORT}`);
});
