let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = cart.reduce((sum, item) => sum + item.price, 0);

function displayCartItems() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} лей`;
        cartItemsElement.appendChild(li);
    });

    document.getElementById('cart-total').innerText = `Всего: ${total} лей.`;
}

// Функция для очистки корзины
function clearCart() {
    cart = []; // Очищаем массив корзины
    total = 0; // Сбрасываем общую сумму
    localStorage.removeItem('cart'); // Удаляем данные из localStorage
    displayCartItems(); // Обновляем отображение
    document.getElementById('cart-count').innerText = cart.length; // Обновляем счетчик корзины
}

// Вызываем displayCartItems только на странице корзины
if (window.location.pathname.includes('cart.html')) {
    displayCartItems();
    document.getElementById('cart-count').innerText = cart.length;
}
