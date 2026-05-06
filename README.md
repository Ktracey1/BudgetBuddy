# BudgetBuddy
## ASE 220 Final Project 

**Abstract**  
This is a full-stack web application named BudgetBuddy that helps users manage grocery budgets and compare item prices across different stores. Users can create grocery lists, add items, assign prices from multiple stores, and track whether they are staying within their budget.

This application is built as a multi-tier system with a React frontend, Node.js/Express backend, and MongoDB database for persistent storage. All user actions are securely handled through authenticated API requests, and each user can only access their own data.

Core functionality includes full CRUD operations for grocery lists and items, user authentication, budget tracking, and store price comparison for cost optimization.

**Members:** Tracey Kayembe Kamwimbi & Glorious Gbeblewou

Video Link: https://www.youtube.com/watch?v=svjQ8ECfADo&t=1s

#### Tech Stack
*Frontend:*
- React
- JavaScript
- HTML/CSS
- React Router
- Fetch / Axios
  
*Backend:*
- Node.js
- Express.js
- MongoDB + Mongoose

*Authentication:*
- JSON Web Tokens (JWT)
- bcrypt (password hashing)


#### Setup and Run Instructions
1. Clone the Repository
   - git clone 
   - cd BudgetBuddy
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

#### Test credentials for authenticated users 
Username: testuser  
Password: test123


#### List of completed MVPs -
**User Authentication**  
- User registration and login
- JWT-based authentication
- Protected routes
  
**Grocery Management**   
Users can:
- Add grocery items
- View all saved items
- Update item details
- Delete items

**Store Price Comparison**  
- Store multiple prices per item
- Automatically compare store prices
- Identify cheapest store per item
- Calculate savings between cheapest and most expensive options

**Data Persistence**   
- All data stored in MongoDB
- Data persists after refresh and server restart

**Responsive UI**
- Works on desktop and mobile devices

#### Stretch Features**  
- Side-by-side store comparison view
- Automatic cheapest store highlighting
- Budget tracking concept

#### API Documentation  
Base URL: http://localhost:5000/api

#### AUTH ROUTES
**Register User** 
POST /auth/register  
Purpose: Create a new user account  
Request Body: username, email, password  
Response: User created successfully  

**Login User**  
POST /auth/login  
Purpose: Authenticate user and return JWT token  
Request Body: email, password  
Response: JWT token  

#### ITEM ROUTES (Protected - JWT required)  
**Get All Items**  
GET /items  
Purpose: Retrieve all grocery items  

**Get Items by List**
GET /items/:listId  
Purpose: Retrieve items in a specific list.  

**Add Item**  
POST /items/add  
Purpose: Create a grocery item with prices  

**Update Item**    
PUT /items/:id  
Purpose: Update an existing item  

**Delete Item**  
DELETE /items/:id  
Purpose: Delete an item  

#### PRICE COMPARISON  
Each item contains multiple store prices.
System compares prices to find cheapest store and savings.

#### ERROR RESPONSES
401 Unauthorized: Missing or invalid token
404 Not Found: Item does not exist
500 Server Error: Internal issue

**Notes for Graders**
- Both frontend and backend must be running simultaneously
- MongoDB connection is required for full functionality
- All features are fully integrated and persist in the database
- Authentication is enforced on both frontend and backend
- The application demonstrates full-stack CRUD operations with secure user access control
