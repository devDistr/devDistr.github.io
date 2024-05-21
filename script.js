const biscuit = [
    {
        img:"./img/products/biscuit/alfajor.jpg",
        name:"alfajor",
        description:"",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/alfajor.jpg",
        name:"alfajor",
        description:"",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/alfajor.jpg",
        name:"alfajor",
        description:"",
        price:"s/. 6.00"
    },
]


var productCards = biscuit.map(function(biscuit) {
    return `
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="${biscuit.img}" class="card-img-top" alt="${biscuit.title}">
                <div class="card-body">
                    <h5 class="card-title">${biscuit.name}</h5>
                    <p class="card-text">${biscuit.description}</p>
                    <p class="card-text"><strong>${biscuit.price}</strong></p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
    `;
});

// Join the array of product card HTML strings into a single string
var productCardsHTML = productCards.join("");

// Get the HTML element where we want to display the product cards
var productContainer = document.getElementById("productContainer");

// Set the innerHTML of the product container element to the generated HTML
productContainer.innerHTML = productCardsHTML;