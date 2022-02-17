function calcFunction(price, tax=0.08){
    const result = price + price*tax;
    return result;
}

const result1 = calcFunction(100);
const result2 = calcFunction(100,0.1);
console.log(result1, result2)


/*
함수를 선언할때 파라미터에 초깃값을 설정할 수 있다.
tax는 0.08이라고 선언하였고 result1에 보면 tax의 값을 지정하지 않은 경우에는 기본값인
0.08을 사용하게 된다.

*/ 