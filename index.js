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
        menuContainer.append(categoryElement, itemsList)
    })
}
function addToOrder(item) {
    order.push(item)
    totalPrice += prices[item]

    const orderItemsList = document.getElementById('order-items')
    orderItemsList.innerHTML = order.map(item => `<li>${item} - R${prices[item].toFixed(2)}</li>`).join('')

    document.getElementById('order-total').textContent = totalPrice.toFixed(2)
}
displayMenuItems(menu)
