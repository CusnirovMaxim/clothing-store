let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice, size, gender) {
    if (!size || !gender) {
        alert("Пожалуйста, выберите размер и пол.");
        return;
    }

    const product = { name: productName, price: productPrice, size: size, gender: gender };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();
    alert(`${productName} добавлена в корзину!`);
}

function displayCartItems() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} (Пол: ${item.gender}, Размер: ${item.size}) - ${item.price} лей`;
        cartItemsElement.appendChild(li);
        total += item.price; // Считаем общую сумму
    });

    document.getElementById('cart-total').innerText = `Всего: ${total} лей.`;
}

// Функция для обновления счетчика корзины
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Функция для очистки корзины
function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    displayCartItems();
    updateCartCount();
}

// Вызываем displayCartItems только на странице корзины
if (window.location.pathname.includes('cart.html')) {
    displayCartItems();
    updateCartCount();
}
