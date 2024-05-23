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
    {
        img:"./img/products/biscuit/turron.jpg",
        name:"Turrón",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/lecheasada.jpg",
        name:"Leche Asada",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/pañuelo.jpg",
        name:"Pañuelo",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/empanadadulce.jpg",
        name:"Empanada Dulce",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    // {
    //     img:"./img/products/biscuit/zebra.jpg",
    //     name:"Zebra",
    //     quantity: "12",
    //     description:"Some stuff here!",
    //     price:"s/. 6.00"
    // },
    {
        img:"./img/products/biscuit/kinkon.jpg",
        name:"Kinkon",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/chancay.jpg",
        name:"Chancay",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    // {
    //     img:"./img/products/biscuit/bizcocho.jpg",
    //     name:"Bizcocho",
    //     quantity: "12",
    //     description:"Some stuff here!",
    //     price:"s/. 6.00"
    // },
    {
        img:"./img/products/biscuit/caramandunga.jpg",
        name:"Caramandunga",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/keketajada.jpg",
        name:"Keke Tajada",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/tortahelada.jpg",
        name:"Torta Helada",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/tortachocolate.jpg",
        name:"Torta Fudge Chocolate",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/tortavainilla.jpg",
        name:"Torta Fudge Vainilla",
        quantity: "12",
        description:"Some stuff here!",
        price:"s/. 6.00"
    },
    {
        img:"./img/products/biscuit/velonovia.jpg",
        name:"Velo de Novia",
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
                    <p class="card-text" hidden>Precio: <strong>${biscuit.price}</strong></p>
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