// removing duplicate elements from an array

const names = ['sobuj', 'rayhan', 'maruf', 'ashikur', 'sobuj', 'rayhan', 'maruf', 'ashikur'];

function removeDuplicateNames (names){
    var name = [];
    for (let i =0; i < names.length; i++){
        if(name.includes(names[i]) === false){
            name.push(names[i]);
        }
    }
    return name;
}

const newName = removeDuplicateNames(names);
console.log(newName);