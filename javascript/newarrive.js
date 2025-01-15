document.addEventListener('DOMContentLoaded', () => {
    // Count for the products
    const products = document.querySelectorAll(".new-arrival");
    const productCount = products.length;
    document.getElementById("product-count").innerHTML = `${productCount} items`;
});
