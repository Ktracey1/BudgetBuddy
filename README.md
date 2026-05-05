# BudgetBuddy
## ASE 220 Final Project 

**Abstract**  
This is a full-stack web application named BudgetBuddy that helps users manage grocery budgets and compare item prices across different stores. Users can create grocery lists, add items, assign prices from multiple stores, and track whether they are staying within their budget.

This application is built as a multi-tier system with a React frontend, Node.js/Express backend, and MongoDB database for persistent storage. All user actions are securely handled through authenticated API requests, and each user can only access their own data.

Core functionality includes full CRUD operations for grocery lists and items, user authentication, budget tracking, and store price comparison for cost optimization.

**Members:** Tracey Kayembe Kamwimbi & Glorious Gbeblewou

Video Link:

**Tech Stack**  
*Frontend:*
- React
- JavaScript
- HTML/CSS
- React Router
- Fetch / Axios
  
*Backend:*
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt


**Setup and Run Instructions**
1. Clone the Repository
2. Start the Backend Server:
   - cd server
   - npm install
   - npm start    
Backend runs on: http://localhost:5000
3. Start the Frontend Server:
   open a new terminal  
   - cd client
   - npm install
   - npm start  
Frontend runs on: http://localhost:3000

**Test credentials for authenticated users**  
Username: testuser  
Password: test123


***List of completed MVPs -***  
**User Authentication**  
- Register
- Login
- Logout
- Protected routes
  
**Grocery Lists (CRUD)**   
Users can:
- Create a list (with a budget)
- View their lists
- Edit list name/budget
- Delete a list

**Grocery Items (CRUD)**  
Inside each list:
- Add item (name, quantity)
- Edit item
- Delete item
- View items

**Store Price Comparison**  
For each item:
- Add prices for multiple stores
- View price comparison
- Identify the cheapest option

**Budget Tracking**   
- Show total cost of list
- Compare total vs budget

**Stretch Features**  
- Side-by-side store comparison view
- Automatic cheapest store highlighting
- Sorting/filtering items by price or name

#### Comprehensive REST API documentation that includes  
**API path**  
*Auth*  
- POST /api/auth/register: creates a new user account
- POST /api/auth/login: authenticate user and return JWT token

*Lists*  
- GET /api/lists: gets all lists for logged-in user
- POST /api/lists: creates a grocery list
- PUT /api/lists/:id: updates a list
- DELETE /api/lists/:id: deletes a list

*Items*  
- GET /api/lists/:listId/items: get items in a list
- POST /api/lists/:listId/items
- PUT /api/items/:itemId
- DELETE /api/items/:itemId: deletes an item

**Possible Errors:**
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> Forbidden
- 404 -> Not Found
- 500 -> Server Error

**Notes for Graders**
- Both frontend and backend must be running simultaneously
- MongoDB connection is required for full functionality
- All features are fully integrated and persist in the database
- Authentication is enforced on both frontend and backend
- The application demonstrates full-stack CRUD operations with secure user access control
