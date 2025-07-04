let greet = (user)=>{
    console.log(`hello ${user}`);
    
}

greet("anooj")

let add = (n1,n2) =>{
    return n1+n2
}

// console.log(add(4,5));
add(3,6)

var sub = add.map(n=> n*3)
console.log(sub);
