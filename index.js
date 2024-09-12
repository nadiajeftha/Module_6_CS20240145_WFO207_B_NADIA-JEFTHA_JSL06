const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const prices ={
    "Garlic Bread" : 5.00,
    "Bruschetta" : 6.00,
    "Margherita Pizza" : 12.00,
    "Spaghetti Carbonara" : 14.00,
    "Tiramisu" : 7.00,
    "Cheesecake" : 6.50,
}

let order = []
let totalPrice = 0

function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu')

    Object.keys(menu).forEach(category => {
        const categoryElement = document.createElement('h3')
        categoryElement.textContent = category

        const itemsList = document.createElement('ul')
        menu[category].forEach(item => {
            const itemElement = document.createElement('li')
            itemElement.textContent = item
            itemElement.addEventListener('click' , () => addToOrder(item))
            itemsList.appendChild(itemElement)
        })
    })
    // Get the menu container element from the HTML
   
    // Loop through each category and its items in the menu object

        // Create an element to represent the category

        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
