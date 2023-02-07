const shoppingCart = [
    {product : 't-shirt', price : 500, quantity: 3},
    {product : 'pant', price : 700, quantity: 3},
    {product : 'shoe', price : 1500, quantity: 3},
    {product : 'shirt', price : 700, quantity: 3}
];

function totalCost(shoppingCart){
    let sum = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        let cost = shoppingCart[i].price * shoppingCart[i].quantity;
        sum += cost;

    }
    return sum;
}
const total = totalCost(shoppingCart);
console.log(total);
