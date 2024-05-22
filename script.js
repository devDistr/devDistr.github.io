const biscuit = [
    {
        img:"./img/products/biscuit/alfajor.jpg",
        name:"Alfajor",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/milhojas.jpg",
        name:"Mil Hojas",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 10.00"
    },
    {
        img:"./img/products/biscuit/keke.jpg",
        name:"Keke",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/brownie.jpg",
        name:"Brownie",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
]


var productCards = biscuit.map(function(biscuit) {
    return `
        <div class="col-md-4 pb-4">
            <div class="card mb-4 h-100">
                <img src="${biscuit.img}" class="card-img-top" style="max-width: 100%; max-height: 200px; object-fit:cover">
                <div class="card-body">
                    <h5 class="card-title">${biscuit.name}</h5>
                    <p class="card-text">${biscuit.description}</p>
                    <p class="card-text">Cantidad: <strong>${biscuit.quantity}</strong></p>
                    <p class="card-text">Precio: <strong>${biscuit.price}</strong></p>
                    <a href="#" class="btn btn-primary"><strong>Comprar</strong></a>
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