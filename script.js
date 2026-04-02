// script.js

// Functionality for purchase button
const purchaseButton = document.getElementById('purchase-button');

purchaseButton.addEventListener('click', () => {
    addToCart();
    showNotification('Item added to cart!');
});

// Function to add items to cart
function addToCart() {
    // Logic to add the item to the cart
    console.log('Item added to cart');
}

// Function to show notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// CSS for smooth animations
const style = document.createElement('style');
style.innerHTML = `.notification { 
    position: fixed; 
    bottom: 20px; 
    right: 20px; 
    background: #4CAF50; 
    color: white; 
    padding: 15px; 
    border-radius: 5px; 
    transition: opacity 0.5s ease; 
} 
.fade-out { 
    opacity: 0; 
}`;
document.head.appendChild(style);