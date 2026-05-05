# BudgetBuddy
ASE 220 Final Project - Backend API

This backend provides a RESTful API for a grocery budgeting and price comparison application. It allows users to create accounts, manage grocery lists, add items, and compare prices across different stores. The system supports full CRUD operations for lists and items, with all data stored persistently in MongoDB.

Authentication is handled using JSON Web Tokens, ensuring that only authorized users can access protected routes. Each user can only view and modify their own data, and all sensitive actions are validated and secured on the server side.

The API integrates with a React frontend and serves as the core logic layer of the application, handling data validation, business logic, and communication with the database.

Members: Tracey Kayembe Kamwimbi & Glorious Gbeblewou

Video Link:

Technologies used:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt (password hashing)

Setup and run instructions:
1. Clone the repository
2. Navigate to the server folder
3. Install dependencies: npm install
4. Create a .env file with the following: MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
5. Start the server: npm start
6. Server will run on: http://localhost:5000

Configuration notes required to run the project


Test credentials for authenticated users

List of completed MVPs
- User Authentication (Register, Login, Logout)
- Grocery List Management (Full CRUD)
- Grocery Item Management (Full CRUD
- Store Price Comparison
- Budget Tracking per List

List of any stretch features

Comprehensive REST API documentation that includes

API path

HTTP method
purpose of the endpoint
required input parameters or request body
example request
example response
authentication/authorization requirement (if applicable)
possible error responses/status codes
