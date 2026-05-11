/**
*@typedef {Object} GroceryItem
*@property {string} id - Unqiue identifer for the item
*@property {string} name - Name of the product (e.g., 'Whole Milk')
*@property {string} category - Category of the product
*@property {number} price - Price of the product
*@property {number} quantity - Quantity of the product
*@property {string} unit - Unit of measurement (e.g., 'per gallon', 'per lb')
*@property {string} inStock - Availabilty status
*@property {string} aisle - Aisle location in the store
*/

export const CategoryTypes = {
    DAIRY: "Dairy",
    BAKERY: "Bakery",
    PRODUCE: "Produce",
    MEAT: "Meat",
    FROZEN: "Frozen",
    PANTRY: "Pantry",
    BEVERAGES: "Beverages",
}