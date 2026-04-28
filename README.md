# Todo App - Backend API

A Node.js and Express-based RESTful API backend for the Todo application, with MongoDB database integration. Handles all CRUD operations for todo items with proper error handling and debugging logs.

## 🚀 Features

- **RESTful API**: Complete CRUD operations for todo items
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **CORS Enabled**: Cross-origin requests support for frontend communication
- **Error Handling**: Comprehensive try-catch blocks with detailed error messages
- **Debugging Logs**: Console logs for tracking requests and data operations
- **Environment Variables**: Secure configuration with .env file support

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Port**: 5000 (default)

## 📦 Dependencies

```json
{
  "express": "^4.18.0",
  "mongoose": "^7.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.0"
}
```

## 📁 Project Structure

```
todo-list-backend/
├── models/
│   └── todo.js           # MongoDB Todo schema and model
├── routes/
│   └── todoRoutes.js     # API endpoint routes
├── server.js             # Express server setup
├── .env                  # Environment variables (create this)
├── .env.example          # Example environment file
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## 🏗️ Installation & Setup

### 1. Prerequisites

- Node.js v14+ installed
- MongoDB account (local or MongoDB Atlas)
- npm package manager

### 2. Install Dependencies

```bash
cd todo-list-backend
npm install
```

### 3. Environment Configuration

Create a `.env` file:

```env
# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/todoapp

# Server Port
PORT=5000

# Environment
NODE_ENV=development
```

**Get MongoDB Connection String:**

- **Local MongoDB**: `mongodb://localhost:27017/todoapp`
- **MongoDB Atlas**: Go to [mongodb.com/cloud](https://mongodb.com/cloud), create cluster, copy connection string

### 4. Start the Server

```bash
npm start
```

Expected output:

```
MongoDB Connected
Server running on port 5000
```

## 📚 API Endpoints

### Base URL

```
http://localhost:5000/api/todos
```

### 1. Get All Todos

```
GET /api/todos
```

**Response** (200 OK):

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Buy groceries",
    "completed": false,
    "createdAt": "2024-04-27T10:30:00Z",
    "updatedAt": "2024-04-27T10:30:00Z"
  }
]
```

### 2. Create a Todo

```
POST /api/todos
Content-Type: application/json

{
  "title": "Learn React"
}
```

**Response** (200 OK):

```json
{
  "_id": "507f1f77bcf86cd799439012",
  "title": "Learn React",
  "completed": false,
  "createdAt": "2024-04-27T10:31:00Z",
  "updatedAt": "2024-04-27T10:31:00Z"
}
```

**Error** (400 Bad Request):

```json
{
  "message": "Title is required"
}
```

### 3. Update a Todo

```
PUT /api/todos/:id
Content-Type: application/json

{
  "title": "Learn React Hooks",
  "completed": true
}
```

**Response** (200 OK):

```json
{
  "_id": "507f1f77bcf86cd799439012",
  "title": "Learn React Hooks",
  "completed": true,
  "createdAt": "2024-04-27T10:31:00Z",
  "updatedAt": "2024-04-27T10:32:00Z"
}
```

### 4. Delete a Todo

```
DELETE /api/todos/:id
```

**Response** (200 OK):

```json
{
  "message": "Deleted"
}
```

## 🗄️ Database Schema

### Todo Model

```javascript
{
  title: {
    type: String,
    required: true,
    description: "Task description"
  },
  completed: {
    type: Boolean,
    default: false,
    description: "Completion status"
  },
  timestamps: true
}
```

## 🔍 Debugging Logs

The backend includes console logs for troubleshooting:

### Add Todo

```
📥 Request Body: { title: "New task" }
✅ Saved: { _id: "...", title: "New task", completed: false }
```

### Update Todo

```
📥 Update Request: [id] { title: "Updated task" }
✅ Updated: { _id: "...", title: "Updated task", completed: true }
```

### Error Handling

```
❌ Error: [error details]
```

## 🚀 Running the Full Stack

### Terminal 1: Backend

```bash
cd todo-list-backend
npm start
```

### Terminal 2: Frontend

```bash
cd todo-app-Frontend
npm run dev
```

### Access Application

```
Frontend: http://localhost:5173
Backend API: http://localhost:5000
```

## 🔗 Frontend Integration

The frontend connects via axios:

```javascript
const API = "http://localhost:5000/api/todos";

// Add todo
await axios.post(API, { title: "New task" });

// Fetch todos
const res = await axios.get(API);
```

## 📝 Common Issues & Solutions

### Issue: "MongoDB Connected" doesn't appear

**Solution**: Check `.env` file:

- Verify `MONGO_URI` is correct
- Ensure MongoDB service is running
- Check MongoDB credentials if using Atlas

### Issue: "Cannot POST /api/todos"

**Solution**: Verify middleware in server.js:

```javascript
app.use(express.json());
app.use("/api/todos", todoRoutes);
```

### Issue: CORS errors in frontend

**Solution**: Verify CORS is enabled:

```javascript
app.use(cors());
```

## 📄 License

MIT License

---

**Version**: 1.0.0  
**Status**: Production Ready ✅
