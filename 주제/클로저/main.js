function makeCountrer(){
    let num=0; //은닉화

    return function(){
        return num++;
    }
}

let counter = makeCountrer();

console.log(counter());//0
console.log(counter());//1
console.log(counter());//2
