
const shoppingCart = [
    {product : 't-shirt', price : 500},
    {product : 'pant', price : 700},
    {product : 'shoe', price : 1500},
    {product : 'shirt', price : 700}
];

function totalCost(shoppingCart){
    var sum = 0;
    for(let i = 0; i < shoppingCart.length ; i++){
        sum += shoppingCart[i].price;
    }
    return sum;
}

const myCost = totalCost(shoppingCart);
console.log(myCost); 