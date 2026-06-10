const API_URL = 'http://localhost:5000/tasks';

const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// 1. Fetch existing tasks from Project 2 backend when page loads
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.getTaskData || await response.json(); 
        taskList.innerHTML = '';
        tasks.forEach(task => renderTask(task));
    } catch (error) {
        console.error('Error connecting to backend server:', error);
    }
}

// 2. Render a single task element to UI
function renderTask(task) {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.title;
    if (task.completed) {
        span.classList.add('completed');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// 3. Post a new task to array storage server
async function addTask() {
    const title = taskInput.value.trim();
    if (!title) return;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });

        if (response.ok) {
            taskInput.value = '';
            fetchTasks();
        }
    } catch (error) {
        console.error('Error adding task item:', error);
    }
}

// 4. Send delete query payload to server router
async function deleteTask(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            fetchTasks();
        }
    } catch (error) {
        console.error('Error removing task entry:', error);
    }
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Run application view on boot
fetchTasks();