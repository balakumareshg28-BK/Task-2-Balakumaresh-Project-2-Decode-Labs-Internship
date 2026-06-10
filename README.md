State Management & API Foundations:

Before integrating the SQL database, this project established the core communication layer between the client and the server. This phase focused on building a "Headless" backend capable of managing data in system memory.

### Key Objectives Achieved:
- **RESTful API Architecture:** Designed specific endpoint routes (`/tasks`) to handle `GET`, `POST`, and `DELETE` requests.
- **Middleware Integration:** Implemented `express.json()` and `CORS` (Cross-Origin Resource Sharing) to allow the frontend and backend to talk to each other securely across different ports.
- **In-Memory Data Handling:** Mastered the use of JavaScript arrays and object manipulation to simulate a live database environment before moving to physical storage.
- **Dynamic DOM Rendering:** Built a high-performance frontend script that uses the `Fetch API` to asynchronously update the UI without needing to refresh the page.

### Project 2 Logic Flow:
1. **Request:** The user enters a task in the `index.html` dashboard.
2. **Action:** `script.js` sends a `POST` request with the task title to the Node.js server.
3. **Storage:** In this phase, the server stored that task in a temporary array variable.
4. **Response:** The server returned the updated list, which the frontend rendered instantly.

---
Full-Stack-TaskManager/
├── Frontend - Project 1/   # Project 2 Frontend (HTML, CSS, JS)
├── Backend/                # Project 3 Backend (Express, SQLite3)
│   ├── images/             # Your 4 Screenshots
│   ├── server.js
│   └── README.md           # This Documentation

---
In the Next task, I have integrated my frontend and my backend together (transitioned from building isolated components to creating a functional, full-stack application).
