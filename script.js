document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const navMenu = document.querySelector('nav ul');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Alert on button click
    const orderButton = document.querySelector('button');
    orderButton.addEventListener('click', () => {
        alert('Thank you for your order!');
    });
    document.addEventListener('DOMContentLoaded', () => {
        const slideshow = document.querySelector('.slideshow');
        const orderForm = document.getElementById('orderForm');
        const orderItemsContainer = document.getElementById('orderItems');
        const subtotalContainer = document.getElementById('subtotal');
    
        // Simulated menu items (replace with actual data)
        const menuItems = [
            { name: 'Kenyan Stew', image: 'path/to/food1.jpg', price: 12.99 },
            { name: 'Cameroonian Plantains', image: 'path/to/food2.jpg', price: 10.99 },
            { name: 'Berlin Fusion Dish', image: 'path/to/food3.jpg', price: 15.99 }
            // Add more items as needed
        ];
    
        // Function to generate slideshow HTML
        function generateSlideshow() {
            let html = '';
            menuItems.forEach(item => {
                html += `<div class="slide"><img src="${item.image}" alt="${item.name}"></div>`;
            });
            slideshow.innerHTML = html;
        }
    
        // Function to generate order items list
        function generateOrderItems() {
            let html = '';
            menuItems.forEach(item => {
                html += `<div class="order-item">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="item-details">
                                <h3>${item.name}</h3>
                                <p>$${item.price.toFixed(2)}</p>
                            </div>
                            <input type="number" min="0" max="10" value="0" class="item-quantity">
                        </div>`;
            });
            orderItemsContainer.innerHTML = html;
        }
    
        // Function to calculate subtotal
        function calculateSubtotal() {
            let subtotal = 0;
            const itemQuantities = document.querySelectorAll('.item-quantity');
            itemQuantities.forEach((input, index) => {
                subtotal += parseInt(input.value) * menuItems[index].price;
            });
            subtotalContainer.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
        }
    
        // Event listener for form submission
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault();
            calculateSubtotal();
            // Additional logic to handle submission (e.g., send data to server)
            alert('Order submitted! Thank you for your order.');
        });
    
        // Initialize slideshow and order items on page load
        generateSlideshow();
        generateOrderItems();
    
        // Event listener to update subtotal on quantity change
        orderItemsContainer.addEventListener('change', calculateSubtotal);
    });
    
});

