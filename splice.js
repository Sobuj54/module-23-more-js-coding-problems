const age = [22, 25, 24, 12, 13, 15 ,14];

// splice removes element form array
// and if necessary , inserts new elements in their place
// returning the deleted elements
// splice will change the original array
// 22, 45, 14 will be added to the original where splice removed some elements

const partial = age.splice(2,4, 22,45, 14);
console.log(partial)

// original array
console.log(age)