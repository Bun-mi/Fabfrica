document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    const searchInput = document.querySelector('.search');
    const searchButton = document.querySelector('.bar button');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        }
    });

    // Toggle Dropdowns for Filters (Mobile)
    const filterLabels = document.querySelectorAll('.top label');
    filterLabels.forEach(label => {
        label.addEventListener('click', () => {
            const select = label.nextElementSibling;
            select.classList.toggle('open');
        });
    });

    // Count for the products
    const products = document.querySelectorAll(".stock-body-container");
    const productCount = products.length;
    document.getElementById("product-count").innerHTML = `${productCount} items`;
});

