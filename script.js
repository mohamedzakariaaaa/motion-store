const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', function () {
    nav.classList.toggle('open');

    const isOpen = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
});

const products = [
    { name: 'Pro Training Tee', type: 'Sport · Dry-fit', price: 350, tag: 'NEW' },
    { name: 'Basic Shorts', type: 'Sport · Shorts', price: 300, tag: 'NEW' },
    { name: 'Flex Joggers', type: 'Sport · Pants', price: 550, tag: 'NEW' },
    { name: 'Oversized Hoodie', type: 'Casual · Cotton', price: 750, tag: 'HOT' },
    { name: 'Street Cargo', type: 'Casual · Pants', price: 650, tag: 'NEW' }
    
];

const grid = document.querySelector('.products-grid');

products.forEach(function (product) {
    const tagClass = product.tag === 'HOT' ? 'tag-hot' : '';

    grid.innerHTML += `
        <a href="#" class="product-card">
            <div class="product-img">
                <span class="product-tag ${tagClass}">${product.tag}</span>
                <span class="product-label">PRODUCT PHOTO</span>
            </div>
            <div class="product-info">
                <div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-type">${product.type}</p>
                </div>
                <span class="product-price">${product.price} EGP</span>
            </div>
        </a>
    `;
});