exports.add = (a,b) => {
    return a+b
}

exports.mult = (a,b) => {
    return a*b
}

//first way
//module.exports = add // now the add function is available everywhere


//second way --when more than one function need to be exports then we can export a object
/** 
module.exports = {
    add: add,
    mult: mult
}
*/