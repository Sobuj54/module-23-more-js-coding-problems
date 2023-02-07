// cheapest phone price in an array of objects

const phones = [
    {brand : 'samsung', price : 27000, color : 'black', ram : '4 gb'},
    {brand : 'Xaomi', price : 25000, color : 'black', ram : '4 gb'},
    {brand : 'asus', price : 26000, color : 'black', ram : '4 gb'},
    {brand : 'realme', price : 44000, color : 'black', ram : '4 gb'},
    {brand : 'iphone', price : 5000, color : 'black', ram : '4 gb'},
]

function cheapestPhone (phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        if(cheapest.price > phones[i].price){
            cheapest = phones[i];
        }
    }
    return cheapest;
}

const myChoice = cheapestPhone(phones);
console.log(myChoice);