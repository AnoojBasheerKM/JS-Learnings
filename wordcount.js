var words = "python programming java python"


var text = words.split(" ")
console.log(text);
wc = {}

for(let w of text){
    if(w in wc){
        wc[w]++
    }
    else{
        wc[w]=1
    }
}

console.log(wc)