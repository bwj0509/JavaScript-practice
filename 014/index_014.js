function calcSum(...prices){
    let result = 0;
    for(const value of prices){
        result += value;
    }
    return result;
}

myResult = calcSum(100+50);
console.log(myResult);

/*
calcSum이라는 함수의 파라미터는 ...prices라고 표현이 되어있다.
파라미터의 개수가 정해지지 않고 아래에 함수를 실행시켰듯이 여러개의 파라미터를 가질 수 있는것이다.

*/