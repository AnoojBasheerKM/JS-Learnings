let myObject = {
    name : 'ideapad',
    brand : 'lenovo',
    processor : 'ryzen 5',
    others: {
        gpu:'nvidia',
        ram : '4'
    }

}

// for (let key in myObject){
//     console.log(key,myObject[key])
// }

for (let p in myObject.others){
    console.log(p,myObject.others[p])
}


