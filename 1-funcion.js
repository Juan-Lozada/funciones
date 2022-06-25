// ---------antes-------

function example(a, b, c){
    return a+b+c
    }

// ---------despues-------

var example = function(){
    example(a+b+c)
}
console.log(example())







