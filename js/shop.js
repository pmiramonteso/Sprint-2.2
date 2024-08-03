// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

function buy(id) {

    let productoEncontrado = null
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            productoEncontrado = products[i];
            break
        }
    }

    if (productoEncontrado) {
    let productoCarrito = null
    for (let j = 0; j < cart.length; i++) {
        if (cart[i].id === id) {
            productoCarrito = cart[i];
            break
        }
    }
    if (productoCarrito) {
        productoCarrito.quantity += 1;
        console.log('Añadimos producto:', productoCarrito);
    } else {
        cart.push({...productoEncontrado, quantity: 1});
        console.log('Producto añadido al carrito:', productoEncontrado);
    } 
    printCart()
    } else {
        console.log('Producto no encontrado');
    }
}

function cleanCart() {
    cart = [];
    const cartList = document.getElementById('cart_list');
    cartList.innerHTML = '';

    const precioTotal = document.getElementById('total_price');
    precioTotal.textContent = '0.00';

    console.log('Carrito vaciado');
}

function calculateTotal() {
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity
    } return total;
}


function applyPromotionsCart() {
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
    
    if (item.name.toLowerCase().includes('aceite') && item.quantity >= 3) {
        item.subTotalWithDescount = (item.price * item.quantity * 0.80).toFixed(2);
    }
    else if (item.name.toLowerCase().includes('pasta') && item.quantity >= 10) {
        item.subTotalWithDescount = (item.price * item.quantity * 0.70).toFixed(2);
    } else {
        item.subtotalWithDiscount = null;
    }
}
console.log('Promociones aplicadas');
printCart();
}

function printCart() {
    const cartList = document.getElementById('cart_list');
    const totalPriceElement = document.getElementById('total_price');
    cartList.innerHTML = '';
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const subtotal = item.subtotalWithDiscount 
                         ? parseFloat(item.subtotalWithDiscount) 
                         : (item.price * item.quantity);
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${item.name}</th>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${subtotal.toFixed(2)}</td>
            <td><button onclick="removeFromCart(${item.id})" class="btn btn-danger btn-sm">Remove</button></td>
        `;
        cartList.appendChild(row);
    }
    totalPriceElement.textContent = total.toFixed(2);
}

function removeFromCart(id) {

}

function open_modal() {
    printCart();
}