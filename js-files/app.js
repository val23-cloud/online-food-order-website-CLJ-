let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'APPUM',
        image: 'd.jpg',
        price: 10
    },
    {
        id: 2,
        name: 'PUTTU',
        image: 'd1.jpg',
        price: 10
    },
    {
        id: 3,
        name: 'POROTTA',
        image: 'd2.jpg',
        price: 10
    },
    {
        id: 4,
        name: 'WHEAT POROTTA',
        image: 'd3.jpg',
        price: 12
    },
    {
        id: 5,
        name: 'DOSA',
        image: 'd4.jpg',
        price: 10
    },
    {
        id: 6,
        name: 'GHEE ROAST',
        image: 'd5.jpg',
        price: 40
    },
    {
        id: 7,
        name: 'MASALA DOSA',
        image: 'd6.webp',
        price: 50
    },
    {
        id: 8,
        name: 'CHAPATHI ',
        image: 'd8.jpg',
        price: 10
    },
    {
        id: 9,
        name: 'BEEF FRY',
        image: 'd9.jpg',
        price: 100
    },
    {
        id: 10,
        name: 'BEEF CHILLI',
        image: 'd10.jpg',
        price: 120
    },
    {
        id: 11,
        name: 'BOTTI',
        image: 'd11.jpg',
        price: 60
    },
    {
        id: 12,
        name: 'CHICKEN KADAI',
        image: 'd12.webp',
        price: 100
    },
    {
        id: 13,
        name: 'PEPPER CHICKEN',
        image: 'd13.jpg',
        price: 110
    },
    {
        id: 14,
        name: 'GINGER CHICKEN',
        image: 'd14.jpg',
        price: 100
    },
    {
        id: 15,
        name: 'GARLIC CHICKEN',
        image: 'd15.jpg',
        price: 100
    },
    {
        id: 16,
        name: 'CHICKEN KONDATTAM',
        image: 'd16.jpg',
        price: 120
    },
    {
        id: 17,
        name: 'BUTTER CHICKEN',
        image: 'd17.jpg',
        price: 120
    },
    {
        id: 18,
        name: 'CHICKEN CHETTINADU',
        image: 'd18.jpg',
        price: 110
    },
    {
        id: 19,
        name: 'CHICKEN 65',
        image: 'd19.jpg',
        price: 100
    },
    {
        id: 20,
        name: 'GOBI MANCHURIAN',
        image: 'd20.jpg',
        price: 60
    },
    {
        id: 21,
        name: 'CHILLY CHICKEN',
        image: 'd21.jpg',
        price: 100
    },
    {
        id: 22,
        name: 'GOBI 65',
        image: 'd22.webp',
        price: 60
    },
    {
        id: 23,
        name: 'CHILLI GOBI',
        image: 'd23.jpg',
        price: 80
    },
    {
        id: 24,
        name: 'PANEER CHILLI',
        image: 'd25.jpg',
        price: 100
    },
    {
        id: 25,
        name: 'PANEER MASALA',
        image: 'd24.jpg',
        price: 100
    },
    {
        id: 26,
        name: 'PANEER BUTTER MASALA',
        image: 'd26.webp',
        price: 120
    },
    {
        id: 27,
        name: 'VEGETABLE KURUMA',
        image: 'd27.jpg',
        price: 30
    },
    {
        id: 28,
        name: 'EGG ROAST',
        image: 'd28.PNG',
        price: 30
    },
    {
        id: 29,
        name: 'FISH CURRY',
        image: 'd29.jpg',
        price: 40
    },
    {
        id: 30,
        name: 'FISH FRY',
        image: 'd30.jpg',
        price: 40
    },
    {
        id: 31,
        name: 'TOMATO FRY',
        image: 'd31.jpg',
        price: 40
    },
    {
        id: 32,
        name: 'ALFAHAM',
        image: 'd32.jpg',
        price: 120
    },
    {
        id: 33,
        name: 'VEGETABLE FRIED RICE',
        image: 'd33.jpg',
        price: 80
    },
    {
        id: 34,
        name: 'EGG FRIED RICE',
        image: 'd34.jpg',
        price: 100
    },
    {
        id: 35,
        name: 'CHICKEN FRIED RICE',
        image: 'd35.jpg',
        price: 120
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">Rs.${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img class="cart-image" src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>Rs.${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}