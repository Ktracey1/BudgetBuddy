# BudgetBuddy
ASE 220 Final Project

200-word abstract: 
members: Tracey Kayembe Kamwimbi & Glorious Gbeblewou

Video Link:

Technologies uses:

Setup and run instructions

Configuration notes required to run the project


Test credentials for authenticated users

List of completed MVPs:
MVP 1: User Authentication
  Register
  Login
  Logout
  Protected routes
MVP 2: Grocery Lists
  Users can:
    Create a list (with a budget)
    View their lists
    Edit list name/budget
    Delete a list
MVP 3: Grocery Items
  Inside each list:
    Add item (name, quantity)
    Edit item
    Delete item
    View items
MVP 4: Store Price Comparison
  For each item:
    Add prices for multiple stores
    View price comparison
    Identify the cheapest option
MVP 5: Budget Tracking
  Show total cost of list
  Compare total vs budget



List of any stretch features

Comprehensive REST API documentation that includes

API path:
Auth -
POST /api/auth/register
POST /api/auth/login

Lists -
GET /api/lists
POST /api/lists
PUT /api/lists/:id
DELETE /api/lists/:id

Items -
GET /api/lists/:listId/items
POST /api/lists/:listId/items
PUT /api/items/:itemId
DELETE /api/items/:itemId


HTTP method
purpose of the endpoint
required input parameters or request body
example request
example response
authentication/authorization requirement (if applicable)
possible error responses/status codes
