/*
1.show numbers form 1 to 50
2. if divisible by 3 show foo
3. if divisible by 5 show bar
4. if divisible by both 3 and 5 the show foobar
*/ 
for(let i = 1 ; i <= 50; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("foobar");
    }
    else if(i % 3 == 0){
        console.log("foo");
    }
    else if(i % 5 == 0){
        console.log("bar");
    }
    else{
        console.log(i);
    }
}