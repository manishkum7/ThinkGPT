# ThinkGPT 🤖

ThinkGPT is a full-stack AI chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and an LLM API (OpenAI / OpenRouter). Users can chat with an AI assistant, start new conversations, and revisit their previous chat history.

## ✨ Features

- AI-powered conversations using an LLM API
- Create new chat conversations
- Persistent chat history stored in MongoDB
- Retrieve and display previous conversations
- Thread-based conversation management
- Responsive chat interface

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- REST APIs
- OpenAI / OpenRouter API

## 🔄 How It Works

```
User enters a prompt
        ↓
React Frontend
        ↓
Express.js REST API
        ↓
LLM API (OpenAI / OpenRouter)
        ↓
AI-generated response
        ↓
MongoDB (saved with thread ID)
        ↓
Conversation history
```

The frontend sends the user's prompt to the Express backend. The backend gets the response from the LLM API, saves the messages in MongoDB under a thread ID, and returns the reply to the frontend. This lets users reopen earlier threads and continue where they left off.

## ⚙️ Getting Started

### Prerequisites
- Node.js and npm
- A MongoDB database (MongoDB Atlas or local)
- An API key for the LLM provider

### Installation

1. Clone the repository

```bash
git clone https://github.com/manishkum7/ThinkGPT.git
cd ThinkGPT
```

2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=8080
MONGODB_URI=your_mongodb_connection_string
API_KEY=your_llm_api_key
```

Start the server:

```bash
node server.js
```

3. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

## 👨‍💻 Author

**Manish Kumar**

GitHub: [Manish](https://github.com/manishkum7)
