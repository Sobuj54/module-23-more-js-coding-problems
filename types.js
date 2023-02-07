const country = "Bangladesh";
const age = 51;
const isIndependent = true;
const student = {
    id : 21064,
    dept : 'CSE' ,
    name : 'sobuj'
};
const friends = [22, 21, 24, 20, 22];

// checking types of above data
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// ----------
// console.log(typeof friends);
// we can not find type of array using typeof function
// we need to use Array.isArray
console.log(Array.isArray(friends));

// searching something in array
console.log(friends.includes(24));
// using if to fing an element in array
if (friends.indexOf(22) !== -1 ){

}


// concat: adding two arrays
const friendsAge = [20, 19, 25];
const newFriendsAge = friendsAge.concat(friends);
console.log(newFriendsAge)