//Task 1
const inventory = [
    {name: `pizza`, price: `12`, quantity: `30`},
    {name: `sandwich`, price: `10`, quantity: `50`},
    {name: `fries`, price: `4`, quantity: `100`},
    {name: `soda`, price: `3`, quantity: `60`},
]

//Task 2
let orders = []


//Task 3


function placeOrder (customerName, itemsOrdered) {
itemsOrdered.forEach(item => {
let product = inventory.find(product => product.name === item.name);
if (!product || product.quantity < item.quantity) {
    return (`Error: Not enough stock available`)
} else {
    return product.quantity -= item.quantity

}})

orders.push({
customerName,
items: itemsOrdered,
status: `Pending`
})}


placeOrder(`Mark`, [{name: `pizza`, quantity: 5}])
console.log(orders)
console.log(inventory)

//Task 4 

function calculateOrderTotal (order) {
    let product = inventory.find(product => product.name === order.name);
    order.reduce((total, item) => total + (item.quantity*item.price), 0)

}

let order = (`Mark`, [{name: `pizza`, quantity: 5},
                      {name: `soda`, quantity:10}])

console.log(calculateOrderTotal(order))

//Task 5
function completeOrder (customerName) {
    let order = orders.find(order => order.name === customerName)
    if (order.status = `Pending`) {
        return order.status = `Completed`
    } else 
       return `Error`
    }

console.log(completeOrder(`Mark`))
