let num = 1

function show(){
    console.log("hi",num)
    num++
    show()
}

show()