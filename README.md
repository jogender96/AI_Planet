Overview
This project is a full-stack application designed to facilitate document processing and question answering based on uploaded PDF files. The application consists of a FastAPI backend for handling file uploads, PDF processing, and natural language processing (NLP) for question answering. The frontend is built using React.js to provide a user-friendly interface for uploading documents, asking questions, and viewing answers.

Setup Instructions
Backend Setup

Ensure Python 3.x is installed.
Navigate to the backend directory.
Install dependencies using pip install -r requirements.txt.
Initialize the SQLite database by running python -m database.
Start the FastAPI server with uvicorn main:app --reload.
Frontend Setup

Ensure Node.js and npm are installed.
Navigate to the frontend directory.
Install dependencies using npm install.
Start the React development server with npm start.
Using the Application

Access the application at http://localhost:3000.
Upload PDF documents on the homepage.
Navigate to the document details page to ask questions related to the uploaded document.
View answers to questions and ask follow-up queries.
